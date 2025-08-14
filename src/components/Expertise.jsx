import React from "react";
import { FiSettings, FiUser, FiTruck, FiAward } from "react-icons/fi";

const points = [
  {
    id: 1,
    icon: FiSettings,
    text: "Firefighter by Trade – Serving the community with dedication and pride.",
  },
  {
    id: 2,
    icon: FiUser,
    text: "Complimentary Car Wash – Every vehicle leaves looking as good as it runs.",
  },
  {
    id: 3,
    icon: FiTruck,
    text: "Customer Gift Pack – A little thank-you to make your visit extra special.",
  },
  {
    id: 4,
    icon: FiAward,
    text: "Home-Based Workshop – Always on call… whether it’s the fire station or your motor misbehaving.",
  },
];

export default function Expertise({
  imageSrcs = ["wash.png", "wash.png", "wash.png"],
  secondsPerImage = 4,
  gapPx = 16,
}) {
  const n = imageSrcs.length || 1;

  return (
    <section className="w-full py-12 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: continuous auto-scroller */}
          <div
            className="relative overflow-hidden rounded-lg group"
            style={{ "--gap": `${gapPx}px` }}
          >
            <div className="relative" style={{ margin: "0 calc(var(--gap) * -1)" }}>
              <div
                className="flex will-change-transform"
                style={{
                  "--n": n,
                  "--dur": `${n * secondsPerImage}s`,
                  animation: "wastrip var(--dur) linear infinite",
                }}
              >
                {[...imageSrcs, ...imageSrcs].map((src, i) => (
                  <div
                    key={i}
                    className="w-full flex-[0_0_100%]"
                    style={{
                      boxSizing: "border-box",
                      padding: "0 var(--gap)",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Slide ${i + 1}`}
                      className="h-full w-full object-cover rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              .group:hover div[style*='wastrip'] {
                animation-play-state: paused;
              }
              @keyframes wastrip {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% * var(--n)));
                }
              }
            `}</style>
          </div>

          {/* Right: content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
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
                  <p className="text-base font-medium text-gray-900 dark:text-white">
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
