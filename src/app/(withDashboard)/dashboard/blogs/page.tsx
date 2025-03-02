/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useForm } from 'react-hook-form';

type FormValues = {
  title: string;
  content: string;
  image: string;
  likes: number;
  category: string;
};

const Blog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return <div className="my-10 w-[90%] mx-auto">blog</div>;
};

export default Blog;
