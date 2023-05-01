import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-500 py-10 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-5 md:mb-0">
        <p className="text-white opacity-50">
          ©KoexoKoe, all rights reserved, 2023
        </p>
      </div>
      <div className="text-center md:text-left mb-5 md:mb-0">
        <h1 className="text-white font-bold mb-2">Contact Us:</h1>
        <p className="text-white opacity-50">Phone: xxx xxx xxx</p>
        <p className="text-white opacity-50">E-mail: email@gmail.com</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="p-4 text-3xl text-white hover:text-gray-300 cursor-pointer">
          <FaFacebook />
        </div>
        <div className="p-4 text-3xl text-white hover:text-gray-300 cursor-pointer">
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
