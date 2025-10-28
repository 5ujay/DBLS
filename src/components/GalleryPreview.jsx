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
      {/* Header */}
      <h2 className="text-4xl font-playfair text-center mb-16">
        Glimpse Into Our <span className="text-amber-500">Gallery</span>
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {gallery.map((img, idx) => (
          <ImageCard key={idx} src={img} alt={`Gallery Image ${idx + 1}`} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          to="/gallery"
          className="inline-block border border-amber-500 px-8 py-3 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-black transition duration-300"
        >
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}

/* ✅ Simple ImageCard (no animation, clean hover effect) */
function ImageCard({ src, alt }) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-64 md:h-72 brightness-90 hover:brightness-110 transition duration-300"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <p className="text-sm md:text-base font-medium text-white tracking-wide">
          {alt}
        </p>
      </div>
    </div>
  );
}
