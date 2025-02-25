'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { logo } from '../constant/global';

// type UserProps = {
//   user?: {
//     name?: string | null | undefined;
//     email?: string | null | undefined;
//     image?: string | null | undefined;
//   };
// };

const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between bg-white border-b py-4">
      <div className="flex items-center">
        <div className="relative lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="absolute mt-3 z-10 p-2 shadow-md bg-white rounded-md w-52"
          >
            <li className="py-2 font-bold px-4 hover:bg-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/about">About Us</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="ml-4 text-xl font-semibold text-gray-800 hover:text-gray-600"
        >
          <Image src={logo} width={30} height={30} alt="Logo" />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex font-medium space-x-6 text-gray-800">
          <li className="hover:text-gray-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/support">Support</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="flex font-medium items-center">
        <Button className="font-bold">
          Resume <Download />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
