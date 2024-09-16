import React from 'react';
import { FaGithub } from 'react-icons/fa';
import MyOrders from '../images/MyOrders.png';
import shopLogo from '../images/shopLogo.png';
import MyLogo from '../images/MyLogo.png';
import Truss from '../images/Truss.png';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start px-4 sm:px-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8">
        My Latest Projects
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Project 1: Tamale Order Tracker */}
        <div className="card">
          <img
            src={MyOrders}
            alt="Tamale Order Tracker"
            className="card-img"
          />
          <h2>Tamale Order Tracker</h2>
          <p>
            The Tamale Order Tracker app helps manage food orders easily, with the ability to print PDF lists for pickup.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://tamale-app-desktop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              href="https://github.com/Marysgithub321/tamale-app-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Project 2: Building Shops Estimator */}
        <div className="card">
          <img
            src={shopLogo}
            alt="Building Shops Estimator"
            className="card-img"
          />
          <h2>Building Shops Estimator</h2>
          <p>
            Helps contractors quickly calculate project costs and generate material lists.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://1drv.ms/u/s!AvelyWS0bAEulbhVs5bX2ckMdnMtTQ?e=yGilPg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Estimator
            </a>
            <a
              href="https://github.com/Marysgithub321/Shop-Estimator.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Project 3: Portfolio Website */}
        <div className="card">
          <img
            src={MyLogo}
            alt="Portfolio Website"
            className="card-img"
          />
          <h2>Portfolio Website</h2>
          <p>
            Built with React and Tailwind CSS, showcasing projects and technical skills.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://your-portfolio-site.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              href="https://github.com/Marysgithub321/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Project 4: Truss Estimator Application */}
        <div className="card">
          <img
            src={Truss}
            alt="Truss Estimator Application"
            className="card-img"
          />
          <h2>Truss Estimator Application</h2>
          <p>
            Calculates project costs and generates detailed PDF estimates.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://1drv.ms/u/s!AvelyWS0bAEulpIRMSGwQNVZ1ZD4kw?e=Y5WJMC"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Estimator
            </a>
            <a
              href="https://github.com/Marysgithub321/Hidden-Truss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
