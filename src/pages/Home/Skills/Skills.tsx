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

const Skills = () => {
  return (
    <Container>
      <div className="text-center my-14">
        <h1 className="text-4xl">
          My <span className="font-bold">Skills</span>
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-6">
        <div className="border border-black ">
          <Image
            src={Js}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          <Image
            src={Mongodb}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          {' '}
          <Image
            src={Node}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          <Image
            src={React}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          {' '}
          <Image
            src={Express}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          {' '}
          <Image
            src={Git}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          <Image
            src={Typescript}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          <Image
            src={NextJs}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          <Image
            src={Mongoose}
            width={100}
            height={100}
            alt="Sample Image"
            className="w-24 h-24 p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="border border-black">
          {' '}
          <Image
            src={Redux}
            width={100}
            height={100}
            alt="Sample Image"
            className="  p-4  mx-auto object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </Container>
  );
};

export default Skills;
