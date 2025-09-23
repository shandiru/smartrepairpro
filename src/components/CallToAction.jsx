import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const CallToAction = ({
  phone = "07989668752",
  telHref = "tel:07989668752",
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration of 1000ms and animations will only trigger once
  }, []);

  return (
    <section className="w-full bg-gray-50 text-gray-900 dark:bg-[#171717] dark:text-white" data-aos="fade-up">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 text-center">
        <h2
          className="mb-3 text-3xl font-extrabold sm:text-4xl"
          style={{ color: "#D10806" }}
        >
          Ready to Restore Your Vehicle?
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-base sm:text-xl text-gray-600 dark:text-white/80">
          Get a free quote today, secure your booking with a deposit, and experience the SL Smart Repair difference.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="300">
          {/* Filled button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold shadow-sm transition text-white hover:opacity-90"
            style={{ backgroundColor: "#D10806" }}
          >
            Get Free Quote
          </a>

          {/* Outlined button */}
          <a
            href={telHref}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold transition
                       border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white
                       dark:border-white/80 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Call Now: {phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
