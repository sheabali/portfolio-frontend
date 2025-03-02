'use server';

import { FormValues } from '@/app/(withDashboard)/dashboard/create-project/page';

export const createProject = async (data: FormValues) => {
  console.log(process.env.BACKEND_URL);
  const res = await fetch(`${process.env.BACKEND_URL}/create-project`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    cache: 'no-store',
  });
  const projectInfo = await res.json();
  return projectInfo;
};
