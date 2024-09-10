import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HomeHeader from "../components/HomeHeader"; // Import HomeHeader
import Footer from "../components/Footer"; // Import Footer
import HeadShot from "../images/HeadShot.png"; // Import your headshot for About Me
import VercelLogo from '../images/vercel_logo.png'; // Import Vercel logo
import MyOrders from '../images/MyOrders.png'; // Import the image


import { FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaGithub } from 'react-icons/fa';
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

      {/* About Me Section (40px below header) */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center p-8" style={{ marginTop: '40px' }}>
        {/* Additional outer double border */}
        <div
          ref={additionalBorderRef}
          className="p-8 border-double border-[#747bff] mt-12"
          style={{
            borderWidth: "0px",
            borderRadius: "0",
            transition: "border-width 1s ease",
          }} // Additional double border
        >
          {/* Hero Section Card with Double Border and No Radius */}
          <div
            ref={outerBorderRef}
            className="p-8 rounded-lg shadow-lg max-w-4xl flex items-center space-x-8 border-[#747bff] border-double"
            style={{
              borderWidth: "0px",
              borderRadius: "0",
              transition: "border-width 1s ease",
            }} // Outer border
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
                I’m a front-end developer and software engineer with a unique blend of expertise in both technology and construction management. 
                After running my own construction business, I transitioned into tech with an associate's degree in computer science, giving me 
                a deep understanding of industry-specific challenges.
              </p>
              <p className="text-md mb-4">
                I’ve developed several custom desktop applications, including:
              </p>
              <ul className="list-disc list-inside text-md mb-4">
                <li><strong>Shop Builder Application:</strong> A tool that calculates shop construction costs and generates PDF estimates and material breakdowns.</li>
                <li><strong>Truss Quote Application:</strong> A solution that automates quoting for truss construction, generating detailed PDF estimates.</li>
                <li><strong>Job Progress Tracker:</strong> A progress tracker for a painting company that scans receipts, tracks jobs, and converts estimates into invoices.</li>
                <li><strong>Tamale Order Tracking App:</strong> Helps a small business owner manage customer orders and generate PDF order lists.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen flex flex-col items-center justify-start p-8">
  <h1 className="text-4xl font-bold mt-24">My Latest Projects</h1> {/* Projects title */}

  {/* Stacked and bigger Projects cards */}
  <div className="grid grid-cols-1 gap-8 mt-8 max-w-4xl w-full p-4">
    {/* Project 1 */}
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-light-gray mb-4">Building Shops Estimator Tool</h2>
      <div className="w-full h-60 bg-gray-700 rounded mb-6"></div> {/* Darker background for the image placeholder */}
      <a href="#project-1" className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition">
        View Project
      </a>
    </div>

   
  {/* Project 2 */}
<div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full">
  {/* Image with float for text wrapping */}
  <img
    src={MyOrders}
    alt="Tamale Order Tracker"
    className="float-left w-64 h-64 object-cover rounded-lg mr-6 mb-6"
    style={{ width: '250px', height: '250px' }}
  />

  {/* Text wrapping beside and below the image */}
  <div>
    <h2 className="text-2xl font-bold text-light-gray mb-4">Tamale Order Tracker</h2>
    <p className="text-light-gray mb-4">
      The Tamale Order Tracker app is designed for one purpose: to manage food orders with ease.
      It allows tracking of customer details and orders, with the ability to print organized PDF
      lists for pickup preparation. This app simplifies order management, ensuring that no orders
      are missed and that every batch is ready on time.
    </p>
    <p className="text-light-gray mb-4">
      By recording pickup times, home cooks can better manage their time and ensure that customers
      get their orders exactly when expected, streamlining the process from order to pickup.
    </p>
  </div>

  {/* Centered View Project Button */}
  <div className="flex justify-center mt-6">
    <a
      href="https://tamale-app-desktop.vercel.app/"
      target="_blank" // Opens in a new tab
      rel="noopener noreferrer" // Security measure to prevent tab hijacking
      className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition"
    >
      View Project
    </a>
  </div>
  
  <div className="clear-left"></div> {/* Clears float for correct layout */}
</div>

   
   
    {/* Project 3 */}
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-light-gray mb-4">Truss Estimator Tool</h2>
      <div className="w-full h-60 bg-gray-700 rounded mb-6"></div>
      <a href="#project-3" className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition">
        View Project
      </a>
    </div>

    {/* Project 4 */}
    <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold text-light-gray mb-4">Job Prograss tracker</h2>
      <div className="w-full h-60 bg-gray-700 rounded mb-6"></div>
      <a href="#project-4" className="bg-light-gray text-dark-blue py-3 px-6 rounded-lg font-bold hover:bg-gray-300 transition">
        View Project
      </a>
    </div>
  </div>
</section>





      {/* Technologies Section */}
      <section id="technologies" className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-6 mt-12 text-center">Technologies I Work With</h1>

        {/* Card Section with adjusted width */}
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
            <li><span className="font-bold">Vercel & Netlify:</span> Deployed websites and applications, using serverless functions and optimized builds for fast performance.</li>
            <li><span className="font-bold">Electron:</span> Developed desktop applications using web technologies, bringing cross-platform compatibility to web apps.</li>
            <li><span className="font-bold">VS Code:</span> My preferred development environment, customized with extensions to enhance productivity.</li>
            <li><span className="font-bold">Canva & Photoshop:</span> Designed marketing materials, logos, and visual assets to enhance brand identity.</li>
            <li><span className="font-bold">Figma:</span> Used for creating wireframes, prototypes, and UI designs to streamline the design-to-development workflow.</li>
          </ul>
        </div>

        {/* My Toolbelt Section */}
        <div className="mt-4 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-center">My Toolbelt</h2>
          <div className="flex justify-center space-x-6 text-5xl">
            {/* Icons for each technology */}
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
            {/* Custom Vercel Logo */}
            <img src={VercelLogo} alt="Vercel Logo" style={{ width: '50px', height: '50px' }} />

            
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8">
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
      className="bg-light-gray text-dark-blue font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
