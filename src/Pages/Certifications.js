import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <section className="min-h-screen py-16 px-6 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-yellow-400 mb-10 text-center">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Meta Certificate */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Meta Front-End Developer
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Comprehensive certificate covering front-end fundamentals using
            HTML, CSS, JavaScript, React, and more. Issued by Meta via Coursera.
          </p>
          <a
            href="https://www.credly.com/badges/82e8f9f8-8976-4170-9fec-4c2c51a377f6/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          >
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>

        {/* PMP Certificate */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-green-600">
            Project Management Professional (PMP)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Globally recognized certification demonstrating advanced knowledge
            in project planning, execution, leadership, and Agile methodologies.
          </p>
          <a
            href="https://www.credly.com/badges/9f4c3b15-b8b6-4997-83c5-f619bbfc7d1f/public_url"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-600 hover:underline flex items-center gap-1"
          >
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>

        {/* React Course */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            The Ultimate React Course (2024)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            A full front-end engineering course teaching React, Next.js, Redux
            Toolkit, Tailwind, and more—focused on building real-world
            applications.
          </p>
          <a
            href="https://ude.my/UC-770c156e-517b-4145-a37d-c99c085c8011"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-purple-600 hover:underline flex items-center gap-1"
          >
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>

        {/* Node/Express Course */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-indigo-600">
            Node.js, Express, MongoDB & More
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            Back-end web development bootcamp covering Node.js, Express,
            MongoDB, Mongoose, APIs, authentication, and deployment strategies.
          </p>
          <a
            href="https://ude.my/UC-1a402cc3-8559-4b45-9370-d2e8dddd92d5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
          >
            View Certificate <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
