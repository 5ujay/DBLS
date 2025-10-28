import { Link } from "react-router-dom";

// ✅ Import images
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
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16">
        Our <span className="text-amber-500">Signature Work</span>
      </h2>

      {/* Work Sections */}
      {workSections.map((section, idx) => (
        <div key={idx} className="mb-24">
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
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`${section.title} ${i + 1}`}
                  className="object-cover w-full h-72 brightness-90 hover:brightness-110 transition duration-300"
                />
                <div className="absolute inset-0 from-black/70 via-black/40 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
                  <p className="text-lg font-semibold text-white tracking-wide drop-shadow-md">
                    {section.title} #{i + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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
