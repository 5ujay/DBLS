import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal"; 

const Contact = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden py-24 px-6">
      {/* Background Image */}
      <img
        src="/images/hero/cta-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <ScrollReveal>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl w-full space-y-8"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold tracking-wide mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Have a project, event, or shoot in mind? Our studio would love to collaborate and
            capture your moments beautifully.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <FaEnvelope className="text-2xl text-amber-500" />
              <a
                href="mailto:bailkardigamber1@gmail.com"
                className="text-gray-200 hover:text-white transition-colors"
              >
                bailkardigamber1@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <FaWhatsapp className="text-2xl text-amber-500" />
              <a
                href="https://wa.me/8007560950"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                +91 80075 60950
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-10">
            <a
              href="https://www.instagram.com/digambar_bailkar_photography/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              <FaInstagram className="text-3xl" />
            </a>

            <a
              href="https://www.youtube.com/@digambarbailkarphotography2625/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              <FaYoutube className="text-3xl" />
            </a>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
