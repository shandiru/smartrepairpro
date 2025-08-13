import React from "react";
import { FiSettings, FiUser, FiTruck, FiAward } from "react-icons/fi";

const points = [
  { id: 1, icon: FiSettings, text: "We're Experts" },
  { id: 2, icon: FiUser, text: "We are young talented certified engineers" },
  { id: 3, icon: FiTruck, text: "Fast Car Searvice" }, // keep text exactly like the mock
  { id: 4, icon: FiAward, text: "Our Best Workers" },
];

export default function WeAreTheBest({ imageSrc = "/images/wash.jpg" }) {
  return (
    <section className="w-full py-14 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: image */}
          <div className="overflow-hidden rounded">
            <img
              src={imageSrc}
              alt="Car wash"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right: content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              We Are The Best
            </h2>
            <div className="mt-2 h-1 w-16 bg-red-500" />

            <p className="mt-6 text-gray-500 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
              There are many variations of passages of Lorem Ipsum typesetting
              industry has been the industry's standard dummy text ever since the
              been when an unknown printer.
            </p>

            <ul className="mt-10 divide-y divide-gray-200 dark:divide-neutral-800 border-t border-b border-gray-200 dark:border-neutral-800">
              {points.map(({ id, icon: Icon, text }) => (
                <li key={id} className="flex items-center gap-5 py-6">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-md border border-red-200 text-red-500 dark:border-red-400 dark:text-red-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
