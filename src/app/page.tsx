import Navbar from '@/components/shared/Navbar';
import About from '@/pages/Home/About/About';
import Banner from '@/pages/Home/Banner/Banner';
import Project from '@/pages/Home/Project/Project';
import Skills from '@/pages/Home/Skills/Skills';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <About />
      <Project />
    </div>
  );
};

export default HomePage;
