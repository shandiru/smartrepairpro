// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t dark:border-neutral-800 py-14">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo.png" // swap to a light logo in dark mode if needed
                alt="SmartRepair Pro"
                className="h-6 w-auto"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                SmartRepair Pro
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
              Professional automotive repair services that restore your vehicle to
              perfect condition.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-300">
              <li>Scratches &amp; Scuffs</li>
              <li>Headlight Restoration</li>
              <li>Dent Removal</li>
              <li>Wheels &amp; Calipers</li>
              <li>Lease Returns</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-300">
              <li>
                Phone:{" "}
                <a
                  href="tel:5551234567"
                  className="hover:text-gray-700 dark:hover:text-gray-200"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@smartrepairpro.com"
                  className="hover:text-gray-700 dark:hover:text-gray-200"
                >
                  info@smartrepairpro.com
                </a>
              </li>
              <li>Address: 123 Repair St, City, State</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Hours</h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-300">
              <li>Mon–Fri: 8AM – 6PM</li>
              <li>Saturday: 9AM – 4PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t dark:border-neutral-800 pt-8 text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} SmartRepair Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
