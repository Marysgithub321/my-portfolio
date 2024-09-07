import React, { useRef, useEffect } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer'; // Import the Footer component
import PageHeader from '../components/PageHeader'; // Import the PageHeader component
import gsap from 'gsap'; // Import GSAP for the hover animation

function ContactMe() {
  useEffect(() => {
    // GSAP animation if any extra animation is required for the page
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-dark-blue text-light-gray p-8">
      {/* Import the PageHeader */}
      <PageHeader />

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

