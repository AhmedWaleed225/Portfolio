// 📁 src/pages/Home.js
import React from "react";
import { Link, Element } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Slider from "react-slick";
import Photo from "../Images/Photo.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const reviews = [
    {
      name: "John Doe",
      feedback:
        "Ahmed was amazing to work with. Delivered the project ahead of time with clean and maintainable code!",
    },
    {
      name: "Emily Smith",
      feedback:
        "Highly professional and skilled developer. He brought our vision to life beautifully.",
    },
    {
      name: "Michael Brown",
      feedback:
        "Great communication and solid technical skills. Would definitely work with Ahmed again.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Home Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white dark:bg-gray-900 text-black dark:text-white"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Tilt>
            <div className="w-40 h-40 mb-6 rounded-full overflow-hidden shadow-lg">
              <img
                src={Photo}
                alt="Ahmed Waleed Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </Tilt>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I'm Ahmed Waleed
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6 dark:text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          A certified{" "}
          <span className="font-semibold">MERN Stack & Next.js Developer</span>{" "}
          with a passion for building powerful, scalable, and modern web
          applications. I help businesses grow by delivering clean, responsive,
          and SEO-optimized solutions.
        </motion.p>

        {/* What I Do - Services */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 text-gray-600 text-md mb-8 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div>⚡ Full-Stack App Development (MERN & Next.js)</div>
          <div>🚀 RESTful APIs & Authentication (JWT, OAuth)</div>
          <div>🎯 Responsive UI with Tailwind & React</div>
          <div>📈 SEO & Performance Optimization</div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="px-4 py-2 rounded-full bg-sky-500 text-white font-medium shadow-md">
            ⚛️ React
          </span>
          <span className="px-4 py-2 rounded-full bg-green-600 text-white font-medium shadow-md">
            🌿 Node.js
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-700 text-white font-medium shadow-md">
            🖥 Express.js
          </span>
          <span className="px-4 py-2 rounded-full bg-emerald-600 text-white font-medium shadow-md">
            🍃 MongoDB
          </span>
          <span className="px-4 py-2 rounded-full bg-black text-white font-medium shadow-md">
            🧠 Next.js
          </span>
          <span className="px-4 py-2 rounded-full bg-yellow-500 text-white font-medium shadow-md">
            📜 JavaScript
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-400 text-white font-medium shadow-md">
            🎨 Tailwind CSS
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-800 text-white font-medium shadow-md">
            🔧 Git & GitHub
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            to="project-briefs"
            smooth={true}
            duration={600}
            offset={-60}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition cursor-pointer"
          >
            View My Work <FaArrowDown className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Project Briefs Section */}
      <Element name="project-briefs">
        <section className="bg-white py-16 px-6 text-center dark:bg-gray-900 dark:text-white">
          <motion.h2
            className="text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects Preview
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3 text-left max-w-6xl mx-auto">
            {/* Project 1 */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                🧭 Natours
              </h3>
              <p className="text-gray-700 text-sm">
                Full-stack tour booking app using Node.js, Express, MongoDB, and
                Pug. Features user authentication, tour booking, and admin
                panel.
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                🛒 MERN eCommerce
              </h3>
              <p className="text-gray-700 text-sm">
                A fully functional eCommerce web app built with React, Node.js,
                MongoDB & Express. Includes user auth, cart, checkout & admin
                dashboard.
              </p>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                🧾 Portfolio Website
              </h3>
              <p className="text-gray-700 text-sm">
                The website you're viewing now! Built with React, Tailwind CSS,
                Framer Motion, and React Router — responsive and animated.
              </p>
            </motion.div>
          </div>
        </section>
      </Element>

      {/* Testimonials / Reviews Section */}
      <section className="py-16 px-6 bg-blue-50 dark:bg-gray-800 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-600 dark:text-yellow-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Clients Say
        </motion.h2>

        <div className="max-w-xl mx-auto">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  <p className="text-lg italic text-gray-800 dark:text-gray-200">
                    "{review.feedback}"
                  </p>
                  <p className="mt-4 font-semibold text-blue-600 dark:text-yellow-400">
                    — {review.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
