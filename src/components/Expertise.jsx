import React, { useEffect, useState } from "react";
import {
  FiSettings,
  FiUser,
  FiTruck,
  FiAward,
  FiPause,
  FiPlay,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const points = [
  { id: 1, icon: FiSettings, text: "Firefighter by Trade – Serving the community with dedication and pride." },
  { id: 2, icon: FiUser, text: "Complimentary Car Wash – Every vehicle leaves looking as good as it runs." },
  { id: 3, icon: FiTruck, text: "Customer Gift Pack – A little thank-you to make your visit extra special." },
  { id: 4, icon: FiAward, text: "Home-Based Workshop – Always on Call Now with a comfortable waiting area while we fix your motor." },
];

export default function Expertise({
  imageSrcs = ["wash-1.jpeg", "wash-2.jpeg", "wash-3.jpeg", "wash-4.jpeg", "wash-5.jpeg","wash-6.jpeg","wash-7.jpeg","wash-8.jpeg","wash-9.jpeg","wash-10.jpeg", "wash-11.jpeg", "wash13.jpeg", "wash14.jpeg", "wash15.jpeg","wash12.jpeg"],
  secondsPerImage = 4,
  gapPx = 16,
  slideHeight = { base: 240, md: 320, lg: 380 },
}) {
  const n = imageSrcs.length || 1;

  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(secondsPerImage);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-12 bg-white dark:bg-neutral-900 relative overflow-hidden" id="Why-Choose-Us">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-32 h-32 md:w-40 md:h-40 bg-red-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-48 md:h-48 bg-red-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-red-500/3 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: Carousel */}
          <div
            className="relative overflow-hidden rounded-lg group"
            style={{ "--gap": `${gapPx}px` }}
            data-aos="fade-right"
          >
            <div
              className="relative h-[var(--slide-h)] md:h-[var(--slide-h-md)] lg:h-[var(--slide-h-lg)]"
              style={{
                "--slide-h": `${slideHeight.base}px`,
                "--slide-h-md": `${slideHeight.md}px`,
                "--slide-h-lg": `${slideHeight.lg}px`,
                margin: "0 calc(var(--gap) * -1)",
              }}
            >
              <div
                className="flex h-full will-change-transform"
                style={{
                  "--n": n,
                  "--dur": `${n * speed}s`,
                  animation: "wastrip var(--dur) linear infinite",
                  animationPlayState: paused ? "paused" : "running",
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

            {/* Controls */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/50 text-white px-4 py-2 rounded-full">
              <button onClick={() => setPaused(!paused)} className="hover:text-red-400">
                {paused ? <FiPlay size={18} /> : <FiPause size={18} />}
              </button>
              <button onClick={() => setSpeed((s) => Math.max(1, s - 1))} className="hover:text-red-400">
                <FiPlus size={18} />
              </button>
              <button onClick={() => setSpeed((s) => s + 1)} className="hover:text-red-400">
                <FiMinus size={18} />
              </button>
              <span className="text-xs">Speed: {speed}s</span>
            </div>

            <style jsx>{`
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

          {/* Right: Content */}
          <div data-aos="fade-left" data-aos-delay="300" className="relative">
            {/* Content glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none"></div>

            <div className="relative z-10">
              {/* Title glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#D10806] hover:text-red-600 transition-colors duration-300 relative z-10">
                Always Ready, Always Nearby
              </h2>
              <div className="mt-1 h-0.5 w-14 bg-red-500 hover:w-20 hover:shadow-red-500/50 transition-all duration-500 hover:shadow-sm rounded-full" />
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-2xl hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
              There are times when the fire station calls, and I need to be ready in an instant.
              That's why I work from home — staying close means I can respond quickly,
              while still giving your car the care and attention it deserves.
            </p>

            <ul className="mt-8 divide-y divide-gray-200 dark:divide-neutral-800 border-t border-b border-gray-200 dark:border-neutral-800 rounded-lg overflow-hidden">
              {points.map(({ id, icon: Icon, text }) => (
                <li
                  key={id}
                  className="flex items-start gap-4 py-5 px-4 hover:bg-gray-50/80 dark:hover:bg-neutral-700/50 transition-all duration-300 group/item relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={id * 200}
                >
                  {/* List item glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>

                  <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-md border border-red-200 text-red-500 dark:border-red-400 dark:text-red-400 bg-red-50 dark:bg-red-900/20 group-hover/item:scale-110 group-hover/item:shadow-lg group-hover/item:shadow-red-500/25 group-hover/item:border-red-300 dark:group-hover/item:border-red-300 transition-all duration-300 relative z-10">
                    <Icon className="h-5 w-5 group-hover/item:animate-pulse" />
                  </span>
                  <p className="text-base font-medium text-gray-900 dark:text-white group-hover/item:text-gray-700 dark:group-hover/item:text-gray-100 transition-colors duration-300 relative z-10">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wastrip {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% * var(--n)));
          }
        }
        
        @media (max-width: 768px) {
          .hover\\:scale-110:hover {
            transform: scale(1.05);
          }
          .group:hover {
            transform: scale(1.01);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .group:hover,
          .group-hover\\/item\\:scale-110,
          .hover\\:scale-110:hover,
          .group-hover\\/slide\\:scale-110 {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}