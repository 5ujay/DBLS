import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import images manually
import pre1 from "/images/gallery/pre-wedding1.jpg";
import pre2 from "/images/gallery/pre-wedding2.jpg";
import pre3 from "/images/gallery/pre-wedding3.jpg";

import wed1 from "/images/gallery/wedding1.jpg";
import wed2 from "/images/gallery/wedding2.jpg";
import wed3 from "/images/gallery/wedding3.jpg";

import fash1 from "/images/gallery/fashion1.jpg";
import fash2 from "/images/gallery/fashion2.jpg";
import fash3 from "/images/gallery/fashion3.jpg";

export default function WorkPreview() {
  const workSections = [
    {
      title: "Pre-Wedding",
      images: [pre1, pre2, pre3],
      description: "Capturing love before the big day.",
    },
    {
      title: "Weddings",
      images: [wed1, wed2, wed3],
      description: "Timeless moments of beautiful unions.",
    },
    {
      title: "Fashion",
      images: [fash1, fash2, fash3],
      description: "Stylish, bold, and modern editorial shoots.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-black text-white overflow-hidden">
      <ScrollReveal>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-playfair text-center mb-16"
        >
          Our <span className="text-amber-500">Signature Work</span>
        </motion.h2>
      </ScrollReveal>

      {workSections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-amber-400 uppercase tracking-wide mb-3">
              {section.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              {section.description}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {section.images.map((img, i) => (
              <ImageCard
                key={i}
                src={img}
                alt={`${section.title} ${i + 1}`}
                title={`${section.title} #${i + 1}`}
                delay={i * 0.15}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <Link
          to="/gallery"
          className="inline-block border border-amber-500 px-8 py-3 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-black transition duration-300"
        >
          View Full Gallery
        </Link>
      </motion.div>
    </section>
  );
}

/* ✅ Small subcomponent for lazy image with animation & spinner */
function ImageCard({ src, alt, title, delay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`object-cover w-full h-72 transition-all duration-700 ${
          loaded
            ? "opacity-100 brightness-90 group-hover:brightness-110 scale-100"
            : "opacity-0 scale-95"
        }`}
      />

      <div className="absolute inset-0 from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-6">
        <p className="text-lg font-semibold text-white tracking-wide drop-shadow-md">
          {title}
        </p>
      </div>
    </motion.div>
  );
}
