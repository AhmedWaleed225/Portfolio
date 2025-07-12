import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen  py-16 px-6  flex-col items-center text-center  flex  justify-center  bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-blue-600 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-3xl text-gray-700 text-lg leading-7 mb-8 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm <span className="font-semibold text-blue-600">Ahmed Waleed</span>, a
        certified MERN Stack & Next.js Developer with a background in Civil
        Engineering from Ain Shams University.
        <br />
        <br />
        After several years in the engineering field, I transitioned into
        full-stack web development — blending analytical thinking, structural
        logic, and problem-solving with my love for building user-centric
        digital products.
        <br />
        <br />
        I’ve earned certifications in both Front-End Development (Meta) and
        Project Management (PMP), giving me the rare ability to deliver clean,
        scalable code while also understanding team workflows and business
        needs.
        <br />
        <br />
        Whether it's developing a REST API, building a responsive UI with React,
        or planning deliverables like a true project manager, I thrive on
        bringing ideas to life through efficient, modern web solutions.
      </motion.p>

      {/* Certificates as Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a
          href="https://www.credly.com/badges/82e8f9f8-8976-4170-9fec-4c2c51a377f6/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Meta Front-End Certificate
        </a>
        <a
          href="https://www.credly.com/badges/9f4c3b15-b8b6-4997-83c5-f619bbfc7d1f/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
        >
          PMP Certification
        </a>
      </motion.div>
    </section>
  );
};

export default About;
