'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaChevronDown,
  FaStar,
  FaProjectDiagram,
  FaMicroblog,
} from 'react-icons/fa';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { MdCreateNewFolder, MdDashboard } from 'react-icons/md';
import { IoCreateSharp } from 'react-icons/io5';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlog, setBlog] = useState(false);

  return (
    <div className="bg-black p-4 text-white min-h-screen">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="block p-2 rounded-md hover:bg-gray-800"
          >
            <MdDashboard className="inline-block w-4 h-4 mr-2" />
            Dashboard
          </Link>
        </li>
        {/* Collapsible Section */}
        <li>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <button className="flex items-center justify-between w-full p-3 rounded-md hover:bg-gray-800">
                <div className="flex items-center space-x-2">
                  <FaProjectDiagram className="h-5 w-5" />
                  <span>Project</span>
                </div>
                <FaChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/dashboard/create-project"
                    className="block p-2 rounded-md hover:bg-gray-800"
                  >
                    <IoCreateSharp className="inline-block w-4 h-4 mr-2" />
                    Create Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/project"
                    className="block p-2 rounded-md hover:bg-gray-800"
                  >
                    <FaStar className="inline-block w-4 h-4 mr-2" />
                    Projects
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </li>
        <li>
          <Collapsible open={isBlog} onOpenChange={setBlog}>
            <CollapsibleTrigger asChild>
              <button className="flex items-center justify-between w-full p-3 rounded-md hover:bg-gray-800">
                <div className="flex items-center space-x-2">
                  <FaMicroblog className="h-5 w-5" />
                  <span>Blogs</span>
                </div>
                <FaChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="ml-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/dashboard/blog"
                    className="block p-2 rounded-md hover:bg-gray-800"
                  >
                    <MdCreateNewFolder className="inline-block w-4 h-4 mr-2" />
                    Create Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/dashboard/blogs"
                    className="block p-2 rounded-md hover:bg-gray-800"
                  >
                    <FaStar className="inline-block w-4 h-4 mr-2" />
                    Blogs
                  </Link>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="block p-2 rounded-md hover:bg-gray-800"
          >
            <BiSolidMessageSquareDetail className="inline-block w-4 h-4 mr-2" />
            Messages
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
