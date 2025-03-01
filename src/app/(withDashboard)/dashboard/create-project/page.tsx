/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

type FormValues = {
  title: string;
  liveLink: string;
  image: string;
  description: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
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
              <label
                htmlFor="Live Link"
                className="block text-base font-medium"
              >
                Project
              </label>
              <Input
                id="liveLink"
                type="text"
                {...register('liveLink')}
                placeholder="Project "
                className="mt-1 block w-full px-4 py-5  border-[2px] rounded-none border-black  sm:text-sm"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="image" className="block text-base font-medium">
                Image
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
              <label
                htmlFor="Description"
                className="block text-base font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register('description', {
                  required: 'Description is required',
                })}
                placeholder="Enter description..."
                className="mt-1 block w-full px-4 py-5 border-[2px] rounded-none border-black  sm:text-sm"
              />
            </div>

            <div>
              <Button
                type="submit"
                className="w-full my-4 border font-bold rounded-none py-6 px-4  shadow-md"
              >
                Create Project
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
