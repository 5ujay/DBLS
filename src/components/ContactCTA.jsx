import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      <img
        src="/images/hero/cta-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <ScrollReveal>
        <h2 className="text-4xl font-playfair mb-4 relative z-10">
          Let’s Create Something <span className="text-amber-500">Beautiful</span> Together
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8 relative z-10">
          Reach out today and let’s turn your story into timeless art.
        </p>
        <Link
          to="/contact"
          className="relative z-10 bg-amber-500 text-black px-10 py-4 rounded-lg font-semibold hover:bg-amber-400 transition"
        >
          Contact Us
        </Link>
      </ScrollReveal>
    </section>
  );
}
