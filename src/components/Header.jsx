import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="py-20 relative">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-142">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#D10806" }}>
          Professional Smart Repair Services
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Expert automotive repair solutions that restore your vehicle to perfect condition. From scratches to dents, we make it look like it never happened.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-md transition hover:opacity-90"
            style={{ backgroundColor: "#D10806" }}
          >
            View Our Services
            <FiArrowRight className="text-lg" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3
            border border-gray-300 bg-white text-gray-700 hover:bg-gray-100
            dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800
            font-semibold rounded-md transition"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
