import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ✅ Import 5 random gallery images manually
import g1 from "/images/gallery/wedding10.jpg";
import g2 from "/images/gallery/pre-wedding20.jpg";
import g3 from "/images/gallery/fashion6.jpg";
import g4 from "/images/gallery/pre-wedding22.jpg";
import g5 from "/images/gallery/wedding11.jpg";

export default function GalleryPreview() {
  const gallery = [g1, g2, g3, g4, g5];

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
          Glimpse Into Our <span className="text-amber-500">Gallery</span>
        </motion.h2>
      </ScrollReveal>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {gallery.map((img, idx) => (
          <ImageCard key={idx} src={img} alt={`Gallery Image ${idx + 1}`} delay={idx * 0.15} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
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

/* ✅ ImageCard Component with lazy loading + fade-in animation */
function ImageCard({ src, alt, delay }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
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
        className={`object-cover w-full h-64 md:h-72 transition-all duration-700 ${
          loaded ? "opacity-100 scale-100 brightness-90 group-hover:brightness-110" : "opacity-0 scale-95"
        }`}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <p className="text-sm md:text-base font-medium text-white tracking-wide">
          {alt}
        </p>
      </div>
    </motion.div>
  );
}
