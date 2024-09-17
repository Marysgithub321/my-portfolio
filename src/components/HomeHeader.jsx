import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import MyLogo from '../images/MyLogo200x200.webp'; // Import your logo

const HomeHeader = () => {
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for the line under the logo
    gsap.fromTo(
      lineRef.current,
      { width: '0%' },
      { width: '100%', duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Logo hover animation
    if (logoRef.current) {
      logoRef.current.addEventListener('mouseenter', () => {
        gsap.to(logoRef.current, { y: -10, duration: 0.5, ease: 'bounce.out' });
      });
      logoRef.current.addEventListener('mouseleave', () => {
        gsap.to(logoRef.current, { y: 0, duration: 0.5, ease: 'bounce.out' });
      });
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[120px] bg-dark-blue z-50 flex justify-between items-center px-6 lg:px-12">
      {/* Logo */}
      <a href="#home" className="flex items-center" style={{ marginTop: '45px' }}>
        <img
          ref={logoRef} // GSAP hover effect
          src={MyLogo}
          alt="Logo"
          width="400" // Explicitly setting width
          height="200" // Explicitly setting height
          className="cursor-pointer"
        />
      </a>

      {/* Line under the logo */}
      <hr
        ref={lineRef}
        className="absolute top-[100px] left-0 border-0 border-t-2 border-[#545454]"
        style={{ width: '100%' }}
      />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-4">
        <a href="#about" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">About Me</a>
        <a href="#projects" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">Projects</a>
        <a href="#technologies" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">Technologies</a>
        <a href="#contact" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">Contact Me</a>
      </nav>

      {/* Hamburger Menu */}
      <div data-aos="flip-left" className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="absolute top-[120px] right-0 bg-dark-blue p-4 rounded-lg flex flex-col space-y-4 lg:hidden">
          <a href="#about" className="text-light-gray hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>About Me</a>
          <a href="#projects" className="text-light-gray hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#technologies" className="text-light-gray hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Technologies</a>
          <a href="#contact" className="text-light-gray hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</a>
        </nav>
      )}
    </header>
  );
};

export default HomeHeader;
