import React from "react";

const Footer = () => {
  return (
    <section className="dark:bg-gray-900 dark:text-white">
      <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 border-t border-gray-200 dark:border-gray-700 mt-12 transition-colors duration-300">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Ahmed Waleed. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a
            href="mailto:ahmedwaleed1999@yahoo.com"
            className="text-blue-600 dark:text-yellow-400 hover:underline text-sm"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedwaleed1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-yellow-400 hover:underline text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AhmedWaleed225"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-yellow-400 hover:underline text-sm"
          >
            GitHub
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
