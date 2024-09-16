import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../images/Hero.png';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-32"
    >
      <div className="flex justify-center items-center w-full p-8">
        <img data-aos="zoom-in"
          src={Hero}
          alt="About Me"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center space-x-6 p-8">
        <a
          href="https://www.linkedin.com/in/maria-peters-5699b6327"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Marysgithub321"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:mp-developer@outlook.com" className="hover:text-gray-700">
          <FaEnvelope size={24} />
        </a>
      </div>
    </motion.section>
  );
};

export default AboutMe;
