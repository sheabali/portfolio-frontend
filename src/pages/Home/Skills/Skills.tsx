'use client';

import {
  Express,
  Git,
  Js,
  Mongodb,
  Mongoose,
  NextJs,
  Node,
  React,
  Redux,
  Typescript,
} from '@/components/constant/global';

import Container from '@/components/Container/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  Js,
  Mongodb,
  Node,
  React,
  Express,
  Git,
  Typescript,
  NextJs,
  Mongoose,
  Redux,
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Skills = () => {
  return (
    <Container>
      <div className="text-center my-14">
        <h1 className="text-4xl">
          My <span className="font-bold">Skills</span>
        </h1>
      </div>

      <motion.div
        className="p-6 sm:p-10 bg-white rounded shadow"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-black rounded p-4 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={icon}
                width={100}
                height={100}
                alt={`Skill ${index + 1}`}
                className="w-20 h-20 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
};

export default Skills;
