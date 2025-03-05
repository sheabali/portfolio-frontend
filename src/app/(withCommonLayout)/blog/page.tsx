'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { TBlog } from '@/components/constant/global';

const Blog = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          'https://portfolio-server-cyan-sigma.vercel.app/api/v1/blogs'
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setBlogs(data);
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

    fetchBlogs();
  }, []);

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && blogs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogs.map((blog: TBlog) => (
            <Card key={blog._id} className="hover:shadow-lg transition-shadow">
              {blog.image && (
                <Image
                  src={blog.image}
                  height={300}
                  width={300}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>
                  {blog.content.length > 150
                    ? `${blog.content.slice(0, 150)}...`
                    : blog.content}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Published:</strong>{' '}
                  {blog.timestamp
                    ? new Date(blog.timestamp).toLocaleDateString()
                    : 'Unknown date'}
                </p>
                <div className="mt-3">
                  <Link href={`/blog/${blog._id}`} passHref>
                    <Button variant="outline">Read More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && !error && blogs.length === 0 && <p>No blogs found.</p>}
    </Container>
  );
};

export default Blog;
