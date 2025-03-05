'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Container from '@/components/Container/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoProjectSymlink } from 'react-icons/go';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SingleProject = () => {
  const params = useParams();
  const id = params?.id as string; // Get project ID from URL
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`);

        if (!res.ok) {
          throw new Error(`project not found`);
        }

        const data = await res.json();

        setProject(data);
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

    fetchProject();
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

  if (!project) {
    notFound(); // Show 404 page if project is not found
  }

  return (
    <Container>
      <Card className="p-4">
        {project.image && (
          <Image
            src={project.image}
            height={200}
            width={200}
            alt={project.title}
            className="w-full h-40 object-cover rounded-t-lg"
          />
        )}
        <CardHeader>
          <CardTitle className="text-3xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{project.description}</p>
          <div className="my-6 flex gap-7 items-center ">
            <strong>Live Link:</strong>{' '}
            <a className="text-2xl" href={project.liveLink}>
              <GoProjectSymlink />
            </a>
          </div>
          <p>
            <strong>Published:</strong>{' '}
            {project.timestamp
              ? new Date(project.timestamp).toLocaleDateString()
              : 'Unknown date'}
          </p>
          <div className="mt-6">
            <Link href="/project">
              <Button variant="outline">Back to projects</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleProject;
