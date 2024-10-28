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
        {projectData.map((project, index) => (
          <div key={index} className="card flex flex-col">
            {/* Aspect Ratio Container */}
            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <div className="flex justify-center space-x-4 mt-auto">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:underline"
              >
                <FaGithub />
                <span>View Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Project data array
const projectData = [
  {
    title: "Tamale Order Tracker",
    description:
      "The Tamale Order Tracker app helps manage food orders easily, with the ability to print PDF lists for pickup.",
    image: MyOrders,
    projectLink: "https://tamale-app-desktop.vercel.app/",
    codeLink: "https://github.com/Marysgithub321/tamale-app-desktop",
  },
  {
    title: "Building Shops Estimator",
    description:
      "Helps contractors quickly calculate project costs and generate material lists and estimates.",
    image: shopLogo,
    projectLink: "https://solid-structure.vercel.app/",
    codeLink: "https://github.com/Marysgithub321/SolidStructure",
  },
  {
    title: "Portfolio Website",
    description:
      "Built with React and Tailwind CSS, showcasing projects and technical skills.",
    image: MyLogo,
    projectLink: "https://mpdev.ca/",
    codeLink: "https://github.com/Marysgithub321/my-portfolio",
  },
  {
    title: "Prime Finish Painting",
    description:
      "This app is for creating invoices, estimates, tracking job progress, managing expenses, and tracking contractor payments efficiently for a painting company.",
    image: PrimeFinishLogo,
    projectLink: "https://prime-finish.vercel.app/",
    codeLink: "https://github.com/Marysgithub321/prime-finish",
  },
  {
    title: "Truss Estimator Application",
    description:
      "Calculates project costs and generates detailed PDF estimates.",
    image: Truss,
    projectLink: "https://tru-span.vercel.app/",
    codeLink: "https://github.com/Marysgithub321/TruSpan",
  },
];

export default Projects;
