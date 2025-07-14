import React, { useState } from "react";
import ReactPizza1 from "../Images/ReactPizza1.png";
import TheWildOasis1 from "../Images/TheWildOasis1.png";
import WorldWise1 from "../Images/WorldWise1.png";
import FastReactPizza from "../Videos/FastReactPizza.mkv";
import TheWildOasis from "../Videos/TheWildOasis.mkv";
import WorldWise from "../Videos/WorldWise.mkv";
import Natours from "../Videos/Natours.mp4";
import Natours1 from "../Images/Natours.png";

const Projects = () => {
  const [showVideo, setShowVideo] = useState({});

  const toggleVideo = (index) => {
    setShowVideo((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const projects = [
    {
      title: "The Wild Oasis",
      stack: ["Next JS", "Tailwind CSS", "Supabase"],
      description:
        "Wildlife Oasis is a dashboard-driven resort site with booking management, cabin listings, and secure user authentication. Built with modern tools for seamless user experience.",
      image: TheWildOasis1,
      video: TheWildOasis,
    },
    {
      title: "Natours",
      stack: ["Next.js", "Express", "Mongo DB", "Pug"],
      description:
        "Full-stack tour booking platform with REST API, JWT authentication, role-based control, secure cookie sessions, and admin panel.",
      image: Natours1,
      video: Natours,
    },
    {
      title: "The React Pizza",
      stack: ["React", "Tailwind CSS", "Node JS"],
      description:
        "Pizza shop SPA where users can browse menus, manage cart, and place priority orders. Simple yet functional interface for small business use.",
      image: ReactPizza1,
      video: FastReactPizza,
    },
    {
      title: "World Wise",
      stack: ["React", "Vite", "Tailwind CSS", "Context API"],
      description:
        "Interactive map app to log visited cities with auto-location API, custom notes, and visually appealing UX built with Vite & Context.",
      image: WorldWise1,
      video: WorldWise,
    },
  ];

  return (
    <section className="min-h-screen py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 dark:text-yellow-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-300 mb-3">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-gray-600 text-blue-700 dark:text-white rounded-full text-sm font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-70 object-cover rounded-lg mb-4 shadow-md"
            />

            <button
              onClick={() => toggleVideo(index)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mb-3 transition"
            >
              {showVideo[index] ? "Hide Demo" : "Watch Demo"}
            </button>

            {showVideo[index] && (
              <video
                src={project.video}
                controls
                className="w-full rounded-xl mt-3 shadow-md"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
