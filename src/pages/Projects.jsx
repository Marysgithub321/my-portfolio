import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap'; // Import GSAP for the bounce animation
import Footer from '../components/Footer'; // Import the Footer component
import PageHeader from '../components/PageHeader'; // Import the PageHeader component

function Projects() {
  return (
    <div className="relative flex flex-col items-center justify-start w-screen min-h-screen bg-dark-blue text-light-gray p-8 overflow-auto">
      {/* Import the PageHeader */}
      <PageHeader />

      {/* Projects Title - Moved further down */}
      <h1 className="text-4xl font-bold mt-24">Projects</h1> {/* Increased margin to push it lower */}

      {/* Projects cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-w-6xl w-full p-4">
        {/* Project 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-light-gray mb-4">Project 1 Title</h2>
          <div className="w-full h-40 bg-gray-600 rounded mb-4"></div>
          <Link to="/project-1" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            View Project
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-light-gray mb-4">Project 2 Title</h2>
          <div className="w-full h-40 bg-gray-600 rounded mb-4"></div>
          <Link to="/project-2" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            View Project
          </Link>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-light-gray mb-4">Project 3 Title</h2>
          <div className="w-full h-40 bg-gray-600 rounded mb-4"></div>
          <Link to="/project-3" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            View Project
          </Link>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-light-gray mb-4">Project 4 Title</h2>
          <div className="w-full h-40 bg-gray-600 rounded mb-4"></div>
          <Link to="/project-4" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            View Project
          </Link>
        </div>

        {/* Project 5 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-light-gray mb-4">Project 5 Title</h2>
          <div className="w-full h-40 bg-gray-600 rounded mb-4"></div>
          <Link to="/project-5" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            View Project
          </Link>
        </div>

        {/* Project 6 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-bold text-light-gray mb-4">Project 6 Title</h2>
          <div className="w-full h-40 bg-gray-600 rounded mb-4"></div>
          <Link to="/project-6" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
            View Project
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Projects;
