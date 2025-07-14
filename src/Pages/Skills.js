import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
      },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
      { name: "REST APIs", icon: "🌐" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      {
        name: "GitHub",
        icon: <SiGithub className="text-black dark:text-white" />,
      },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      {
        name: "Vercel",
        icon: <SiVercel className="text-black dark:text-white" />,
      },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "SEO Optimization", icon: "🔍" },
      { name: "Agile / Scrum", icon: "📋" },
      { name: "PMP Certified", icon: "📘" },
      { name: "Team Collaboration", icon: "🤝" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen py-16 px-6 text-center bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-blue-600 dark:text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Tools
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.items.map((skill, j) => (
                <div
                  key={j}
                  className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
