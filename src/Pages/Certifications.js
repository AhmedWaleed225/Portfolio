import React from "react";
import { FaExternalLinkAlt, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiMeta, SiReact, SiMongodb } from "react-icons/si"; // Removed unused SiCoursera, SiUdemy, SiExpress

const certifications = [
  {
    title: "Meta Front-End Developer",
    platform: "Coursera",
    icon: <SiMeta className="text-blue-600 text-2xl" />,
    description:
      "Comprehensive certificate covering front-end fundamentals using HTML, CSS, JavaScript, React, and more. Issued by Meta via Coursera.",
    link: "https://www.credly.com/badges/82e8f9f8-8976-4170-9fec-4c2c51a377f6/public_url",
    color: "text-blue-600",
  },
  {
    title: "Project Management Professional (PMP)",
    platform: "PMI",
    icon: <FaTasks className="text-green-600 text-2xl" />, // ✅ Replaced SiProjectmanagement
    description:
      "Globally recognized certification demonstrating advanced knowledge in project planning, execution, leadership, and Agile methodologies.",
    link: "https://www.credly.com/badges/9f4c3b15-b8b6-4997-83c5-f619bbfc7d1f/public_url",
    color: "text-green-600",
  },
  {
    title: "The Ultimate React Course (2024)",
    platform: "Udemy",
    icon: <SiReact className="text-purple-600 text-2xl" />,
    description:
      "A full front-end engineering course teaching React, Next.js, Redux Toolkit, Tailwind, and more—focused on building real-world applications.",
    link: "https://ude.my/UC-770c156e-517b-4145-a37d-c99c085c8011",
    color: "text-purple-600",
  },
  {
    title: "Node.js, Express, MongoDB & More",
    platform: "Udemy",
    icon: <SiMongodb className="text-indigo-600 text-2xl" />,
    description:
      "Back-end web development bootcamp covering Node.js, Express, MongoDB, Mongoose, APIs, authentication, and deployment strategies.",
    link: "https://ude.my/UC-1a402cc3-8559-4b45-9370-d2e8dddd92d5",
    color: "text-indigo-600",
  },
];

const Certifications = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100 dark:from-gray-800 to-transparent z-0" />

      <motion.h2
        className="text-4xl font-bold text-blue-600 dark:text-white mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transform transition duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              {cert.icon}
              <h3 className={`text-xl font-semibold ${cert.color}`}>
                {cert.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {cert.description}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium ${cert.color} hover:underline flex items-center gap-1`}
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
