import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

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
        {/* Left: Logo + Brand */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo-dark.png"
            alt="SL Smart Repair logo"
            className="h-16 w-auto sm:h-20 block dark:hidden"
          />
          <img
            src="/logo.png"
            alt="SL Smart Repair logo (dark)"
            className="h-16 w-auto sm:h-20 hidden dark:block"
          />

          {/* Wordmark: swap by theme */}
          <img
            src="/logoname.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto hidden sm:block dark:hidden"
          />
          <img
            src="/logoname-dark.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-auto hidden sm:block dark:block"
          />
          <span className="sr-only">SL Smart Repair</span>
        </a>

        {/* Center: Nav (desktop only) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-lg text-gray-600 dark:text-gray-300 lg:flex">
          <li>
            <a href="#services" className="transition-colors hover:text-[#D40000]">
              Services
            </a>
          </li>
          <li>
            <a href="#Why-Choose-Us" className="transition-colors hover:text-[#D40000]">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition-colors hover:text-[#D40000]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#Testimonials" className="transition-colors hover:text-[#D40000]">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-[#D40000]">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Toggles + CTA + Hamburger */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            className="hidden md:inline-block rounded-xl px-4 py-2 text-sm font-semibold text-white bg-black hover:opacity-90 dark:bg-white dark:text-black"
          >
            Get Quote
          </a>

          {/* Hamburger */}
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

      {/* Mobile drawer */}
      <div className={`${open ? "block" : "hidden"} lg:hidden border-b border-gray-200 dark:border-neutral-800`}>
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-[#D40000] hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Why-Choose-Us"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-[#D40000] hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-[#D40000] hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#Testimonials"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-[#D40000] hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:text-[#D40000] hover:bg-gray-50 dark:hover:bg-neutral-900"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block w-full rounded-2xl px-5 py-3 text-center text-sm font-semibold text-white bg-black hover:opacity-90 dark:bg-white dark:text-black"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
