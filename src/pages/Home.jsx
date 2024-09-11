import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import HomeHeader from "../components/HomeHeader"; // Import HomeHeader
import Footer from "../components/Footer"; // Import Footer
import HeadShot from "../images/HeadShot.png"; // Import your headshot for About Me
import VercelLogo from '../images/vercel_logo.png'; // Import Vercel logo
import MyOrders from '../images/MyOrders.png'; // Make sure the image path is correct
import shopLogo from '../images/shopLogo.png'; // Import shopLogo
import MyCard from '../images/MyCard.png'; // Import your portfolio card image
import Truss from '../images/Truss.png'; // Make sure the image path is correct

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
        <div
          ref={additionalBorderRef}
          className="p-8 border-double border-[#747bff] mt-12"
          style={{
            borderWidth: "0px",
            borderRadius: "0",
            transition: "border-width 1s ease",
          }}
        >
          <div
            ref={outerBorderRef}
            className="p-8 rounded-lg shadow-lg max-w-4xl flex items-center space-x-8 border-[#747bff] border-double"
            style={{
              borderWidth: "0px",
              borderRadius: "0",
              transition: "border-width 1s ease",
            }}
          >
            {/* Oval Headshot Image */}
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
                I have developed several custom desktop applications, including tools for construction estimates, job progress tracking, and food order management.
              </p>
              <p className="text-md mb-4">
                My goal is to create streamlined, efficient, and visually appealing user experiences.
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
      The Building Shops Estimator helps contractors quickly calculate project costs and generate material lists.
    </p>
  </div>

  {/* Centered Buttons for Download and GitHub */}
  <div className="flex justify-center mt-6 space-x-4">
    <a
      href="https://1drv.ms/u/s!AvelyWS0bAEulbhVs5bX2ckMdnMtTQ?e=yGilPg"  // OneDrive link for Shop Building Estimator download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
    >
      Download Shop Building Estimator
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


        {/* Project 3: Portfolio Website */}
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full mt-8">
          <img
            src={MyCard}
            alt="Portfolio Website"
            className="float-left w-64 h-64 object-cover rounded-lg mr-6 mb-6"
            style={{ width: '250px', height: '250px' }}
          />
          <div>
            <h2 className="text-2xl font-bold text-light-gray mb-4">Portfolio Website</h2>
            <p className="text-light-gray mb-4">
              This portfolio website, built with React and Tailwind CSS, showcases my latest projects and technical skills.
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
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
<div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full mt-8">
  <img
    src={Truss} // Ensure the image path for Truss.png is correct
    alt="Truss Estimator Application"
    className="float-left w-64 h-64 object-cover rounded-lg mr-6 mb-6"
    style={{ width: '250px', height: '250px' }}
  />
  <div>
    <h2 className="text-2xl font-bold text-light-gray mb-4">Truss Estimator Application</h2>
    <p className="text-light-gray mb-4">
      The Truss Estimator application calculates project costs and generates detailed PDF estimates, 
      including a price breakdown and material list. This tool simplifies pricing and helps contractors 
      create accurate, professional estimates for truss construction.
    </p>
  </div>
  
  {/* Centered Buttons for Project and GitHub */}
  <div className="flex justify-center mt-6 space-x-4">
    <a
      href="https://1drv.ms/u/s!AvelyWS0bAEulpIRMSGwQNVZ1ZD4kw?e=Y5WJMC"  // OneDrive link for app download
      target="_blank"
      rel="noopener noreferrer"
      className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
    >
      Download Truss Quote App
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



      </section>

      {/* Technologies Section */}
      <section id="technologies" className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-6 mt-12 text-center">Technologies I Work With</h1>
        <div className="bg-light-gray text-dark-blue p-6 rounded-lg shadow-lg w-4/5 text-left mb-8">
          <p className="text-lg mb-4 text-center font-semibold">
            I have worked extensively with a variety of technologies to create functional, responsive, and user-friendly applications:
          </p>
          <ul className="space-y-2 text-sm leading-snug">
            <li><span className="font-bold">HTML & CSS:</span> Structured and styled numerous web applications, ensuring responsiveness and accessibility.</li>
            <li><span className="font-bold">JavaScript (ES6+):</span> Implemented complex logic and interactive features in web applications.</li>
            <li><span className="font-bold">React:</span> Built dynamic, component-based user interfaces with state management and routing.</li>
            <li><span className="font-bold">Tailwind CSS:</span> Utilized utility-first CSS for fast and efficient styling.</li>
            <li><span className="font-bold">GitHub:</span> Managed version control and collaborated with teams using Git and GitHub.</li>
            <li><span className="font-bold">Electron:</span> Developed desktop applications using web technologies, bringing cross-platform compatibility to web apps.</li>
          </ul>
        </div>

        {/* My Toolbelt Section */}
        <div className="mt-4 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">My Toolbelt</h2>
          <div className="flex justify-center space-x-6 text-5xl">
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <FaJsSquare className="text-yellow-500" />
            <FaReact className="text-blue-400" />
            <SiTailwindcss className="text-blue-300" />
            <FaGithub className="text-white" />
            <SiNetlify className="text-teal-400" />
            <SiElectron className="text-gray-400" />
            <SiVisualstudiocode className="text-blue-400" />
            <SiCanva className="text-teal-500" />
            <SiFigma className="text-pink-500" />
            <SiAdobephotoshop className="text-blue-600" />
            <img src={VercelLogo} alt="Vercel Logo" style={{ width: '50px', height: '50px' }} />
          </div>
        </div>
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
