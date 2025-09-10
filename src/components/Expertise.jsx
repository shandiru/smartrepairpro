import React from "react";
import { FiSettings, FiUser, FiTruck, FiAward } from "react-icons/fi";

const points = [
  { id: 1, icon: FiSettings, text: "Firefighter by Trade – Serving the community with dedication and pride." },
  { id: 2, icon: FiUser, text: "Complimentary Car Wash – Every vehicle leaves looking as good as it runs." },
  { id: 3, icon: FiTruck, text: "Customer Gift Pack – A little thank-you to make your visit extra special." },
  { id: 4, icon: FiAward, text: "Home-Based Workshop – Always on call… whether it’s the fire station or your motor misbehaving." },
];

export default function Expertise({
  imageSrcs = ["wash-1.jpeg","wash-2.jpeg","wash-3.jpeg","wash-4.jpeg","wash-5.jpeg","wash-6.jpeg","wash-7.jpeg","wash-8.jpeg","wash-9.jpeg","wash-10.jpeg"],
  secondsPerImage = 4,
  gapPx = 16,
  slideHeight = { base: 240, md: 320, lg: 380 }, // px heights per breakpoint
}) {
  const n = imageSrcs.length || 1;

  return (
    <section className="w-full py-12 bg-white dark:bg-neutral-900" id="always-ready">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: continuous auto-scroller with fixed height */}
          <div
            className="relative overflow-hidden rounded-lg group"
            style={{ "--gap": `${gapPx}px` }}
          >
            {/* Fixed-height frame (prevents jumpiness) */}
            <div
              className="
                relative
                h-[var(--slide-h)]
                md:h-[var(--slide-h-md)]
                lg:h-[var(--slide-h-lg)]
              "
              style={{
                // set CSS vars for responsive heights
                "--slide-h": `${slideHeight.base}px`,
                "--slide-h-md": `${slideHeight.md}px`,
                "--slide-h-lg": `${slideHeight.lg}px`,
                margin: "0 calc(var(--gap) * -1)",
              }}
            >
              {/* Track */}
              <div
                className="flex h-full will-change-transform"
                style={{
                  "--n": n,
                  "--dur": `${n * secondsPerImage}s`,
                  animation: "wastrip var(--dur) linear infinite",
                }}
              >
                {[...imageSrcs, ...imageSrcs].map((src, i) => (
                  <div
                    key={i}
                    className="w-full flex-[0_0_100%] h-full"
                    style={{ boxSizing: "border-box", padding: "0 var(--gap)" }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={`Slide ${i + 1}`}
                        className="block h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pause on hover */}
            <style jsx>{`
              .group:hover div[style*='wastrip'] {
                animation-play-state: paused;
              }
              @keyframes wastrip {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-100% * var(--n))); }
              }
            `}</style>
          </div>

          {/* Right: content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#D10806]">
  Always Ready, Always Nearby
</h2>

            <div className="mt-1 h-0.5 w-14 bg-red-500" />
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-2xl">
              There are times when the fire station calls, and I need to be ready in an instant.
              That’s why I work from home — staying close means I can respond quickly, while still
              giving your car the care and attention it deserves.
            </p>

            <ul className="mt-8 divide-y divide-gray-200 dark:divide-neutral-800 border-t border-b border-gray-200 dark:border-neutral-800">
              {points.map(({ id, icon: Icon, text }) => (
                <li key={id} className="flex items-start gap-4 py-5">
                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-red-200 text-red-500 dark:border-red-400 dark:text-red-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-base font-medium text-gray-900 dark:text-white">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
