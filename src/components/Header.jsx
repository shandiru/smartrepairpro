import React from "react";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="
      py-20
      bg-gradient-to-b from-gray-100 to-white
      dark:from-neutral-950 dark:to-neutral-900
    ">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          Professional Smart Repair Services
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Expert automotive repair solutions that restore your vehicle to perfect
          condition. From scratches to dents, we make it look like it never happened.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <a
            href="#services"
            className="
              inline-flex items-center justify-center gap-2 px-6 py-3
              bg-black text-white hover:opacity-90
              dark:bg-white dark:text-black dark:hover:opacity-90
              font-semibold rounded-md transition
            "
          >
            View Our Services
            <FiArrowRight className="text-lg" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#quote"
            className="
              inline-flex items-center justify-center gap-2 px-6 py-3
              border border-gray-300 bg-white text-gray-700 hover:bg-gray-100
              dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800
              font-semibold rounded-md transition
            "
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
