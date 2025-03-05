import Navbar from '@/components/shared/Navbar';
import About from '@/pages/Home/About/About';
import Banner from '@/pages/Home/Banner/Banner';
import Contact from '@/pages/Home/Contact/Contact';
import Project from '@/pages/Home/Project/Project';
import Skills from '@/pages/Home/Skills/Skills';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session} />
      <Banner />
      <Skills />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default HomePage;
