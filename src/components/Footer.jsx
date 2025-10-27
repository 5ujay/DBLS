import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
  FaCode,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left Section: Studio Info */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-semibold text-white">Lensflair Studio</h2>
          <p className="text-sm text-gray-400">
            Capturing emotions, stories, and moments — one frame at a time.
          </p>
        </div>

        {/* Middle Section: Quick Links
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/gallery" className="hover:text-white transition-colors">
            Gallery
          </a>
          <a href="/offerings" className="hover:text-white transition-colors">
            Offerings
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div> */}

        {/* Right Section: Socials + Developer Credit */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-5 text-xl">
            <a
              href="https://www.instagram.com/digambar_bailkar_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@digambarbailkarphotography2625/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:bailkardigamber1@gmail.com"
              className="hover:text-white transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/8007560950"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <p>Developed with ❤️ by</p>
            <a href="https://www.linkedin.com/in/sujay-pagam/" target="_blank">
              <FaCode className="text-gray-300 text-lg hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Lensflair Studio. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
