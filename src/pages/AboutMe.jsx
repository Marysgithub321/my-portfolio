import React, { Suspense } from 'react';
import Hero from '../images/Hero.webp';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Lazy-load Framer Motion
const MotionSection = React.lazy(() =>
  import('framer-motion').then((mod) => ({ default: mod.motion.section }))
);

const AboutMe = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MotionSection
        id="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        // Use responsive margin-top to control spacing below the header
        className="flex flex-col items-center justify-center px-4 sm:px-32 mt-[80px] sm:mt-[80px] pt-8"
      >
        <div className="flex justify-center items-center w-full p-8">
          {/* Adjust image height and width while keeping the aspect ratio */}
          <img
            data-aos="zoom-in"
            src={Hero}
            alt="About Me"
            className="w-full max-h-[700px] object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        <div className="flex items-center justify-center space-x-6 p-0 mb-[100px]">
          <a
            href="https://www.linkedin.com/in/maria-peters-5699b6327"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
            aria-label="Visit Maria Peters' LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Marysgithub321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
            aria-label="Visit Maria Peters' GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:mp-developer@outlook.com"
            className="hover:text-gray-700"
            aria-label="Send an email to Maria Peters"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </MotionSection>
    </Suspense>
  );
};

export default AboutMe;
