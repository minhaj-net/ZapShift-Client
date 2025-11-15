// Footer.jsx
import React from "react";
import { FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X icon for Twitter (new branding)
import Logo from "../../Components/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-3xl mt-10 px-6 py-10 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-4 flex justify-center items-center">
         <Logo></Logo>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-400 hover:text-white">
          <a href="#services" className="hover:text-green-400 transition">Services</a>
          <a href="#coverage" className="hover:text-green-400 transition">Coverage</a>
          <a href="#about" className="hover:text-green-400 transition">About Us</a>
          <a href="#pricing" className="hover:text-green-400 transition">Pricing</a>
          <a href="#blog" className="hover:text-green-400 transition">Blog</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <SiX className="text-white w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-500 w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
