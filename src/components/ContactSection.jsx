import React from "react";

const HOURS = [
  { day: "Monday", time: "9:00 am – 5:00 pm" },
  { day: "Tuesday", time: "9:00 am – 6:00 pm" },
  { day: "Wednesday", time: "9:00 am – 6:00 pm" },
  { day: "Thursday", time: "9:00 am – 6:00 pm" },
  { day: "Friday", time: "9:00 am – 6:00 pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactSection() {
  return (
    <section className="bg-gray-50 dark:bg-neutral-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-2xl md:text-3xl font-bold"
          style={{ color: "#D10806" }}
        >
          Ready to Get Your Car Fixed?
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          Contact us to schedule a mobile repair service, ask questions, or
          request a quote. Our team is ready to help.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Information */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 md:p-8 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h3>

            <div className="mt-4 space-y-6 text-gray-600 dark:text-gray-300">
              {/* Address */}
              <div>
                <p className="font-medium dark:text-gray-200">Address</p>
                <address className="not-italic">
                  Leicester, Wigston LE18 3WJ
                </address>
              </div>

              {/* Phone */}
              <div>
                <p className="font-medium dark:text-gray-200">Phone</p>
                <a
                  href="tel:+447989668752"
                  style={{ color: "#D10806" }}
                  className="hover:underline"
                >
                  07989 668752
                </a>
                <div className="mt-1">
                  <a
                    href="https://wa.me/447989668752"
                    style={{ color: "#D10806" }}
                    className="hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <p className="font-medium dark:text-gray-200">Opening Hours</p>
                <ul className="mt-2 divide-y divide-gray-200 dark:divide-neutral-700 border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                  {HOURS.map(({ day, time }) => (
                    <li
                      key={day}
                      className="grid grid-cols-2 gap-4 px-4 py-2 text-sm md:text-base"
                    >
                      <span className="text-gray-700 dark:text-gray-200">
                        {day}
                      </span>
                      <span className="text-right font-medium text-gray-900 dark:text-gray-100">
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow p-6 md:p-8 transition-colors duration-300">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#D10806" }}
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#D10806" }}
              />
              <input
                type="tel"
                placeholder="07989 668752"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#D10806" }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Car Registration"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#D10806" }}
                />
                <input
                  type="text"
                  placeholder="Make and Model"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#D10806" }}
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "#D10806" }}
                />
              </div>

              <textarea
                placeholder="Tell us about your car issue"
                rows="4"
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": "#D10806" }}
              ></textarea>

              <button
                type="submit"
                className="w-full text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition"
                style={{ backgroundColor: "#D10806" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
