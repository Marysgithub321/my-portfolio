import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import { Analytics } from '@vercel/analytics/react';  // Import Vercel Analytics

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';
import ContactMe from './pages/ContactMe';

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Global animation duration (optional)
      once: true,      // Animation occurs only once when scrolled into view
    });
  }, []);

  return (
    <Router>
      {/* Vercel Analytics Component */}
      <Analytics />  {/* Add Analytics here */}

      <div>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/technologies">Technologies</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
