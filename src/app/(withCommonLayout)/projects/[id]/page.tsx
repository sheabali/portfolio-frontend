'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Container from '@/components/Container/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SingleProject = () => {
  const params = useParams();
  const id = params?.id as string; // Get blog ID from URL
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log('blogId', id);
  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`);
        console.log(res);
        if (!res.ok) {
          throw new Error(`Blog not found`);
        }

        const data = await res.json();
        console.log(data);
        setBlog(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-10 w-1/2 mt-4" />
        <Skeleton className="h-24 w-full mt-2" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p className="text-red-500 text-center">{error}</p>
      </Container>
    );
  }

  if (!blog) {
    notFound(); // Show 404 page if blog is not found
  }

  return (
    <Container>
      <Card className="p-4">
        {blog.image && (
          <Image
            src={blog.image}
            height={200}
            width={200}
            alt={blog.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
        )}
        <CardHeader>
          <CardTitle className="text-3xl">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{blog.description}</p>
          <p className="mt-4">
            <strong>Author:</strong> {blog.author || 'Unknown'}
          </p>
          <p>
            <strong>Published:</strong>{' '}
            {blog.timestamp
              ? new Date(blog.timestamp).toLocaleDateString()
              : 'Unknown date'}
          </p>
          <div className="mt-6">
            <Link href="/blog">
              <Button variant="outline">Back to Blogs</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleProject;
