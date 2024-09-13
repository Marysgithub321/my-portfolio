import React from "react";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import Hero from "../images/Hero.png";
import VercelLogo from "../images/vercel_logo.png";
import MyLogo from "../images/MyLogo.png";
import shopLogo from "../images/shopLogo.png";
import Truss from "../images/Truss.png";
import MyOrders from "../images/MyOrders.png";

import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiElectron,
  SiVisualstudiocode,
  SiCanva,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      {/* HomeHeader */}
      <HomeHeader />

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-32">
  <div className="flex justify-center items-center w-full p-8">
    <img
      src={Hero}
      alt="About Me"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>

  {/* Social icons */}
  <div className="flex items-center justify-center space-x-6 p-8">
    <a
      href="https://www.linkedin.com/in/maria-peters-5699b6327"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-700"
    >
      <FaLinkedin size={24} />
    </a>
    <a
      href="https://github.com/Marysgithub321"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-700"
    >
      <FaGithub size={24} />
    </a>
    <a
      href="mailto:mp-developer@outlook.com"
      className="hover:text-gray-700"
    >
      <FaEnvelope size={24} />
    </a>
  </div>
</section>


      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8">
          My Latest Projects
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={MyOrders}
              alt="Tamale Order Tracker"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-light-gray">
              Tamale Order Tracker
            </h2>
            <p className="text-light-gray mb-4">
              The Tamale Order Tracker app helps manage food orders easily, with
              the ability to print PDF lists for pickup.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://tamale-app-desktop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
              >
                View Project
              </a>
              <a
                href="https://github.com/Marysgithub321/tamale-app-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition flex items-center space-x-2"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
            </div>
          </div>

          {/* Repeat similar for other projects */}
          {/* Project 2: Building Shops Estimator */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={shopLogo}
              alt="Building Shops Estimator"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-light-gray">
              Building Shops Estimator
            </h2>
            <p className="text-light-gray mb-4">
              Helps contractors quickly calculate project costs and generate
              material lists.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://1drv.ms/u/s!AvelyWS0bAEulbhVs5bX2ckMdnMtTQ?e=yGilPg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
              >
                Download Estimator
              </a>
              <a
                href="https://github.com/Marysgithub321/Shop-Estimator.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition flex items-center space-x-2"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
            </div>
          </div>

          {/* Project 3: Portfolio Website */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={MyLogo}
              alt="Portfolio Website"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-light-gray">
              Portfolio Website
            </h2>
            <p className="text-light-gray mb-4">
              Built with React and Tailwind CSS, showcasing projects and
              technical skills.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://your-portfolio-site.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
              >
                View Project
              </a>
              <a
                href="https://github.com/Marysgithub321/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition flex items-center space-x-2"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
            </div>
          </div>

          {/* Project 4: Truss Estimator Application */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={Truss}
              alt="Truss Estimator Application"
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-light-gray">
              Truss Estimator Application
            </h2>
            <p className="text-light-gray mb-4">
              Calculates project costs and generates detailed PDF estimates.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://1drv.ms/u/s!AvelyWS0bAEulpIRMSGwQNVZ1ZD4kw?e=Y5WJMC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
              >
                Download Estimator
              </a>
              <a
                href="https://github.com/Marysgithub321/Hidden-Truss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition flex items-center space-x-2"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 mt-8">
          Technologies I Work With
        </h1>

        <div className="bg-light-gray text-dark-blue p-6 rounded-lg shadow-lg w-4/5 mb-8">
          <p className="text-lg mb-4 text-center font-semibold">
            I have worked extensively with a variety of technologies:
          </p>
          <ul className="space-y-2 text-sm leading-snug">
            <li>
              <span className="font-bold">HTML & CSS:</span> Structured and
              styled numerous web applications.
            </li>
            <li>
              <span className="font-bold">JavaScript (ES6+):</span> Implemented
              interactive features in web applications.
            </li>
            <li>
              <span className="font-bold">React:</span> Built component-based
              user interfaces.
            </li>
            <li>
              <span className="font-bold">Tailwind CSS:</span> Utility-first CSS
              for fast and efficient styling.
            </li>
            <li>
              <span className="font-bold">GitHub:</span> Managed version control
              using Git.
            </li>
            <li>
              <span className="font-bold">Electron:</span> Developed
              cross-platform desktop applications.
            </li>
          </ul>
        </div>

        {/* Toolbelt Section */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-center mb-4">My Toolbelt</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 text-5xl justify-center">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJsSquare className="text-yellow-500" />
            <FaReact className="text-blue-400" />
            <SiTailwindcss className="text-blue-300" />
            <FaGithub className="text-white" />
            <SiNetlify className="text-teal-400" />
            <SiElectron className="text-gray-400" />
            <SiVisualstudiocode className="text-blue-400" />
            <SiFigma className="text-pink-500" />
            <SiAdobephotoshop className="text-blue-600" />
            <img
              src={VercelLogo}
              alt="Vercel Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section
  id="contact"
  className="relative flex flex-col items-center justify-center w-screen min-h-screen bg-dark-blue text-light-gray px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24"
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
    Contact Me
  </h1>

  {/* Contact Form */}
  <form
    action="https://formspree.io/f/xkgwepbq"
    method="POST"
    className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <div className="mb-4">
      <label
        className="block text-light-gray text-sm font-bold mb-2"
        htmlFor="name"
      >
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
      <label
        className="block text-light-gray text-sm font-bold mb-2"
        htmlFor="email"
      >
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
      <label
        className="block text-light-gray text-sm font-bold mb-2"
        htmlFor="message"
      >
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
    <a
      href="https://www.linkedin.com/in/maria-peters-5699b6327"
      target="_blank"
      rel="noopener noreferrer"
      className="text-light-gray hover:text-customBlue transition"
    >
      <FaLinkedin size={40} />
    </a>
    <a
      href="mailto:mp-developer@outlook.com"
      className="text-light-gray hover:text-customBlue transition"
    >
      <FaEnvelope size={40} />
    </a>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;