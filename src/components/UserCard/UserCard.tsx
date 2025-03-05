/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function UserCard({ user }: { user: any }) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={
          user.image ||
          'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
        }
        width={120}
        height={120}
        alt="User Avatar"
        className="mx-auto rounded-full border-4 border-gray-300"
      />
      <h1 className="text-2xl font-semibold mt-4 text-gray-800">
        Welcome, {user.name}!
      </h1>
      <p className="text-gray-600 mt-2">📧 {user.email}</p>
      <motion.button
        className="mt-5 px-5 py-2 bg-black text-white rounded-lg shadow-md  transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/"> Go to Home</Link>
      </motion.button>
    </motion.div>
  );
}
