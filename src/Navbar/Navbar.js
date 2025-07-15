import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
          Ahmed Waleed
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-white font-medium">
          {[
            "/",
            "/about",
            "/projects",
            "/skills",
            "/certifications",
            "/contact",
          ].map((path, index) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`
                }
              >
                {
                  [
                    "Home",
                    "About",
                    "Projects",
                    "Skills",
                    "Certifications",
                    "Contact",
                  ][index]
                }
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <div className="ml-4">
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

        {/* Mobile Hamburger Button */}
        <div className="md:hidden ml-4">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-700 dark:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-inner px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-800 dark:text-white font-medium">
            {[
              "/",
              "/about",
              "/projects",
              "/skills",
              "/certifications",
              "/contact",
            ].map((path, index) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block hover:text-blue-600 ${
                      isActive ? "text-blue-600" : ""
                    }`
                  }
                >
                  {
                    [
                      "Home",
                      "About",
                      "Projects",
                      "Skills",
                      "Certifications",
                      "Contact",
                    ][index]
                  }
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
