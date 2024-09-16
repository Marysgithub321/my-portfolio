import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Import the hook

const ContactMe = () => {
  const [contactRef, contactVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={contactRef}
      className={`relative flex flex-col items-center justify-center w-screen min-h-screen bg-dark-blue text-light-gray px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24 transition duration-700 ease-in-out transform ${
        contactVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      }`}
    >
      <h1 data-aos="fade-down" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
        Contact Me
      </h1>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xkgwepbq"
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
            className="bg-customBlue text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Info Links */}
      <div className="mt-8 flex space-x-6">
        <a data-aos="flip-up"
          href="https://www.linkedin.com/in/maria-peters-5699b6327"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-gray hover:text-customBlue transition"
        >
          <FaLinkedin size={40} />
        </a>
        <a data-aos="flip-up"
          href="mailto:mp-developer@outlook.com"
          className="text-light-gray hover:text-customBlue transition"
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
