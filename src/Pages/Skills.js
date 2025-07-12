import React from "react";

const Skills = () => {
  return (
    <section className="min-h-screen py-16 px-6  text-center  flex flex-col justify-center items-center  bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-gray-700">
        {/* 🔧 Add or remove skills as needed */}
        <span className="bg-blue-100 px-4 py-2 rounded">JavaScript</span>
        <span className="bg-green-100 px-4 py-2 rounded">Node.js</span>
        <span className="bg-sky-100 px-4 py-2 rounded">React</span>
        <span className="bg-emerald-100 px-4 py-2 rounded">MongoDB</span>
        <span className="bg-gray-200 px-4 py-2 rounded">Express.js</span>
        <span className="bg-black text-white px-4 py-2 rounded">Next.js</span>
        <span className="bg-yellow-100 px-4 py-2 rounded">Redux</span>
        <span className="bg-blue-300 px-4 py-2 rounded">Tailwind CSS</span>
      </div>
    </section>
  );
};

export default Skills;
