import React from "react";
import ReactPizza1 from "../Images/ReactPizza1.png";
import TheWildOasis1 from "../Images/TheWildOasis1.png";
import WorldWise1 from "../Images/WorldWise1.png";
import FastReactPizza from "../Videos/FastReactPizza.mkv";
import TheWildOasis from "../Videos/TheWildOasis.mkv";
import WorldWise from "../Videos/WorldWise.mkv";
import Natours from "../Videos/Natours.mp4";
import Natours1 from "../Images/Natours.png";

const Projects = () => {
  const projects = [
    {
      title: "The Wild Oasis",
      stack: ["Next JS", "Tailwind CSS", "Supabase"],
      description:
        "Wildlife Oasis is a comprehensive website designed for a resort featuring a range of unique, nature-inspired cabins. The site includes a dashboard for managing and displaying all resort bookings, cabin details, and a user authentication system. The project aims to create a user-friendly interface for both staff and visitors, simplifying the booking process and providing convenient access to essential resort information.",
      image: TheWildOasis1,
      video: TheWildOasis,
    },
    {
      title: "Natours",
      stack: ["Next.js", "Express", "Mongo DB", "Pug"],
      description:
        "Natours is a full-stack tour booking web application built with Node.js, Express, MongoDB, and Pug. It features a RESTful API with advanced authentication using JWT, role-based access control, and secure cookie handling. Users can sign up, log in, update their profiles, and book exciting tours. The app includes backend features like data validation, password reset via email, and middleware for route protection.",
      image: Natours1,
      video: Natours,
    },
    {
      title: "The React Pizza",
      stack: ["React", "Tailwind CSS", "Node JS"],
      description:
        "This is a pizza store in which you can enter your username and start browsing the available pizza menu. The app allows you to add pizzas to your shopping cart, and you can access the cart to make adjustments by adding or removing pizzas. The app also includes a priority option for orders, which you can select if you want to expedite your order.",
      image: ReactPizza1,
      video: FastReactPizza,
    },
    {
      title: "World Wise",
      stack: ["React", "Vite", "Tailwind CSS", "Context API"],
      description:
        "The World Wise app allows you to explore and record the places you’ve visited around the world. You can log in with your account to access a world map, where you can select locations. The app automatically fetches the country and city names using an API. You can then add a personal description and save the city.",
      image: WorldWise1,
      video: WorldWise,
    },
  ];

  return (
    <section className="min-h-screen py-16 flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-4xl font-bold text-blue-600 mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-left"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-90 object-cover rounded-lg mb-3 shadow-sm"
            />
            <video src={project.video} controls className="w-full rounded" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
