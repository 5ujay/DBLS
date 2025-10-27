import { motion } from "framer-motion";
import { fadeInUp } from "../animations/motionVariants";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-90"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-6xl md:text-7xl font-playfair mb-4 leading-tight">
          Capturing <span className="text-amber-500">Life’s Essence</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
          At StudioLens, we craft timeless visual stories through light, emotion,
          and artistry.
        </p>

        <Link
          to="/gallery"
          className="bg-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition"
        >
          Explore Gallery
        </Link>
      </motion.div>
    </section>
  );
}
