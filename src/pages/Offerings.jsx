import React from "react";
import { motion } from "framer-motion";
import {
  FaCameraRetro,
  FaStar,
} from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const packages = [
  {
    title: "Silver Package",
    highlight: "Perfect for Intimate Weddings",
    team: ["1 Photographer", "1 Cinematographer", "1 Assistant"],
    equipments: [
      "Canon R Series Camera (Photography)",
      "Sony Alpha Series (Cinematic Video)",
    ],
    events: [
      "Engagement Ceremony",
      "Wedding & Rituals Coverage",
      "1 Premium Album (30 Pages, 160–200 Photos)",
      "All Raw Data (Provided in Pen Drive)",
      "Engagement Photos",
      "Cinematic Wedding Highlights + Reels",
    ],
    icon: <FaCameraRetro className="text-3xl text-amber-500" />,
  },
  {
    title: "Gold Package",
    highlight: "Our Most Popular Choice",
    team: [
      "2 Photographers",
      "2 Cinematographers",
      "1 Assistant",
      "1 Drone Operator",
    ],
    equipments: [
      "Canon R Series Camera (Photography)",
      "Sony Alpha Series (Cinematic Video)",
      "DJI Mini 4 Pro Drone",
    ],
    events: [
      "Engagement + Wedding + All Rituals",
      "1 Premium Album (30 Pages, 160–200 Photos)",
      "All Raw Data (Provided in Pen Drive)",
      "Engagement & Wedding Cinematic Videos",
      "Cinematic Highlights + Reels",
      "Mehandi Video Coverage",
    ],
    icon: <FaStar className="text-3xl text-amber-500" />,
  },
  {
    title: "Platinum Package",
    highlight: "For Grand & Luxurious Weddings",
    team: [
      "2 Photographers",
      "2 Cinematographers",
      "1 Assistant",
      "1 Drone Operator",
    ],
    equipments: [
      "Canon R Series Camera (Photography)",
      "Sony Alpha Series (Cinematic Video)",
      "DJI Mini 4 Pro Drone",
    ],
    events: [
      "Engagement + Wedding + All Rituals",
      "1 Premium Album (30 Pages, 200–250 Photos)",
      "All Raw Data (Provided in Pen Drive)",
      "Engagement & Wedding Cinematic Films",
      "Cinematic Highlights + Reels",
      "Wedding Traditional Video",
    ],
    icon: <GiDeliveryDrone className="text-3xl text-amber-500" />,
  },
];

export default function Offerings() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      {/* Background */}
      <img
        src="/images/offerings-bg.jpg"
        alt="Wedding Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient from-black via-black/85 to-transparent"></div>

      {/* Section Heading */}
      <ScrollReveal>
        <div className="relative z-10 text-center mb-16 px-6">
          <h2 className="text-5xl font-playfair font-semibold text-amber-500 mb-6">
            Our Wedding Packages
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            “Capturing Moments, Creating Memories.”  
            At{" "}
            <span className="text-amber-500 font-medium">
              Digambar Bailkar Photography
            </span>
            , we bring cinematic artistry and timeless storytelling to every
            wedding we capture.
          </p>
        </div>
      </ScrollReveal>

      {/* Packages Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-zinc-900/70 backdrop-blur-md border border-gray-800 rounded-3xl p-10 flex flex-col justify-between shadow-lg hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-500 group"
          >
            <div>
              {/* Icon & Title */}
              <div className="flex flex-col items-center mb-6">
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-500">
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-semibold text-amber-500">
                  {pkg.title}
                </h3>
                <p className="text-gray-400 text-sm italic">
                  {pkg.highlight}
                </p>
                <div className="h-[2px] w-16 bg-amber-500/70 mt-3"></div>
              </div>

              {/* Details */}
              <div className="space-y-5 text-gray-300">
                <div>
                  <p className="text-amber-400 font-semibold mb-1">Team</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {pkg.team.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-amber-400 font-semibold mb-1">Equipments</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {pkg.equipments.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-amber-400 font-semibold mb-1">
                    Events Covered
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {pkg.events.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Link
                to="/contact"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-amber-500/30"
              >
                Contact for Price & Booking
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 mt-20 text-center text-gray-400 italic px-6"
      >
        <p>
          “Every wedding is a story — let’s make yours unforgettable through our
          lens.”
        </p>
      </motion.div>
    </section>
  );
}
