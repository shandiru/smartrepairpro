// src/components/Navbar.jsx
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
          {/* Icon: swap by theme */}
          <img
            src="/logo-dark.jpg"
            alt="SmartRepair Pro logo"
            className="h-7 w-auto sm:h-8 block dark:hidden"
          />
          <img
            src="/logo.png"
            alt="SmartRepair Pro logo (dark)"
            className="h-7 w-auto sm:h-8 hidden dark:block"
          />

          {/* Wordmark: swap by theme (if you have it). 
              If not, delete these 2 <img> and keep the <span> fallback below. */}
          <img
            src="/logoname.png"
            alt=""
            aria-hidden="true"
            className="h-5 w-auto hidden sm:block dark:hidden"
          />
          <img
            src="/logoname-dark.png"
            alt=""
            aria-hidden="true"
            className="h-5 w-auto hidden sm:block dark:block"
          />

          {/* Accessible name fallback (keeps good a11y even if using images) */}
          <span className="sr-only">SmartRepair Pro</span>
        </a>

        {/* Center: Nav (desktop only) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-lg text-gray-600 dark:text-gray-300 lg:flex">
          <li><a href="#services" className="transition-colors hover:text-black dark:hover:text-white">Services</a></li>
          <li><a href="#about" className="transition-colors hover:text-black dark:hover:text-white">About</a></li>
          <li><a href="#contact" className="transition-colors hover:text-black dark:hover:text-white">Contact</a></li>
        </ul>

        {/* Right: Theme toggle(s) + CTA + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme toggle (mobile) */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>

          {/* Theme toggle (desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <a
            href="#quote"
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
            <span className={`absolute block h-0.5 w-7 bg-black dark:bg-white transition-transform duration-300 ${open ? "translate-y-0 rotate-45" : "-translate-y-2"}`} />
            <span className={`absolute block h-0.5 w-7 bg-black dark:bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute block h-0.5 w-7 bg-black dark:bg-white transition-transform duration-300 ${open ? "translate-y-0 -rotate-45" : "translate-y-2"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${open ? "block" : "hidden"} lg:hidden border-b border-gray-200 dark:border-neutral-800`}>
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-2">
            <li><a href="#services" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-neutral-900">Services</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-neutral-900">About</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-neutral-900">Contact</a></li>
          </ul>

          <a
            href="#quote"
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
