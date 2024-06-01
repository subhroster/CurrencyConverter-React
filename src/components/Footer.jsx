import React from "react";
// import Logo from "../assets/images/Logo-1.png"; // Uncomment and set the path if you have a logo

const Footer = () => (
  <footer className="bg-gray-900 w-full py-6 mt-auto">
    <div className="flex justify-center items-center flex-wrap gap-4">
      {/* <img src={Logo} alt="logo" className="w-32 h-auto" /> */}
    </div>
    <p className="text-center text-lg mt-4 text-white">
      Made with ❤️ by Subhro Kar
    </p>
    <p className="text-center mt-2">
      <a
        href="https://www.subhbits.com"
        className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
      >
        www.subhbits.com
      </a>
    </p>
  </footer>
);

export default Footer;
