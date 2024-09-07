import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap"; // GSAP for animation
import MyLogo from "../images/MyLogo200x200.png"; // Import your logo
import HeadShot from "../images/HeadShot.png"; // Import your headshot
import Footer from "../components/Footer"; // Import the Footer component

function AboutMe() {
  const imageRef = useRef(null);
  const outerBorderRef = useRef(null);
  const additionalBorderRef = useRef(null); // New additional border
  const logoRef = useRef(null);
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
        onComplete: animateBorders,
      }
    );

    // Function to animate the borders drawing
    function animateBorders() {
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
    }

    // GSAP animation for the line under the logo
    gsap.fromTo(
      lineRef.current,
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-dark-blue text-light-gray p-8 overflow-hidden">
      {/* Logo in the top-left corner with hover bounce */}
      <img
        ref={logoRef} // Reference for bounce effect
        src={MyLogo}
        alt="MP Logo"
        className="absolute top-0 left-0 cursor-pointer"
        style={{ width: "400px", height: "200px" }}
        onMouseEnter={() => gsap.to(logoRef.current, { y: -10, duration: 0.5, ease: "bounce.out" })}
        onMouseLeave={() => gsap.to(logoRef.current, { y: 0, duration: 0.5, ease: "bounce.out" })}
      />

      {/* Horizontal line right under the logo */}
      <hr
        ref={lineRef} // Ref for the line animation
        className="absolute top-[110px] left-0 border-0 border-t-2 border-[#545454]"
        style={{ width: "100%" }} // Line width
      />

      {/* Home Button in the top-right corner */}
      <Link
        to="/"
        className="absolute top-12 right-12 bg-light-gray text-dark-blue py-2 px-4 rounded-lg font-bold hover:bg-gray-300 transition"
      >
        Home
      </Link>

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
            ref={imageRef}
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

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default AboutMe;
