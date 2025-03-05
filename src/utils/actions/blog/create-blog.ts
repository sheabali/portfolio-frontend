'use server';

import { FormValues } from '@/app/(withDashboard)/dashboard/blog/page';

export const createBlog = async (data: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/create-blog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  });
  const blogInfo = await res.json();
  return blogInfo;
};
