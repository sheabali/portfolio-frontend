'use client'; // Ensures it runs on the client side

import Container from '@/components/Container/Container';
import Image from 'next/image';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

const projects = [
  {
    id: 1,
    title: 'Crypto Screener Application',
    description:
      'I am Sheikh Pranto. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
    image: 'https://i.ibb.co.com/8DZtWWpM/image-771.png',
    link: 'https://sheib.netlify.app/',
  },
  {
    id: 2,
    title: 'Euphoria - Ecommerce (Apparels) Website Template',
    description:
      'I am Sheikh Pranto. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to specimen book.',
    image: 'https://i.ibb.co.com/9925DtpM/image-770.png',
    link: 'https://sheib.netlify.app/',
  },
  {
    id: 3,
    title: 'Blog Website Template',
    description:
      'I am Sheikh Pranto. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to specimen book.',
    image: 'https://i.ibb.co.com/Q7KW0z5b/image-770-1.png',
    link: 'https://sheib.netlify.app/',
  },
];

const Project = () => {
  return (
    <Container>
      <div className="bg-black min-h-screen p-6">
        <h1 className="my-10 text-center text-white text-4xl">
          My <span className="font-semibold">Projects</span>
        </h1>
        <div className="space-y-10 w-full mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-6xl mx-auto gap-6 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Left Side - Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={project.image}
                  alt="Project Image"
                  height={400}
                  width={400}
                  className="rounded-xl  h-auto object-cover"
                />
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-3xl font-bold">
                  {String(index + 1).padStart(2, '0')}
                </h2>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>

                {/* Link Icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-gray-400 hover:text-white text-lg"
                >
                  <LuSquareArrowOutUpRight size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Project;
