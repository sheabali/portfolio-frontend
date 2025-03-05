/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createBlog } from '@/utils/actions/blog/create-blog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters' }),
  image: z.string().url({ message: 'Invalid image URL' }),
  category: z
    .string()
    .min(6, { message: 'Category must be at least 6 characters' }),
});

export type FormValues = z.infer<typeof formSchema>;

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await createBlog(data);

      if (res) {
        toast.success(res.message);
        // localStorage.setItem('accessToken', res.accessToken);
        reset();
      }
    } catch (err: any) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="my-10 w-[90%] mx-auto">
      <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="my-6 text-4xl font-semibold">Blog Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-base font-medium">
              Title
            </label>
            <Input
              id="title"
              type="text"
              {...register('title')}
              placeholder="Title"
              className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
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
              placeholder="Image URL"
              className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-base font-medium">
              Category
            </label>
            <Input
              id="category"
              {...register('category')}
              placeholder="Enter Category..."
              className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-base font-medium">
              Content
            </label>
            <textarea
              id="content"
              {...register('content')}
              placeholder="Blog Content"
              className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black sm:text-sm"
            />
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content.message}</p>
            )}
          </div>

          <div>
            <Button
              type="submit"
              className="w-full my-4 border font-bold rounded-none py-6 px-4 shadow-md"
            >
              Create Blog
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
