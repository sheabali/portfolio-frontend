/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  liveLink: z.string().url('Invalid URL format'),
  image: z.string().url('Invalid image URL'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
});

export type FormValues = z.infer<typeof formSchema>;

const BlogUpdatePage = () => {
  const { blogId } = useParams() as { blogId: string };
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  // Fetch existing blog data (for update)
  useEffect(() => {
    if (blogId) {
      const fetchBlog = async () => {
        try {
          const res = await fetch(
            `http://localhost:5000/api/v1/blogs/${blogId}`
          );
          const data = await res.json();
          if (res.ok) {
            setValue('title', data.title);
            setValue('liveLink', data.liveLink);
            setValue('image', data.image);
            setValue('description', data.description);
          } else {
            toast.error('Failed to load blog data');
          }
        } catch (error) {
          console.error('Error fetching blog:', error);
        }
      };
      fetchBlog();
    }
  }, [blogId, setValue]);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/update-blog${blogId ? `/${blogId}` : ''}`,
        {
          method: blogId ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      const text = await res.text(); // Get the response as text
      console.log('Response text:', text); // Log the response to inspect the content

      if (res.ok) {
        const result = JSON.parse(text); // Only parse if the response is valid JSON
        toast.success(result.message);
        reset();
      } else {
        toast.error(text);
      }
    } catch (err: any) {
      toast.error('Something went wrong');
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-10 w-[90%] mx-auto">
      <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="my-6 text-4xl font-semibold">
          {blogId ? 'Update Blog' : 'Create Blog'}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-base font-medium">
              Title
            </label>
            <Input
              id="title"
              type="text"
              {...register('title')}
              placeholder="Blog Title"
              className="mt-1 block w-full px-4 py-3 border-2 rounded border-black sm:text-sm"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="liveLink" className="block text-base font-medium">
              Blog Live Link
            </label>
            <Input
              id="liveLink"
              type="text"
              {...register('liveLink')}
              placeholder="https://example.com"
              className="mt-1 block w-full px-4 py-3 border-2 rounded border-black sm:text-sm"
            />
            {errors.liveLink && (
              <p className="text-red-500 text-sm">{errors.liveLink.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block text-base font-medium">
              Image URL
            </label>
            <Input
              id="image"
              type="text"
              {...register('image')}
              placeholder="https://example.com/image.jpg"
              className="mt-1 block w-full px-4 py-3 border-2 rounded border-black sm:text-sm"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-base font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register('description')}
              placeholder="Enter blog description..."
              className="mt-1 block w-full px-4 py-3 border-2 rounded border-black sm:text-sm"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <Button
              type="submit"
              className="w-full my-4 border font-bold rounded py-4 px-4 shadow-md"
              disabled={loading}
            >
              {loading ? 'Updating...' : blogId ? 'Update Blog' : 'Create Blog'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogUpdatePage;
