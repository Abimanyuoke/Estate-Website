import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Abicode</h2>
            <p className="text-gray-400 text-sm mt-2">Crafting digital experiences with passion.</p>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-6 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/abim.manyu.3914207" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            <a href="https://x.com/Abimanyuoke" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
            <a href="https://www.instagram.com/fanani_abimanyu/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/fanani-akbar-abimanyu-978a03298/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Abicode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
