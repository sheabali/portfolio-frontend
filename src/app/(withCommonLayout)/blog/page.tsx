'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/Container/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { TBlog } from '@/components/constant/global';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/blogs');

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
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
                {/* <CardDescription>{blog.description}</CardDescription> */}
              </CardHeader>
              <CardContent>
                {/* <p>
                  <strong>Author:</strong> {blog.author}
                </p> */}
                <p>
                  <strong>Published:</strong>{' '}
                  {blog.timestamp
                    ? new Date(blog.timestamp).toLocaleDateString()
                    : 'Unknown date'}
                </p>
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
