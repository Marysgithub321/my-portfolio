import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap'; // Import GSAP for the bounce animation
import MyLogo from '../images/MyLogo200x200.png'; // Import your logo
import Footer from '../components/Footer'; // Import the Footer component

function Projects() {
  const logoRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // GSAP hover animation for logo bounce effect
    if (logoRef.current) {
      logoRef.current.addEventListener('mouseenter', () => {
        gsap.to(logoRef.current, { y: -10, duration: 0.5, ease: 'bounce.out' });
      });
      logoRef.current.addEventListener('mouseleave', () => {
        gsap.to(logoRef.current, { y: 0, duration: 0.5, ease: 'bounce.out' });
      });
    }

    // GSAP animation for the line under the logo
    gsap.fromTo(
      lineRef.current,
      { width: '0%' },
      { width: '100%', duration: 1, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-dark-blue text-light-gray p-8">
      {/* Logo in the top-left corner with hover bounce */}
      <img
        ref={logoRef} // Reference for bounce effect
        src={MyLogo}
        alt="Logo"
        className="absolute top-0 left-0 -mt-4 -ml-4 cursor-pointer"
        style={{ width: '400px', height: '200px' }}
      />

      {/* Horizontal line right under the logo */}
      <hr
        ref={lineRef} // Ref for the line animation
        className="absolute top-[90px] left-0 border-0 border-t-2 border-[#545454]"
        style={{ width: '100%' }} // Line width
      />

      {/* Home Button in the top-right corner */}
      <Link to="/" className="absolute top-8 right-12 bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
        Home
      </Link>

      {/* Projects Title moved up by another 20px */}
      <h1 className="text-4xl font-bold mt-12">Projects</h1> {/* Further reduced margin */}

      {/* Projects cards moved up by another 20px */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2 max-w-6xl">
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
