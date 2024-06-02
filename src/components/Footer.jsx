import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-gray-200 text-gray-800"
      } w-full py-4 mt-auto`}
    >
      <div className="flex flex-col items-center">
        <p className="text-center text-lg mt-4">Made with ❤️ by Subhro Kar</p>
        <a
          href="https://www.subhbits.com"
          className="text-gray-900 dark:text-white underline"
        >
          www.subhbits.com
        </a>
        <div className="flex items-center mt-4">
          <FaGithub
            className={`${
              theme === "dark" ? "text-white" : "text-gray-800"
            } mr-2`}
          />
          <a
            href="https://github.com/subhroster/CurrencyConverter-React"
            className="text-gray-900 dark:text-white underline"
          >
            Source code and documentation available on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
