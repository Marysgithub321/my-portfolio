import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNetlify, SiElectron, SiVisualstudiocode, SiFigma, SiAdobephotoshop } from 'react-icons/si';
import vercel_logo from '../images/vercel_logo.png';

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8"
    >
      <h1 data-aos="flip-right" className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 mt-8">
        Technologies I Work With
      </h1>

      <div className="bg-light-gray text-dark-blue p-6 rounded-lg shadow-lg w-4/5 mb-8">
        <p data-aos="fade-right" className="text-lg mb-4 text-center font-semibold">
          I have worked extensively with a variety of technologies:
        </p>
        <ul className="space-y-2 text-sm leading-snug">
          <li>
            <span className="font-bold">HTML & CSS:</span> Structured and styled numerous web applications.
          </li>
          <li>
            <span className="font-bold">JavaScript (ES6+):</span> Implemented interactive features in web applications.
          </li>
          <li>
            <span className="font-bold">React:</span> Built component-based user interfaces.
          </li>
          <li>
            <span className="font-bold">Tailwind CSS:</span> Utility-first CSS for fast and efficient styling.
          </li>
          <li>
            <span className="font-bold">GitHub:</span> Managed version control using Git.
          </li>
          <li>
            <span className="font-bold">Electron:</span> Developed cross-platform desktop applications.
          </li>
        </ul>
      </div>

      {/* Icons with animations */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 text-5xl justify-center">
        <FaHtml5 className="text-orange-500 icon-animation icon-animation-1" />
        <FaCss3Alt className="text-blue-500 icon-animation icon-animation-2" />
        <FaJsSquare className="text-yellow-500 icon-animation icon-animation-3" />
        <FaReact className="text-blue-400 icon-animation icon-animation-4" />
        <SiTailwindcss className="text-blue-300 icon-animation icon-animation-5" />
        <FaGithub className="text-white icon-animation icon-animation-6" />
        <SiNetlify className="text-teal-400 icon-animation icon-animation-7" />
        <SiElectron className="text-gray-400 icon-animation icon-animation-8" />
        <SiVisualstudiocode className="text-blue-400 icon-animation icon-animation-9" />
        <SiFigma className="text-pink-500 icon-animation icon-animation-10" />
        <SiAdobephotoshop className="text-blue-600 icon-animation icon-animation-11" />
        <img
          src={vercel_logo}
          alt="Vercel Logo"
          width="50"  // Explicitly define width
          height="50" // Explicitly define height
          className="icon-animation icon-animation-12"
        />
      </div>
    </section>
  );
};

export default Technologies;
