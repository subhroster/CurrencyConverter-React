import React from "react";
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon from react-icons

const Footer = () => (
  <div className="bg-gray-900 text-white w-full py-4 mt-auto">
    <div className="flex flex-col items-center">
      <p className="text-center text-lg mt-4">Made with ❤️ by Subhro Kar</p>
      <a href="https://www.subhbits.com" className="text-blue-400 underline">
        www.subhbits.com
      </a>
      <div className="flex items-center mt-4">
        <FaGithub className="mr-2" />
        <a
          href="https://github.com/subhroster/CurrencyConverter-React"
          className="text-blue-400 underline"
        >
          Source code and documentation available on GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
