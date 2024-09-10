import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import HomeHeader from "../components/HomeHeader"; // Import HomeHeader
import Footer from "../components/Footer"; // Import Footer
import CenterImage from "../images/MariaPeters.png"; // Import your center image

function Home() {
  const imageRef = useRef(null);
  const borderRef = useRef(null);
  const sparkleRefs = useRef([]);

  // GSAP Sparkle animation function
  const playSparkleAnimation = () => {
    sparkleRefs.current.forEach((sparkle, i) => {
      gsap.fromTo(
        sparkle,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1.2,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: 1,
          delay: i * 0.2,
        }
      );
    });
  };

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
        onComplete: () => {
          // Play sparkle animation once after image slides in
          playSparkleAnimation();
          animateBorder();
        },
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
    <div className="relative flex flex-col min-h-screen bg-dark-blue text-light-gray">
      {/* HomeHeader component */}
      <HomeHeader />

      {/* Scrollable content area positioned exactly below the header */}
      <div
        className="flex-grow w-full flex justify-center items-center p-8 sm:p-4 overflow-y-auto"
        style={{ paddingTop: '150px', paddingBottom: 'calc(10vh)' }} // Position content exactly 150px from the top
      >
        {/* Centered Image with GSAP Slide-In Animation */}
        <div
          className="relative flex justify-center items-center w-full max-w-4xl lg:max-w-6xl sm:max-w-full"
          onMouseEnter={playSparkleAnimation} // Play sparkle animation on hover
        >
          {/* Outer border */}
          <div
            ref={borderRef}
            className="border-double border-[#747bff] p-4 sm:p-2 w-full max-w-lg lg:max-w-3xl" // Increase size for larger screens
            style={{ marginTop: '0px' }} // Ensure it's positioned correctly
          >
            {/* Inner border */}
            <div className="border-double border-4 border-[#747bff] p-2 sm:p-1">
              <img
                ref={imageRef}
                src={CenterImage}
                alt="Maria Peters"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Sparkle Effect Elements */}
          <div
            className="sparkle absolute"
            style={{ top: "30%", left: "30%" }}
            ref={(el) => (sparkleRefs.current[0] = el)}
          ></div>
          <div
            className="sparkle absolute"
            style={{ top: "40%", left: "50%" }}
            ref={(el) => (sparkleRefs.current[1] = el)}
          ></div>
          <div
            className="sparkle absolute"
            style={{ top: "60%", left: "70%" }}
            ref={(el) => (sparkleRefs.current[2] = el)}
          ></div>
          <div
            className="sparkle absolute"
            style={{ top: "20%", left: "80%" }}
            ref={(el) => (sparkleRefs.current[3] = el)}
          ></div>
          <div
            className="sparkle absolute"
            style={{ top: "70%", left: "40%" }}
            ref={(el) => (sparkleRefs.current[4] = el)}
          ></div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
