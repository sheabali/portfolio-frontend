'use client';

import {
  BannerImage,
  Discord,
  Facebook,
  Github,
  Twitter,
} from '@/components/constant/global';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between gap-4 py-3 mb-10">
        {/* Left Side Text */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-semibold">
            Hello I’m Sheikh Pranto. <br /> Frontend Developer <br /> Based In
            Bangladesh.
          </h1>
          <p className="mt-7 text-base">
            I’m Evren Shah. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 items-center mt-28">
            {[Facebook, Discord, Twitter, Github].map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image src={icon} width={43} height={20} alt="Social Icon" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full lg:w-[50%] flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={BannerImage} width={800} height={400} alt="Banner" />
        </motion.div>
      </div>
    </Container>
  );
};

export default Banner;
