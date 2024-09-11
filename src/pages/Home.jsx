import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import HomeHeader from "../components/HomeHeader"; // Import HomeHeader
import Footer from "../components/Footer"; // Import Footer
import HeadShot from "../images/HeadShot.png"; // Import your headshot for About Me
import VercelLogo from '../images/vercel_logo.png'; // Import Vercel logo
import MyOrders from '../images/MyOrders.png'; // Make sure the image path is correct
import shopLogo from '../images/shopLogo.png'; // Import shopLogo

import { FaLinkedin, FaEnvelope, FaGithub, FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiNetlify, SiElectron, SiVisualstudiocode, SiCanva, SiFigma, SiAdobephotoshop } from 'react-icons/si';

const Home = () => {
  const outerBorderRef = useRef(null);
  const additionalBorderRef = useRef(null);

  useEffect(() => {
    // GSAP animation for About Me section
    gsap.fromTo(
      outerBorderRef.current,
      { borderWidth: "0px" },
      { borderWidth: "4px", duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      additionalBorderRef.current,
      { borderWidth: "0px" },
      { borderWidth: "4px", duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      {/* HomeHeader */}
      <HomeHeader />

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8" style={{ marginTop: '40px' }}>
        {/* Additional outer double border */}
        <div
          ref={additionalBorderRef}
          className="p-8 border-double border-[#747bff] mt-12"
          style={{
            borderWidth: "0px",
            borderRadius: "0",
            transition: "border-width 1s ease",
          }}
        >
         {/* Hero Section Card with Double Border and No Radius */}
          <div
            ref={outerBorderRef}
            className="p-8 rounded-lg shadow-lg max-w-4xl flex items-center space-x-8 border-[#747bff] border-double"
            style={{
              borderWidth: "0px",
              borderRadius: "0",
              transition: "border-width 1s ease",
            }}
          >
            {/* Oval Headshot Image with Dark Gray Border */}
            <img
              src={HeadShot}
              alt="Maria Peters"
              className="w-48 h-48 object-cover rounded-full border-4 border-[#545454] shadow-lg"
            />

            {/* About Me Text */}
            <div>
              <h1 className="text-3xl font-bold mb-4">Hi, I'm Maria Peters</h1>
              <p className="text-md mb-4">
                I’m a front-end developer with a passion for crafting visually engaging, dynamic web applications. My expertise lies in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React. 
              </p>
              <p className="text-md mb-4">
                After transitioning into the tech industry with an associate's degree in computer science, I've combined my experience in both technology and construction management to build tools that simplify processes and enhance user experiences. 
              </p>
              <p className="text-md mb-4">
                I've developed several custom desktop applications, including:
              </p>
              <ul className="list-disc list-inside text-md mb-4">
                <li><strong>Shop Builder Application:</strong> A tool that generates shop construction estimates and material breakdowns.</li>
                <li><strong>Truss Quote Application:</strong> Automates quoting for truss construction with detailed PDF estimates.</li>
                <li><strong>Job Progress Tracker:</strong> A tool that tracks job progress and generates estimates and invoices for a painting company.</li>
                <li><strong>Tamale Order Tracking App:</strong> Helps manage customer orders and print PDF lists for food pickup.</li>
              </ul>
              <p className="text-md mb-4">
                Whether working on client projects or personal initiatives, I am committed to delivering clean, efficient code that enhances the user experience while streamlining workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Projects Section */}
    <section id="projects" className="min-h-screen flex flex-col items-center justify-start p-8">
      <h1 className="text-4xl font-bold mt-24">My Latest Projects</h1>

      {/* Project 1: Tamale Order Tracker */}
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full mt-8">
        <img
          src={MyOrders}
          alt="Tamale Order Tracker"
          className="float-left w-64 h-64 object-cover rounded-lg mr-6 mb-6"
          style={{ width: '250px', height: '250px' }}
        />
        <div>
          <h2 className="text-2xl font-bold text-light-gray mb-4">Tamale Order Tracker</h2>
          <p className="text-light-gray mb-4">
            The Tamale Order Tracker app is designed for one purpose: to manage food orders with ease. It allows tracking of customer details and orders, with the ability to print organized PDF lists for pickup preparation.
          </p>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://tamale-app.vercel.app/"
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

      {/* Project 2: Building Shops Estimator */}
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full mt-8">
        <img
          src={shopLogo}
          alt="Building Shops Estimator"
          className="float-left w-64 h-64 object-cover rounded-lg mr-6 mb-6"
          style={{ width: '250px', height: '250px' }}
        />
        <div>
          <h2 className="text-2xl font-bold text-light-gray mb-4">Building Shops Estimator</h2>
          <p className="text-light-gray mb-4">
            The Building Shops Estimator and Material List application helps contractors and builders quickly calculate project costs.
          </p>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://your-project-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
          >
            View Demo Video
          </a>
          <a
            href="https://github.com/Marysgithub321/hidden-quote.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition flex items-center space-x-2"
          >
            <FaGithub />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </section>

    {/* Technologies Section */}
    <section id="technologies" className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Technologies Content */}
    </section>

    {/* Contact Me Section */}
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Contact Form */}
    </section>

    {/* Footer */}
    <Footer />
  </div>
  );
};

export default Home;
