import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t dark:border-neutral-800 py-8">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Top Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/logo-dark.png"
                alt="SL Smart Repair logo"
                className="h-6 w-auto block dark:hidden"
              />
              <img
                src="/logo.png"
                alt="SL Smart Repair logo (dark)"
                className="h-6 w-auto hidden dark:block"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                SL Smart Repair
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
              Professional automotive repair services that restore your vehicle
              to perfect condition.
            </p>

            {/* Socials */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/S.LValetingDetailingServices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/sl_smart_repair/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Services (add padding-start for balance) */}
          <div className="ps-0 md:ps-18 lg:ps-0">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Services
            </h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-300">
              <li>
                <a
                  href="#scratches"
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Scratches
                </a>
              </li>
              <li>
                <a
                  href="#headlights"
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Headlight Restoration
                </a>
              </li>
              <li>
                <a
                  href="#dent"
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Dent Removal
                </a>
              </li>
              <li>
                <a
                  href="#wheels"
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Wheels &amp; Calipers
                </a>
              </li>
              <li>
                <a
                  href="#lease"
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Lease Returns
                </a>
              </li>
              <li>
                <a
                  href="#bumper"
                  className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  Bumper Scuffs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-300">
              <li>
                Phone:{" "}
                <a
                  href="tel:07989668752"
                  className="hover:text-gray-700 dark:hover:text-gray-200 hover:underline"
                >
                  07989 668752
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:Sldetailingservices@gmail.com"
                  className="hover:text-gray-700 dark:hover:text-gray-200 hover:underline"
                >
                  Sldetailingservices@gmail.com
                </a>
              </li>
              <li>
                Address:{" "}
                <a
                  href="https://www.google.com/maps/dir//Leicester,+Wigston+LE18+3WJ,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700 dark:hover:text-gray-200 hover:underline"
                >
                  30 Laxton Close, Leicester Wigston LE18 3WJ
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours (add padding-start for balance) */}
          <div className="ps-0 md:ps-18 lg:ps-0">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Hours
            </h3>
            <ul className="space-y-2 text-gray-500 dark:text-gray-300">
              <li>Monday: 9 AM – 5 PM</li>
              <li>Tuesday: 9 AM – 6 PM</li>
              <li>Wednesday: 9 AM – 6 PM</li>
              <li>Thursday: 9 AM – 6 PM</li>
              <li>Friday: 9 AM – 6 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t dark:border-neutral-800 pt-8 text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} SL Smart Repair. All rights reserved.
          <span className="mx-1">|</span>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#D10806" }}
          >
            Ansely
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
