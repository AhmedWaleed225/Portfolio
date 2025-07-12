import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
          Ahmed Waleed
        </h1>

        <ul className="flex space-x-6 text-gray-700 dark:text-white font-medium">
          <li>
            <NavLink to="/" className="hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-blue-600">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="hover:text-blue-600">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="hover:text-blue-600">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className="hover:text-blue-600">
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-600">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle Switch */}
        <div className="ml-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-yellow-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
