import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollReveal from "../components/ScrollReveal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Combine all images (total: 49)
  const allImages = [
    ...Array.from({ length: 23 }, (_, i) => `/images/gallery/pre-wedding${i + 1}.jpg`),
    ...Array.from({ length: 17 }, (_, i) => `/images/gallery/wedding${i + 1}.jpg`),
    ...Array.from({ length: 9 }, (_, i) => `/images/gallery/fashion${i + 1}.jpg`),
  ];

  // ✅ Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <section className="min-h-screen bg-black text-white py-24 px-4 sm:px-8 md:px-16">
      {/* Title */}
      <ScrollReveal>
        <h2 className="text-4xl sm:text-5xl font-playfair text-center mb-16">
          Our <span className="text-amber-500">Gallery</span>
        </h2>
      </ScrollReveal>

      {/* ✅ Masonry / Responsive Grid */}
      <div
        className="
          columns-2
          md:columns-3
          lg:columns-4
          gap-4 space-y-4
        "
      >
        {allImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(src)}
            className="relative overflow-hidden cursor-pointer rounded-2xl group break-inside-avoid"
          >
            <LazyLoadImage
              src={src}
              alt={`Gallery image ${i + 1}`}
              effect="blur"
              className="
                w-full 
                rounded-2xl 
                object-cover 
                transition 
                duration-500 
                group-hover:brightness-110
              "
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>

      {/* ✅ Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-lg"
            />

            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-light hover:text-amber-500 transition"
              whileHover={{ rotate: 90 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
