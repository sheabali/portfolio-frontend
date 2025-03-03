/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createBlog } from '@/utils/actions/blog/create-blog';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export type FormValues = {
  title: string;
  content: string;
  image: string;
  category: string;
};

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    try {
      const res = await createBlog(data);
      if (res) {
        toast.success(res.message);
        // localStorage.setItem('accessToken', res.accessToken);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  return (
    <div className="my-10 w-[90%] mx-auto">
      <div>
        <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
          <h1 className="my-6 text-4xl font-semibold">Project Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-base font-medium">
                Title
              </label>
              <Input
                id=""
                type="text"
                {...register('title')}
                placeholder="Title"
                className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black  sm:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="Content" className="block text-base font-medium">
                Content
              </label>
              <Input
                id="content"
                type="text"
                {...register('content')}
                placeholder="Content "
                className="mt-1 block w-full px-4 py-5  border-[2px] rounded-none border-black  sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image" className="block text-base font-medium">
                image
              </label>
              <Input
                id="image"
                type="text"
                {...register('image')}
                placeholder="Image "
                className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black  sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="category" className="block text-base font-medium">
                Category
              </label>
              <Input
                id="category"
                type="text"
                {...register('category')}
                placeholder="Category"
                className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black  sm:text-sm"
                required
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full my-4 border font-bold rounded-none py-6 px-4  shadow-md"
              >
                Create Blog
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
