import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HomeHeader from '../components/HomeHeader'; // Import HomeHeader
import Footer from '../components/Footer'; // Import Footer
import CenterImage from "../images/MariaPeters.png"; // Import your center image

function Home() {
  const imageRef = useRef(null);
  const borderRef = useRef(null);

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
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-center w-screen bg-dark-blue text-light-gray p-8 overflow-hidden"
      style={{ height: "100vh" }} // Full viewport height
    >
      {/* Import the HomeHeader */}
      <HomeHeader />

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
      <Footer />
    </div>
  );
}

export default Home;
