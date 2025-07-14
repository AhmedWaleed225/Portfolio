import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100 dark:from-gray-800 to-transparent z-0" />

      <motion.h2
        className="text-4xl font-bold text-blue-600 dark:text-white mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto dark:text-white">
        I'm open to freelance work, collaborations, or just a friendly chat! You
        can reach out to me directly via email or connect through my social
        media profiles below.
      </p>

      {/* Contact Icons */}
      <div className="flex justify-center gap-6 mb-8 text-blue-600 text-2xl">
        <a
          href="mailto:ahmedwaleed1999@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaEnvelope title="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmedwaleed1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaLinkedin title="LinkedIn" />
        </a>
        <a
          href="https://github.com/AhmedWaleed225"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaGithub title="GitHub" />
        </a>
      </div>
      <form
        action="https://formspree.io/f/xyzjrlov"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          name="_replyto"
          placeholder="Your Email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full border px-4 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
