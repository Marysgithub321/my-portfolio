import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full flex flex-col justify-center items-center bg-light-gray text-dark-blue p-4">
      {/* Social icons in the bottom center */}
      <div className="flex space-x-4 mb-2">
        <a href="https://www.linkedin.com/in/maria-peters-5699b6327" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Marysgithub321" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          <FaGithub size={24} />
        </a>
        <a href="mailto:mp-developer@outlook.com" className="hover:text-gray-700">
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Copyright in dark gray */}
      <p className="text-[#545454]">© 2024 MP Software Engineering</p>
    </footer>
  );
}

export default Footer;
