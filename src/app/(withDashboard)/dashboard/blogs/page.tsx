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
import { TBlog } from '@/components/constant/global';
import { MdDeleteOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getBlogs } from '@/utils/actions/blog/getBlog';
import { deleteBlog } from '@/utils/actions/blog/deleteBlog';
import { toast } from 'sonner';
import moment from 'moment'; // Import Moment.js

const Blogs = () => {
  const [Blogs, setBlogs] = useState<TBlog[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch Blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  // Handle Blog deletion
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this Blog?')) return;

    setLoading(true);
    try {
      await deleteBlog(id);
      toast.success('Blog deleted successfully!');

      // Refresh the list after deletion
      setBlogs((prev) => prev.filter((Blog) => Blog._id !== id));
    } catch (error) {
      toast.error('Failed to delete Blog.');
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
          {Blogs.length > 0 ? (
            Blogs.map((Blog) => (
              <TableRow key={Blog._id}>
                <TableCell>{Blog.title}</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>
                  {Blog.timestamp
                    ? moment(Blog.timestamp).format('YYYY-MM-DD') // Format the date with Moment.js
                    : 'N/A'}
                </TableCell>
                <TableCell className="text-right flex gap-2 justify-end">
                  <Link href={`/dashboard/Blog/${Blog._id}`}>
                    <Button variant="outline">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    onClick={() => Blog._id && handleDelete(Blog._id)}
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
                No Blogs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Blogs;
