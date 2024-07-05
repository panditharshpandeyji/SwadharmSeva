// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8 mt-5">
      <div className="container mx-auto px-4 mt-5">
        <div className="flex flex-col justify-between items-center">
          {/* Navigation Links */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 mb-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-pink-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="mt-8 text-center text-gray-200 w-[100%]">
            <div className="h-0.5 bg-white mb-1"></div>
            <p className="mt-2">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
