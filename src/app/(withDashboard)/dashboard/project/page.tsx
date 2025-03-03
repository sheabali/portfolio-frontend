'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TProject } from '@/components/constant/global';
import { MdDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { deleteProject } from '@/utils/actions/deleteProject';
import { getProjects } from '@/utils/actions/getProjects';
import moment from 'moment';

const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Handle project deletion
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    setLoading(true);
    try {
      await deleteProject(id);
      alert('Project deleted successfully!');

      // Refresh the list after deletion
      setProjects((prev) => prev.filter((project) => project._id !== id));
    } catch (error) {
      alert('Failed to delete project.');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-[95%] mx-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <TableRow key={project._id}>
                <TableCell>{project.title}</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>
                  {project.timestamp
                    ? moment(project.timestamp).format('YYYY-MM-DD') // Format the date with Moment.js
                    : 'N/A'}
                </TableCell>
                <TableCell className="text-right flex gap-2 justify-end">
                  <Link href={`/dashboard/project/${project._id}`}>
                    <Button variant="outline">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => project._id && handleDelete(project._id)}
                    variant="outline"
                    disabled={loading}
                  >
                    {loading ? 'Deleting...' : <MdDeleteOutline />}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No projects found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Projects;
