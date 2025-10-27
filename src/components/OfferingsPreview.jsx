import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function OfferingsPreview() {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Cinematic captures that immortalize your most precious day.",
    },
    {
      title: "Portrait Shoots",
      desc: "Elegant, emotional, and artfully lit portraits.",
    },
    {
      title: "Product & Fashion",
      desc: "Clean, aesthetic imagery for commercial excellence.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-black">
      <ScrollReveal>
        <h2 className="text-4xl font-playfair text-center mb-12">
          What We <span className="text-amber-500">Offer</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="p-6 rounded-xl bg-gray-900 border border-white/10 hover:border-amber-500 transition"
          >
            <h3 className="text-2xl mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/offerings"
          className="inline-block border border-amber-500 px-8 py-3 rounded-lg text-amber-500 hover:bg-amber-500 hover:text-black transition"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
}
