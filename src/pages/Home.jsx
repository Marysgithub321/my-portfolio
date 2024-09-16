import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import ContactMe from '../pages/ContactMe'; // Ensure this path is correct
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Technologies from '../pages/Technologies';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-blue text-light-gray">
      {/* HomeHeader */}
      <HomeHeader />

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      <Projects />

      {/* Technologies Section */}
      <Technologies />

      {/* Contact Me Section */}
      <ContactMe />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
