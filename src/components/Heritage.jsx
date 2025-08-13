import React, { useEffect, useMemo, useRef, useState, Fragment } from "react";
import { FiArrowRight, FiArrowLeft, FiX } from "react-icons/fi";
import { FaCar, FaLightbulb, FaHammer, FaCog, FaFileAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * ServicesWithModal (dark-mode ready)
 * - Card grid of services
 * - Click a card to open a modal
 * - In the modal: BEFORE & AFTER side-by-side (desktop) / stacked (mobile)
 * - Slider for multiple pairs
 * - ESC to close, overlay click to close, scroll lock while open
 *
 * NOTE: Replace image paths with yours. Each service supports many before/after pairs via `gallery`.
 */

const SERVICES = [
  {
    id: "scratches",
    title: "Scratches & Scuffs",
    icon: FaCar,
    blurb:
      "Professional scratch and scuff repair that restores your vehicle's original finish",
    beforeImg: "/images/services/scratches-before.jpg",
    afterImg: "/images/services/scratches-after.jpg",
    about:
      "Our advanced scratch repair techniques can handle everything from light surface scratches to deeper paint damage. We use color-matching technology and professional-grade compounds to restore your vehicle's finish to like-new condition.",
    steps: [
      "Assessment of damage depth and extent",
      "Surface preparation and cleaning",
      "Color matching and paint correction",
      "Polishing and protective coating application",
    ],
    gallery: [
      { before: "/images/services/scratches-before.jpg", after: "/images/services/scratches-after.jpg" },
      { before: "/images/services/scratches-before-2.jpg", after: "/images/services/scratches-after-2.jpg" },
      { before: "/images/services/scratches-before-3.jpg", after: "/images/services/scratches-after-3.jpg" },
    ],
  },
  {
    id: "headlights",
    title: "Head Light Restoration",
    icon: FaLightbulb,
    blurb:
      "Restore cloudy, yellowed headlights to crystal clear condition for improved visibility",
    beforeImg: "headlight-before.jpeg",
    afterImg: "headlight-after.jpeg",
    about:
      "Over time, headlights become cloudy and yellowed due to UV exposure and oxidation. Our restoration process removes the damaged outer layer and applies a protective coating to prevent future deterioration.",
    steps: [
      "Thorough cleaning and masking",
      "Progressive sanding to remove oxidation",
      "Polishing compound application",
      "UV protective coating for long-lasting clarity",
    ],
    gallery: [
      { before: "headlight-before.jpeg", after: "headlight-after.jpeg" },
      { before: "headlight-before-2.jpeg", after: "headlight-after-2.jpeg" },
      { before: "headlight-before-3.jpeg", after: "headlight-after-3.jpeg" },
      { before: "headlight-before-4.jpeg", after: "headlight-after-4.jpeg" },
      { before: "headlight-before-5.jpeg", after: "headlight-after-5.jpeg" },
      { before: "headlight-before-6.jpeg", after: "headlight-after-6.jpeg" },
    ],
  },
  {
    id: "dent",
    title: "Dent Removal",
    icon: FaHammer,
    blurb:
      "Paintless dent repair that maintains your vehicle's original factory finish",
    beforeImg: "/images/services/dent-before.jpg",
    afterImg: "/images/services/dent-after.jpg",
    about:
      "Our paintless dent repair (PDR) technique removes dents without the need for repainting. This method preserves your vehicle's original factory finish while being more cost-effective than traditional bodywork.",
    steps: [
      "Damage assessment and access planning",
      "Specialized tool positioning",
      "Gradual pressure application to restore shape",
      "Final inspection and quality check",
    ],
    gallery: [
      { before: "/images/services/dent-before.jpg", after: "/images/services/dent-after.jpg" },
      { before: "/images/services/dent-before-2.jpg", after: "/images/services/dent-after-2.jpg" },
    ],
  },
  {
    id: "wheels",
    title: "Wheels & Calipers",
    icon: FaCog,
    blurb: "Complete wheel refurbishment and brake caliper restoration services",
    beforeImg: "wheels-after.jpeg",
    afterImg: "wheels-before.jpeg",
    about:
      "We provide comprehensive wheel refurbishment including alloy wheel repair, powder coating, and brake caliper restoration. Our services handle curb damage, corrosion, and general wear to restore your wheels to perfect condition.",
    steps: [
      "Wheel removal and thorough inspection",
      "Damage repair and surface preparation",
      "Professional powder coating or painting",
      "Caliper cleaning and refinishing",
    ],
    gallery: [
      { before: "wheels-before.jpeg", after: "wheels-after.jpeg" },
      { before: "wheels-before-2.jpeg", after: "wheels-after-2.jpeg" },
      { before: "wheels-before-3.jpeg", after: "wheels-after-3.jpeg" },
      { before: "wheels-before-4.jpeg", after: "wheels-after-4.jpeg" },
      { before: "wheels-before-5.jpeg", after: "wheels-after-5.jpeg" },
    ],
  },
  {
    id: "lease",
    title: "Lease Returns",
    icon: FaFileAlt,
    blurb:
      "Comprehensive pre-return inspection and repair to avoid costly penalties",
    beforeImg: "/images/services/lease-before.jpg",
    afterImg: "/images/services/lease-after.jpg",
    about:
      "Returning a leased vehicle can result in expensive charges for wear and tear. Our lease return service addresses scratches, dents, wheel damage, and interior wear to help you avoid costly penalties.",
    steps: [
      "Pre-return vehicle inspection",
      "Identification of chargeable damage",
      "Cost-effective repair solutions",
      "Final quality assurance check",
    ],
    gallery: [
      { before: "/images/services/lease-before.jpg", after: "/images/services/lease-after.jpg" },
      { before: "/images/services/lease-before-2.jpg", after: "/images/services/lease-after-2.jpg" },
    ],
  },
];

const byId = (arr, id) => arr.find((s) => s.id === id) || null;

// Slider arrows
function Arrow({ onClick, direction }) {
  return (
    <button
      type="button"
      aria-label={direction === "next" ? "Next" : "Previous"}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-900 shadow p-2 ${
        direction === "next" ? "right-2" : "left-2"
      }`}
    >
      {direction === "next" ? (
        <FiArrowRight className="h-5 w-5 text-gray-900 dark:text-gray-100" />
      ) : (
        <FiArrowLeft className="h-5 w-5 text-gray-900 dark:text-gray-100" />
      )}
    </button>
  );
}

export default function ServicesWithModal() {
  const [activeId, setActiveId] = useState(null);
  const active = useMemo(() => byId(SERVICES, activeId), [activeId]);
  const dialogRef = useRef(null);

  // lock scroll when modal open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  // close on ESC + focus dialog
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActiveId(null);
    window.addEventListener("keydown", onKey);
    setTimeout(() => dialogRef.current?.focus(), 0);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const modalSliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
            Our Expert Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-300">
            Click on any service to see amazing before and after transformations
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const cardPreview =
              service.gallery?.[0]?.before ||
              service.beforeImg ||
              "/placeholder.svg?height=300&width=400";

            return (
              <article
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-neutral-900 dark:border-neutral-800"
              >
                <header className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800">
                    {Icon ? <Icon className="text-black dark:text-white" /> : null}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </header>

                <p className="text-gray-500 dark:text-gray-300">{service.blurb}</p>

                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={cardPreview}
                    alt={`${service.title} — preview before image`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="absolute left-2 top-2 inline-flex w-fit items-center justify-center rounded-md bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                    Before
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800"
                >
                  View Before & After
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <Fragment>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/50"
            aria-hidden="true"
            onClick={() => setActiveId(null)}
          />

          {/* Dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl dark:bg-neutral-950"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b px-6 py-5 border-gray-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 dark:bg-neutral-800">
                  {active.icon ? (() => { const Icon = active.icon; return <Icon className="text-black dark:text-white" />; })() : null}
                </span>
                <h2 id="service-title" className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {active.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveId(null)}
                className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-neutral-900 dark:hover:text-white"
                aria-label="Close"
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable content */}
            <div
              ref={dialogRef}
              tabIndex={-1}
              className="max-h-[80vh] overflow-y-auto px-6 py-6 focus:outline-none"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">{active.blurb}</p>

              {/* Slider: EACH SLIDE shows BEFORE & AFTER side-by-side on desktop */}
              <div className="mt-6 relative">
                <Slider {...modalSliderSettings}>
                  {(active.gallery && active.gallery.length > 0
                    ? active.gallery
                    : [{ before: active.beforeImg, after: active.afterImg }]
                  ).map((pair, idx) => (
                    <div key={idx} className="px-2">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* BEFORE */}
                        <div>
                          <h3 className="mb-2 text-base md:text-lg font-semibold text-red-600 dark:text-red-400">
                            Before
                          </h3>
                          <div className="rounded-2xl bg-gray-100 dark:bg-neutral-800 h-[320px] md:h-[360px] flex items-center justify-center p-3">
                            <img
                              src={pair.before || "/placeholder.svg?height=300&width=400"}
                              alt={`${active.title} — before`}
                              className="h-full w-64 object-cover rounded-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* AFTER */}
                        <div>
                          <h3 className="mb-2 text-base md:text-lg font-semibold text-green-600 dark:text-green-400">
                            After
                          </h3>
                          <div className="rounded-2xl bg-gray-100 dark:bg-neutral-800 h-[320px] md:h-[360px] flex items-center justify-center p-3">
                            <img
                              src={pair.after || "/placeholder.svg?height=300&width=400"}
                              alt={`${active.title} — after`}
                              className="h-full w-64 object-cover rounded-lg"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* About */}
              <div className="mt-6 rounded-lg bg-gray-100/70 dark:bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  About This Service
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{active.about}</p>

                {!!active.steps?.length && (
                  <>
                    <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Our Process:</h4>
                    <ul className="space-y-2">
                      {active.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 inline-flex min-w-6 justify-center rounded border px-2 text-xs font-medium border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-200">
                            {i + 1}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Get Quote for This Service
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-gray-100 dark:hover:bg-neutral-800"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
}
