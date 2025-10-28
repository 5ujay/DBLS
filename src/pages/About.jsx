import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { FaCamera, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24 px-6 flex flex-col items-center justify-center">
      {/* Background */}
      <img
        src="/images/about/profile-aboutus.jpg" // Replace with a nice studio or blurred background
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <ScrollReveal>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          {/* Photographer Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/about/profile-aboutus.jpg" // Replace with actual photographer image
              alt="Digambar Bailkar"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg border-2 border-gray-700 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Bio Section */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-playfair font-semibold text-amber-500">
              Digambar Bailkar
            </h2>
            <h3 className="text-xl text-gray-300">
              Founder & Lead Photographer, <span className="text-white">Digambar Bailkar LensFlair Studio</span>
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I’m a passionate photographer based in kolhapur (INDIA), capturing weddings, events, portraits,
              and creative visual stories for over 3+ years. I founded{" "}
              <span className="text-amber-500 font-medium">Digambar Bailkar Lensflair Studio</span>{" "}
              to turn real emotions into timeless art. My goal is to bring cinematic depth and
              natural beauty to every frame I shoot.
            </p>

            <p className="text-gray-400">
              With a talented team of <span className="text-white font-medium">numerous professionals</span>,
              we provide a complete photography and videography experience — from conceptual shoots
              to final edits — ensuring every client gets a personalized and emotional masterpiece.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <FaCamera className="text-3xl text-amber-500" />
                <p className="text-gray-200 font-semibold">100+ Projects</p>
                <span className="text-gray-400 text-sm">Weddings • Events • Portraits</span>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-2">
                <FaUsers className="text-3xl text-amber-500" />
                <p className="text-gray-200 font-semibold">10+ Team Members</p>
                <span className="text-gray-400 text-sm">Photographers • Editors • Creators</span>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-2">
                <FaAward className="text-3xl text-amber-500" />
                <p className="text-gray-200 font-semibold">3+ Years</p>
                <span className="text-gray-400 text-sm">Professional Experience</span>
              </div>
            </div>
          </div>

          Test 1
        </motion.div>
      </ScrollReveal>
    </section>
  );
};

export default About;
