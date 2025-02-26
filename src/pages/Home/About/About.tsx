import { AboutImg } from '@/components/constant/global';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <Container>
      <div className="flex items-center">
        <div className="w-[50%]">
          <Image
            className="mt-20"
            src={AboutImg}
            width={450}
            height={400}
            alt="img"
          />
        </div>
        <div className="w-[50%]">
          <div className="my-4">
            <h1 className="text-4xl">
              About <span className="font-bold">Me</span>
            </h1>
          </div>
          <div>
            <p>
              I m a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="my-4">
              I began my journey as a web developer in 2015, and since then, I
              ve continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I m building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              When I m not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
