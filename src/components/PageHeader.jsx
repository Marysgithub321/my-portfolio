import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MyLogo from '../images/MyLogo200x200.png'; // Your logo

const PageHeader = () => {
  const logoRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate the line under the logo
    gsap.fromTo(
      lineRef.current,
      { width: '0%' },
      { width: '100%', duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Animate logo bounce effect on hover
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
      {/* Logo in the top-left corner */}
      <Link to="/" className="absolute top-0 left-0">
        <img
          ref={logoRef}
          src={MyLogo}
          alt="Logo"
          className="cursor-pointer"
          style={{ width: '400px', height: '200px' }}
        />
      </Link>

      {/* Horizontal line under the logo */}
      <hr ref={lineRef} className="absolute top-[110px] left-0 border-0 border-t-2 border-[#545454]" style={{ width: '100%' }} />

      {/* Home Button */}
      <nav className="absolute top-12 right-12">
        <Link to="/" className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition">Home</Link>
      </nav>
    </header>
  );
};

export default PageHeader;
