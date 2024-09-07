import React, { useRef, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNetlify, SiElectron, SiVisualstudiocode, SiCanva, SiFigma, SiAdobephotoshop } from 'react-icons/si';
import Footer from '../components/Footer'; // Import the Footer component
import PageHeader from '../components/PageHeader'; // Import the PageHeader component
import gsap from 'gsap'; // GSAP for animation

function Technologies() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-dark-blue text-light-gray p-8">
      {/* Import the PageHeader */}
      <PageHeader />

      <h1 className="text-3xl font-bold mb-6 mt-12 text-center">Technologies I Work With</h1>

      {/* Card Section with adjusted width */}
      <div className="bg-light-gray text-dark-blue p-6 rounded-lg shadow-lg w-4/5 text-left mb-8">
        <p className="text-lg mb-4 text-center font-semibold">
          I have worked extensively with a variety of technologies to create functional, responsive, and user-friendly applications:
        </p>
        <ul className="space-y-2 text-sm leading-snug">
          <li><span className="font-bold">HTML & CSS:</span> <span className="font-normal">Structured and styled numerous web applications, ensuring responsiveness and accessibility.</span></li>
          <li><span className="font-bold">JavaScript (ES6+):</span> <span className="font-normal">Implemented complex logic and interactive features in web applications.</span></li>
          <li><span className="font-bold">React:</span> <span className="font-normal">Built dynamic, component-based user interfaces with state management and routing.</span></li>
          <li><span className="font-bold">Tailwind CSS:</span> <span className="font-normal">Utilized utility-first CSS for fast and efficient styling.</span></li>
          <li><span className="font-bold">GitHub:</span> <span className="font-normal">Managed version control and collaborated with teams using Git and GitHub.</span></li>
          <li><span className="font-bold">Vercel & Netlify:</span> <span className="font-normal">Deployed websites and applications, using serverless functions and optimized builds for fast performance.</span></li>
          <li><span className="font-bold">Electron:</span> <span className="font-normal">Developed desktop applications using web technologies, bringing cross-platform compatibility to web apps.</span></li>
          <li><span className="font-bold">VS Code:</span> <span className="font-normal">My preferred development environment, customized with extensions to enhance productivity.</span></li>
          <li><span className="font-bold">Canva & Photoshop:</span> <span className="font-normal">Designed marketing materials, logos, and visual assets to enhance brand identity.</span></li>
          <li><span className="font-bold">Figma:</span> <span className="font-normal">Used for creating wireframes, prototypes, and UI designs to streamline the design-to-development workflow.</span></li>
        </ul>
      </div>

      {/* My Toolbelt Section */}
      <div className="mt-4 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">My Toolbelt</h2>
        <div className="flex justify-center space-x-6 text-5xl">
          {/* Icons for each technology */}
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaJsSquare className="text-yellow-500" />
          <FaReact className="text-blue-400" />
          <SiTailwindcss className="text-blue-300" />
          <FaGithub className="text-white" />
          <SiNetlify className="text-teal-400" />
          <SiElectron className="text-gray-400" />
          <SiVisualstudiocode className="text-blue-400" />
          <SiCanva className="text-teal-500" />
          <SiFigma className="text-pink-500" />
          <SiAdobephotoshop className="text-blue-600" />
          {/* Custom Vercel Logo */}
          <img src="../images/vercel_logo.png" alt="Vercel Logo" style={{ width: '50px', height: '50px' }} />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Technologies;
