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

import React from 'react';

const PTable = (projects: TProject[]) => {
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
                <Link href={`/dashboard/project/${project._id}`}>
                  <Button variant="outline" className="">
                    <FaEdit />
                  </Button>
                </Link>
                <Button variant="outline" className="">
                  <MdDeleteOutline className="" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PTable;
