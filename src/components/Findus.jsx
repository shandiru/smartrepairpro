"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  const directionsUrl =
    "https://www.google.com/maps/dir//Leicester,+Wigston+LE18+3WJ,+United+Kingdom/@52.584005,-1.1724066,16933m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x4877668bb0745d0f:0xc4b6954416f42302!2m2!1d-1.0900064!2d52.5840336?entry=ttu";

  return (
    <section
      className="py-10 px-4 bg-white dark:bg-black transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-black dark:text-red-500"
          data-aos="fade-down"
        >
          Find Us
        </h2>

        {/* Google Maps Embed */}
        <div
          className="rounded-lg overflow-hidden shadow-lg w-full h-[400px]"
          data-aos="zoom-in"
        >
          <iframe
            title="Google Map - Leicester Wigston"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39445.183139890146!2d-1.128!3d52.584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877668bb0745d0f%3A0xc4b6954416f42302!2sLeicester%2C%20Wigston%20LE18%203WJ%2C%20United%20Kingdom!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Address */}
        <p
          className="mt-6 text-lg font-medium text-gray-800 dark:text-gray-300"
          data-aos="fade-up"
        >
          <strong>SL Smart Repair</strong>,<br />
          30 Laxton Close,<br />
          Leicester Wigston LE18 3WJ, United Kingdom
        </p>

        {/* Directions Button */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="100">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps directions to Leicester Wigston"
            className="inline-flex items-center gap-2 rounded-md 
                       bg-black text-white px-5 py-3 text-sm md:text-base font-semibold 
                       hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600
                       dark:bg-red-600 dark:text-black dark:hover:bg-red-700 dark:focus:ring-red-500"
          >
            Open Directions in Google Maps
            <svg
              className="h-4 w-4 md:h-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h6m0 0v6m0-6L10 16"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
