'use server';

import { TProject } from '@/components/constant/global';

export async function getProjects(): Promise<TProject[]> {
  try {
    const res = await fetch('http://localhost:5000/api/v1/projects', {
      cache: 'no-store', // Ensures fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Return an empty array in case of failure
  }
}
