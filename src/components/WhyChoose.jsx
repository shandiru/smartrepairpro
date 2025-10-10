import React, { useEffect } from "react";
import { FaCar, FaCog, FaFileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardClasses =
    "text-center p-6 rounded-2xl shadow-md transition-all duration-300 transform bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(209,8,6,0.6)]";

  const iconWrapperClasses =
    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-200 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700";

  return (
    <section className="py-20 px-8 md:px-32 bg-white dark:bg-neutral-900">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#D10806" }}
          >
            Why Choose SL Smart Repair?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Item 1 */}
          <div className={cardClasses} data-aos="fade-up" data-aos-delay="300">
            <div className={iconWrapperClasses}>
              <FaCar className="text-2xl text-black dark:text-white" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#D10806" }}
            >
              Expert Hands You Can Trust
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              As a firefighter, protecting and helping people is in my nature —
              I bring that same dedication to every repair.
            </p>
          </div>

          {/* Item 2 */}
          <div className={cardClasses} data-aos="fade-up" data-aos-delay="500">
            <div className={iconWrapperClasses}>
              <FaCog className="text-2xl text-black dark:text-white" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#D10806" }}
            >
              Advanced Repair Techniques
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Using professional-grade tools and proven methods to deliver
              flawless results without unnecessary replacements.
            </p>
          </div>

          {/* Item 3 */}
          <div className={cardClasses} data-aos="fade-up" data-aos-delay="700">
            <div className={iconWrapperClasses}>
              <FaFileAlt className="text-2xl text-black dark:text-white" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#D10806" }}
            >
              Quality You Can Rely On
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Every job is backed by our satisfaction guarantee, because your
              car deserves nothing less than the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
