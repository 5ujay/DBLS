import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        playsInline
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          isPlaying ? "opacity-100" : "opacity-60"
        }`}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-playfair mb-6 leading-tight">
          Capturing <span className="text-amber-500">Life’s Essence</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
          At <span className="text-amber-500 font-medium">StudioLens</span>, we craft timeless
          visual stories through light, emotion, and artistry.
        </p>

        {/* Play / Pause Button */}
        <button
          onClick={handlePlayPause}
          className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl shadow-lg transition duration-300 ${
            isPlaying
              ? "bg-amber-500 text-black hover:bg-amber-400"
              : "bg-amber-500 text-black hover:bg-amber-400 animate-pulse-glow"
          }`}
        >
          {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
        </button>
      </div>

      {/* Gradient for cinematic depth */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* Custom Animation Style */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.4),
              0 0 40px rgba(251, 191, 36, 0.1);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.6),
              0 0 60px rgba(251, 191, 36, 0.2);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
