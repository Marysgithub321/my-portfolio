import React from "react";
import { FaGithub } from "react-icons/fa";
import MyOrders from "../images/MyOrders.webp";
import shopLogo from "../images/shopLogo.webp";
import MyLogo from "../images/MyLogo.webp";
import Truss from "../images/TrussProject.png";
import PrimeFinishLogo from "../images/PrimeFinishLogo.png";

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
          <div className="aspect-ratio-box">
            <img
              src={MyOrders}
              alt="Tamale Order Tracker"
              width="400"
              height="300"
              className="card-img"
              loading="lazy"
            />
          </div>
          <h2>Tamale Order Tracker</h2>
          <p>
            The Tamale Order Tracker app helps manage food orders easily, with
            the ability to print PDF lists for pickup.
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
          <div className="aspect-ratio-box">
            <img
              src={shopLogo}
              alt="Building Shops Estimator"
              width="400"
              height="300"
              className="card-img"
              loading="lazy"
            />
          </div>
          <h2>Building Shops Estimator</h2>
          <p>
            Helps contractors quickly calculate project costs and generate
            material lists.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://solid-structure.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              href="https://github.com/Marysgithub321/SolidStructure"
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
          <div className="aspect-ratio-box">
            <img
              src={MyLogo}
              alt="Portfolio Website"
              width="400"
              height="300"
              className="card-img"
              loading="lazy"
            />
          </div>
          <h2>Portfolio Website</h2>
          <p>
            Built with React and Tailwind CSS, showcasing projects and technical
            skills.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://mpdev.ca/"
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
        {/* Project 4: Prime Finishes Painting */}
        <div className="card">
          <div className="aspect-ratio-box">
            <img
              src={PrimeFinishLogo}
              alt="Prime Finish Painting"
              width="400"
              height="300"
              className="card-img"
              loading="lazy"
            />
          </div>
          <h2>Prime Finish Painting</h2>
          <p>
            This app is for creating invoices, estimates, tracking job progress,
            managing expenses, and tracking contractor payments efficiently
            for a painting company.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://leap-app-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <a
              href="https://github.com/Marysgithub321/leap-jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          </div>
        </div>
        {/* Project 5: Truss Estimator Application */}
<div className="card mb-[50px]"> {/* Added bottom margin */}
  <div className="aspect-ratio-box">
    <img
      src={Truss}
      alt="Truss Estimator Application"
      width="400"
      height="300"
      className="card-img"
      loading="lazy"
    />
  </div>
  <h2>Truss Estimator Application</h2>
  <p>Calculates project costs and generates detailed PDF estimates.</p>
  <div className="flex justify-center space-x-4">
    <a
      href="https://tru-span.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
    <a
      href="https://github.com/Marysgithub321/TruSpan"
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
