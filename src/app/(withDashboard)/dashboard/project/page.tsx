import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TProject } from '@/components/constant/global';

const Projects = async () => {
  const res = await fetch('http://localhost:5000/api/v1/projects', {
    cache: 'no-store',
  }); // No cache for fresh data
  const projects: TProject[] = await res.json();
  console.log(projects);

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
          {projects.map((project: TProject, index: number) => (
            <TableRow key={project._id || index}>
              <TableCell>{project.title}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <button className="text-blue-500">Edit</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Projects;
