'use client';

import React, { useEffect, useState } from 'react';
import Container from '@/components/Container/Container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { TProject } from '@/components/constant/global';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GoProjectSymlink } from 'react-icons/go';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Fix error type

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          'https://portfolio-server-cyan-sigma.vercel.app/api/v1/projects'
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        setProjects(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); // ✅ Works correctly now
        } else {
          setError(String(error)); // ✅ Handles unknown error types
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project: TProject) => (
            <Card
              key={project._id}
              className="hover:shadow-lg transition-shadow"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.description.length > 80
                    ? `${project.description.slice(0, 80)}...`
                    : project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p>
                  <strong>Date:</strong>{' '}
                  {new Date(project?.timestamp ?? '').toLocaleDateString()}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <Link href={`/projects/${project._id}`} passHref>
                    <Button variant="outline">See detailes </Button>
                  </Link>
                  <div className=" flex gap-7 items-center ">
                    <strong>Live Link:</strong>{' '}
                    <a
                      className="text-2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.liveLink}
                    >
                      <GoProjectSymlink />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && !error && projects.length === 0 && <p>No projects found.</p>}
    </Container>
  );
};

export default Project;
