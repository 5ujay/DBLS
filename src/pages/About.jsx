import { FaCamera, FaUsers, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-24 px-6 flex flex-col items-center justify-center">
      {/* Background */}
      <img
        src="/images/about/about.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair text-amber-500 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The creative minds behind{" "}
            <span className="text-amber-500 font-semibold">
              LensFlair Studio
            </span>{" "}
            — where passion meets art.
          </p>
        </div>

        {/* Founders Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Founder */}
          <div className="flex flex-col items-center text-center space-y-6">
            <img
              src="/images/about/profile-aboutus-1.jpg"
              alt="Digambar Bailkar"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg border-2 border-gray-700"
            />
            <div>
              <h3 className="text-3xl font-semibold text-amber-500">
                Digambar Bailkar
              </h3>
              <p className="text-gray-300 mb-3">
                Founder & Lead Photographer
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
                A passionate photographer from Kolhapur, India, Digambar has
                spent over 3 years capturing weddings, portraits, and events
                that tell real human stories. His vision combines cinematic
                emotion with natural beauty, crafting timeless frames full of
                life and soul.
              </p>
            </div>
          </div>

          {/* Co-Founder */}
          <div className="flex flex-col items-center text-center space-y-6">
            <img
              src="/images/about/profile-aboutus-2.jpg"
              alt="Co-Founder"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg border-2 border-gray-700"
            />
            <div>
              <h3 className="text-3xl font-semibold text-amber-500">
                Avadhut Bailkar
              </h3>
              <p className="text-gray-300 mb-3">
                Co-Founder & Creative Director
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
                With a sharp eye for aesthetics and storytelling, the Co-Founder
                brings creative direction, design sense, and a deep love for
                visual art. Together, they lead a team dedicated to creating
                beautiful and meaningful photography experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mt-16">
          <div className="space-y-2">
            <FaCamera className="text-3xl text-amber-500 mx-auto" />
            <p className="text-gray-200 font-semibold">100+ Projects</p>
            <span className="text-gray-400 text-sm">
              Weddings • Events • Portraits
            </span>
          </div>

          <div className="space-y-2">
            <FaUsers className="text-3xl text-amber-500 mx-auto" />
            <p className="text-gray-200 font-semibold">10+ Team Members</p>
            <span className="text-gray-400 text-sm">
              Photographers • Editors • Creators
            </span>
          </div>

          <div className="space-y-2">
            <FaAward className="text-3xl text-amber-500 mx-auto" />
            <p className="text-gray-200 font-semibold">3+ Years</p>
            <span className="text-gray-400 text-sm">
              Professional Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
