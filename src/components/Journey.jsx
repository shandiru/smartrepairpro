import React from "react";
import { FaCar, FaCog, FaFileAlt } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose SmartRepair Pro?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Item 1 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-200 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700">
              <FaCar className="text-2xl text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Expert Technicians
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              Certified professionals with years of experience in automotive repair
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-200 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700">
              <FaCog className="text-2xl text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Advanced Techniques
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              State-of-the-art equipment and proven repair methods
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-200 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700">
              <FaFileAlt className="text-2xl text-black dark:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Quality Guarantee
            </h3>
            <p className="text-gray-500 dark:text-gray-300">
              All work backed by our comprehensive warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
