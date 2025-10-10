"use client";

import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800">
      <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo-dark.png"
            alt="SL Smart Repair logo"
            className="h-14 w-auto sm:h-16 block dark:hidden"
          />
          <img
            src="/logo.png"
            alt="SL Smart Repair logo (dark)"
            className="h-14 w-auto sm:h-16 hidden dark:block"
          />
          <span className="sr-only">SL Smart Repair</span>
        </a>

        {/* Center Nav (desktop ≥1024px only) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-base text-gray-600 dark:text-gray-300 lg:flex">
          <li>
            <HashLink smooth to="/#services" className="hover:text-[#D40000] transition-colors">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Why-Choose-Us" className="hover:text-[#D40000] transition-colors">
              Why Choose Us
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#portfolio" className="hover:text-[#D40000] transition-colors">
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Testimonials" className="hover:text-[#D40000] transition-colors">
              Testimonials
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="hover:text-[#D40000] transition-colors">
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Right: Theme Toggle + CTA + Hamburger */}
        <div className="flex items-center gap-2">

          {/* CTA visible from tablet upward */}
          <HashLink
            smooth
            to="/#contact"
            className="hidden md:inline-block rounded-xl px-4 py-2 text-sm font-semibold text-white bg-black hover:opacity-90 dark:bg-white dark:text-black"
          >
            Get Quote
          </HashLink>

          {/* Hamburger (only <1024px) */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-12 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute block h-0.5 w-7 bg-black dark:bg-white transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-7 bg-black dark:bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-7 bg-black dark:bg-white transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (<1024px) */}
      <div
        className={`${open ? "block" : "hidden"} lg:hidden border-b border-gray-200 dark:border-neutral-800`}
      >
        <div className="mx-auto px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-2">
            {[
              { to: "/#services", label: "Services" },
              { to: "/#Why-Choose-Us", label: "Why Choose Us" },
              { to: "/#portfolio", label: "Portfolio" },
              { to: "/#Testimonials", label: "Testimonials" },
              { to: "/#contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li key={to}>
                <HashLink
                  smooth
                  to={to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-[#D40000] hover:bg-gray-50 dark:hover:bg-neutral-900"
                >
                  {label}
                </HashLink>
              </li>
            ))}
          </ul>

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block w-full rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white bg-black hover:opacity-90 dark:bg-white dark:text-black"
          >
            Get Quote
          </HashLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
