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
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-white dark:bg-gray-900 text-black dark:text-white"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100 dark:from-gray-800 to-transparent z-0" />

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Tilt>
            <div className="w-32 h-32 sm:w-40 sm:h-40 mb-6 rounded-full overflow-hidden shadow-lg">
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I'm Ahmed Waleed
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl sm:max-w-2xl mb-6 dark:text-white"
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm sm:text-base mb-8 dark:text-white"
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
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            ["⚛️ React", "bg-sky-500"],
            ["🌿 Node.js", "bg-green-600"],
            ["🖥 Express.js", "bg-gray-700"],
            ["🍃 MongoDB", "bg-emerald-600"],
            ["🧠 Next.js", "bg-black"],
            ["📜 JavaScript", "bg-yellow-500"],
            ["🎨 Tailwind CSS", "bg-blue-400"],
            ["🔧 Git & GitHub", "bg-gray-800"],
          ].map(([label, color], i) => (
            <span
              key={i}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full ${color} text-white font-medium shadow-md text-sm sm:text-base`}
            >
              {label}
            </span>
          ))}
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
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition cursor-pointer"
          >
            View My Work <FaArrowDown className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Project Briefs Section */}
      <Element name="project-briefs">
        <section className="bg-white py-16 px-4 sm:px-6 text-center dark:bg-gray-900 dark:text-white">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects Preview
          </motion.h2>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 text-left max-w-6xl mx-auto">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-5 sm:p-6 shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (i + 1) }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700">
                  {i === 0 && "🧭 Natours"}
                  {i === 1 && "🛒 MERN eCommerce"}
                  {i === 2 && "🧾 Portfolio Website"}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {i === 0 &&
                    "Full-stack tour booking app using Node.js, Express, MongoDB, and Pug. Features user authentication, tour booking, and admin panel."}
                  {i === 1 &&
                    "A fully functional eCommerce web app built with React, Node.js, MongoDB & Express. Includes user auth, cart, checkout & admin dashboard."}
                  {i === 2 &&
                    "The website you're viewing now! Built with React, Tailwind CSS, Framer Motion, and React Router — responsive and animated."}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </Element>

      {/* Testimonials / Reviews Section */}
      <section className="py-16 px-4 sm:px-6 bg-blue-50 dark:bg-gray-800 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-yellow-400 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Clients Say
        </motion.h2>

        <div className="max-w-md sm:max-w-xl mx-auto">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white dark:bg-gray-700 p-5 sm:p-6 rounded-lg shadow">
                  <p className="text-base sm:text-lg italic text-gray-800 dark:text-gray-200">
                    "{review.feedback}"
                  </p>
                  <p className="mt-4 font-semibold text-blue-600 dark:text-yellow-400 text-sm sm:text-base">
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
