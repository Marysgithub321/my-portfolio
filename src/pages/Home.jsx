import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import MPLogo from "../images/MyLogo200x200.png"; // Import the logo
import CenterImage from "../images/MariaPeters.png"; 
import Footer from '../components/Footer'; // Import Footer

function Home() {
  const imageRef = useRef(null);
  const borderRef = useRef(null);
  const lineRef = useRef(null); // Ref for the line under the logo

  useEffect(() => {
    // GSAP slide-in animation for the image
    gsap.fromTo(
      imageRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        onComplete: animateBorder,
      }
    );

    // Function to animate the border drawing
    function animateBorder() {
      gsap.fromTo(
        borderRef.current,
        { borderWidth: "0px" },
        { borderWidth: "4px", duration: 1, ease: "power2.out" }
      );
    }

    // Slide in animation for the line under the logo
    gsap.fromTo(
      lineRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.out", delay: 0.5 }
    );

  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-center w-screen bg-dark-blue text-light-gray p-8 overflow-hidden"
      style={{ height: "100vh" }} // Full viewport height
    >
      {/* Logo in the upper left corner with bounce effect */}
      <img
        src={MPLogo}
        alt="MP Logo"
        className="absolute top-0 left-0"
        style={{ width: "400px", height: "200px" }} // Set custom width and height
      />

      {/* Horizontal line right under the logo */}
      <hr
        ref={lineRef} // Ref for the line animation
        className="absolute top-[110px] left-0 border-0 border-t-2 border-[#545454]"
        style={{ width: "100%" }} // Set to 100% width, but still animate
      />

      {/* Navigation Links in the upper right corner */}
      <nav className="absolute top-12 right-12 flex space-x-4">
        <Link
          to="/about"
          className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
        >
          Projects
        </Link>
        <Link
          to="/technologies"
          className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
        >
          Technologies
        </Link>
        <Link
          to="/contact"
          className="bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
        >
          Contact Me
        </Link>
      </nav>
      {/* Centered Image with GSAP Slide-In Animation and Animated Border */}
      <div className="relative flex justify-center items-center mt-8">
        {/* Outer border */}
        <div
          ref={borderRef} // Ref for border animation
          className="border-double border-[#747bff] p-4"
          style={{ borderWidth: "0px", transition: "border-width 1s ease" }} // Start with no border
        >
          {/* Inner border */}
          <div className="border-double border-4 border-[#747bff] p-2">
            <img
              ref={imageRef}
              src={CenterImage}
              alt="Maria Peters"
              className="max-w-full max-h-full"
              style={{ width: "100%", height: "auto" }} // Adjust size as needed
            />
          </div>
        </div>

        {/* Sparkle Effect Elements */}
        <div className="sparkle" style={{ top: "30%", left: "30%" }}></div>
        <div className="sparkle" style={{ top: "40%", left: "50%" }}></div>
        <div className="sparkle" style={{ top: "60%", left: "70%" }}></div>
        <div className="sparkle" style={{ top: "20%", left: "80%" }}></div>
        <div className="sparkle" style={{ top: "70%", left: "40%" }}></div>
      </div>
      {/* Footer Section */}
      <Footer /> {/* Footer component imported and used */}
    </div>
  );
}

export default Home;
