import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MyLogo from '../images/MyLogo200x200.png'; // Your logo

const HomeHeader = () => {
  const logoRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate the line when component mounts
    gsap.fromTo(
      lineRef.current,
      { width: '0%' },
      { width: '100%', duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Add hover animation for the logo
    if (logoRef.current) {
      logoRef.current.addEventListener('mouseenter', () => {
        gsap.to(logoRef.current, { y: -10, duration: 0.5, ease: 'bounce.out' });
      });
      logoRef.current.addEventListener('mouseleave', () => {
        gsap.to(logoRef.current, { y: 0, duration: 0.5, ease: 'bounce.out' });
      });
    }
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full flex flex-col items-center">
      <Link to="/" className="absolute top-0 left-0">
        <img
          ref={logoRef} // Reference for the logo animation
          src={MyLogo}
          alt="Logo"
          className="cursor-pointer"
          style={{ width: '400px', height: '200px' }}
        />
      </Link>

      {/* Line animation */}
      <hr
        ref={lineRef} // Reference for the line animation
        className="absolute top-[110px] left-0 border-0 border-t-2 border-[#545454]"
        style={{ width: '100%' }}
      />

      {/* Navigation */}
      <nav className="absolute top-12 right-12 flex space-x-4">
        <Link to="/about" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
          About Me
        </Link>
        <Link to="/projects" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
          Projects
        </Link>
        <Link to="/technologies" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
          Technologies
        </Link>
        <Link to="/contact" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default HomeHeader;
