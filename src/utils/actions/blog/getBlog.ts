'use server';

import { TBlog } from '@/components/constant/global';

export async function getBlogs(): Promise<TBlog[]> {
  try {
    const res = await fetch(
      'https://portfolio-server-cyan-sigma.vercel.app/api/v1/blogs',
      {
        cache: 'no-store', // Ensures fresh data
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return []; // Return an empty array in case of failure
  }
}
