import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import MyLogo from '../images/MyLogo200x200.png'; // Import your logo
import Footer from '../components/Footer'; // Import the Footer component
import gsap from 'gsap'; // Import GSAP for the hover animation

function ContactMe() {
  const logoRef = useRef(null);
  const lineRef = useRef(null); // Reference for the horizontal line

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
        className="absolute top-0 left-0 cursor-pointer"
        style={{ width: '400px', height: '200px' }}
      />

      {/* Horizontal line right under the logo */}
      <hr
        ref={lineRef} // Ref for the line animation
        className="absolute top-[110px] left-0 border-0 border-t-2 border-[#545454]"
        style={{ width: '100%' }} // Line width
      />

      {/* Home Button in the top-right corner */}
      <Link
        to="/"
        className="absolute top-8 right-12 bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
      >
        Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xkgwepbq" // Your Formspree form URL
        method="POST"
        className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-light-gray text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 text-gray-800 rounded-lg focus:outline-none"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-light-gray text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 text-gray-800 rounded-lg focus:outline-none"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-light-gray text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 text-gray-800 rounded-lg focus:outline-none"
            id="message"
            name="message"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-customBlue text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Info Links */}
      <div className="mt-8 flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maria-peters-5699b6327"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-gray hover:text-customBlue transition"
        >
          <FaLinkedin size={40} />
        </a>

        {/* Email */}
        <a
          href="mailto:mp-developer@outlook.com"
          className="text-light-gray hover:text-customBlue transition"
        >
          <FaEnvelope size={40} />
        </a>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ContactMe;
