import React, { useEffect, useMemo, useRef, useState, Fragment } from "react";
import { FiArrowRight, FiArrowLeft, FiX } from "react-icons/fi";
import { FaCar, FaLightbulb, FaHammer, FaCog, FaFileAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

// 📝 Example SERVICES data with unique IDs

const SERVICES = [
  {
    id: "scratches",
    title: "Scratches",
    icon: FaCar,
    blurb:
      "Professional scratch and scuff repair that restores your vehicle's original finish",
    beforeImg: "scratches-before.jpeg",
    afterImg: "scratches-after.jpeg",
    about:
      "Our advanced scratch repair techniques can handle everything from light surface scratches to deeper paint damage. We use color-matching technology and professional-grade compounds to restore your vehicle's finish to like-new condition.",
    steps: [
      "Assessment of damage depth and extent",
      "Surface preparation and cleaning",
      "Color matching and paint correction",
      "Polishing and protective coating application",
    ],
    gallery: [
      { before: "scratches-before.jpeg", after: "scratches-after.jpeg" },
      { before: "scratches-before-2.jpeg", after: "scratches-after-2.jpeg" },
      { before: "scratches-before-3.jpeg", after: "scratches-after-3.jpeg" },
      { before: "scratches-before-4.jpeg", after: "scratches-after-4.jpeg" },
      { before: "scratches-before-5.jpeg", after: "scratches-after-5.jpeg" },
      { before: "scratches-before-6.jpeg", after: "scratches-after-6.jpeg" },
      { before: "scratches-before-7.jpeg", after: "scratches-after-7.jpeg" },
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
    beforeImg: "dent-before-2.jpeg",
    afterImg: "dent-after-2.jpeg",
    about:
      "We provide professional dent repair to restore damaged panels to a like-new condition. Whether from minor knocks, car park damage or everyday accidents, our team carefully repairs the affected area and refinishes it so your vehicle looks flawless again.",
    steps: [
      " Damage Assessment",
      "Panel Repair & Preparation",
      "Priming & Painting",
      " Finishing & Quality Check",
    ],
    gallery: [
      { before: "dent-before.jpeg", after: "dent-after.jpeg" },
      { before: "dent-before-2.jpeg", after: "dent-after-2.jpeg" },
      { before: "dent-before-3.jpeg", after: "dent-after-3.jpeg" },
      { before: "dent-before-4.jpeg", after: "dent-after-4.jpeg" },
      { before: "dent-before-5.jpeg", after: "dent-after-5.jpeg" },
      { before: "dent-before-6.jpeg", after: "dent-after-6.jpeg" },
      { before: "dent-before-7.jpeg", after: "dent-after-7.jpeg" },
      { before: "dent-before-8.jpeg", after: "dent-after-8.jpeg" },
      { before: "dent-before-9.jpeg", after: "dent-after-9.jpeg" },
      { before: "dent-before-10.jpeg", after: "dent-after-10.jpeg" },
      { before: "dent-before-11.jpeg", after: "dent-after-11.jpeg" },
    ],
  },
  {
    id: "wheels",
    title: "Wheels & Calipers",
    icon: FaCog,
    blurb: "Complete wheel refurbishment and brake caliper restoration services",
    beforeImg: "wheels-before.jpeg",
    afterImg: "wheels-after.jpeg",
    about:
      "We specialise in making your wheels look as good as new. Our team carefully removes scratches, scuffs and marks before applying a high-quality paint finish. Whether your wheels have suffered from kerb damage or general wear, we restore their appearance and give them a fresh, clean look.",
    steps: [
      "Wheel removal and detailed inspection",
      "Scratch and kerb damage repair",
      "Surface preparation and priming",
      "Professional painting and finishing coat",
    ],
    gallery: [
      { before: "wheels-before.jpeg", after: "wheels-after.jpeg" },
      { before: "wheels-before-2.jpeg", after: "wheels-after-2.jpeg" },
      { before: "wheels-before-3.jpeg", after: "wheels-after-3.jpeg" },
      { before: "wheels-before-4.jpeg", after: "wheels-after-4.jpeg" },
      { before: "wheels-before-5.jpeg", after: "wheels-after-5.jpeg" },
      { before: "wheels-before-6.jpeg", after: "wheels-after-6.jpeg" },
      { before: "wheels-before-7.jpeg", after: "wheels-after-7.jpeg" },
      { before: "wheels-before-8.jpeg", after: "wheels-after-8.jpeg" },
    ],
  },

  /* Bumper Scuffs */
  {
    id: "bumper",
    title: "Bumper Scuffs",
    icon: FaCar,
    blurb:
      "Quick, seamless bumper scuff repairs that blend perfectly with your paintwork.",
    beforeImg: "scratches-before-8.jpeg",
    afterImg: "scratches-after-8.jpeg",
    about:
      "We repair bumper scuffs, scrapes and minor cracks using colour-matched refinishing to restore a factory look on-site. Most repairs are completed the same day without replacing panels.",
    steps: [
      "Clean, mask and assess paint damage",
      "Feather-edge sanding & filling (if needed)",
      "Colour-matched basecoat application",
      "Clearcoat blend & polish for a seamless finish",
    ],
    gallery: [
      { before: "scratches-before-8.jpeg", after: "scratches-after-8.jpeg" },
      { before: "scratches-before-9.jpeg", after: "scratches-after-9.jpeg" },
      { before: "scratches-before-10.jpeg", after: "scratches-after-10.jpeg" },
      { before: "scratches-before-11.jpeg", after: "scratches-after-11.jpeg" },
      { before: "scratches-before-12.jpeg", after: "scratches-after-12.jpeg" },
      { before: "scratches-before-13.jpeg", after: "scratches-after-13.jpeg" },
      { before: "scratches-before-14.jpeg", after: "scratches-after-14.jpeg" },
      { before: "scratches-before-15.jpeg", after: "scratches-after-15.jpeg" },
      { before: "scratches-before-16.jpeg", after: "scratches-after-16.jpeg" },
      { before: "scratches-before-17.jpeg", after: "scratches-after-17.jpeg" },
      { before: "scratches-before-18.jpeg", after: "scratches-after-18.jpeg" },
      { before: "scratches-before-19.jpeg", after: "scratches-after-19.jpeg" },
      { before: "scratches-before-20.jpeg", after: "scratches-after-20.jpeg" },
      { before: "scratches-before-21.jpeg", after: "scratches-after-21.jpeg" },
      { before: "scratches-before-22.jpeg", after: "scratches-after-22.jpeg" },
      { before: "scratches-before-23.jpeg", after: "scratches-after-23.jpeg" },
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
        { before: "dent-before.jpeg", after: "dent-after.jpeg" },
     
    
     { before: "scratches-before-4.jpeg", after: "scratches-after-4.jpeg" },
     
       { before: "dent-before-3.jpeg", after: "dent-after-3.jpeg" },
        { before: "scratches-before-5.jpeg", after: "scratches-after-5.jpeg" },
      { before: "dent-before-4.jpeg", after: "dent-after-4.jpeg" },
         { before: "scratches-before-2.jpeg", after: "scratches-after-2.jpeg" },
   //    { before: "scratches-before-16.jpeg", after: "scratches-after-16.jpeg" },
        { before: "dent-before-2.jpeg", after: "dent-after-2.jpeg" },
     
      { before: "scratches-before-17.jpeg", after: "scratches-after-17.jpeg" },
      
    ],
  },
];


const byId = (arr, id) => arr.find((s) => s.id === id) || null;

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration of 1000ms
  }, []);

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  const modalSliderSettings = {
    dots: false,
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
    <section id="services" className="py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl" style={{ color: "#D10806" }}>
            Our Expert Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-300">
            Click on any service to see amazing before and after transformations
          </p>
        </div>

        {/* Service cards with unique IDs */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const cardPreview = service.gallery?.[0]?.before || service.beforeImg || "/placeholder.svg?height=300&width=400";

            return (
              <article
                key={service.id}
                id={service.id}
                onClick={() => setActiveId(service.id)}
                className="group flex cursor-pointer flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-neutral-900 dark:border-neutral-800"
                data-aos="fade-up"
                data-aos-delay="300" // Delay to stagger animations
              >
                <header className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800">
                    {Icon ? <Icon className="text-black dark:text-white" /> : null}
                  </span>
                  <h3 className="text-xl font-semibold" style={{ color: "#D10806" }}>
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
                  <span className="absolute left-2 top-2 inline-flex w-fit items-center justify-center rounded-md bg-[#D10806] px-2 py-0.5 text-xs font-semibold text-white">
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
          <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" onClick={() => setActiveId(null)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-title"
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-2xl dark:bg-neutral-950"
            data-aos="fade-in" // Apply fade-in animation to modal
          >
            <div className="flex items-start justify-between gap-4 border-b px-6 py-5 border-gray-200 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 dark:bg-neutral-800">
                  {active.icon ? (() => {
                    const Icon = active.icon;
                    return <Icon className="text-black dark:text-white" />;
                  })() : null}
                </span>
                <h2 id="service-title" className="text-2xl font-semibold" style={{ color: "#D10806" }}>
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

            <div ref={dialogRef} tabIndex={-1} className="max-h-[80vh] overflow-y-auto px-6 py-6 focus:outline-none">
              <p className="text-lg text-gray-600 dark:text-gray-300">{active.blurb}</p>

              <div className="mt-6 relative">
                <Slider {...modalSliderSettings}>
                  {(active.gallery && active.gallery.length > 0
                    ? active.gallery
                    : [{ before: active.beforeImg, after: active.afterImg }]).map((pair, idx) => (
                    <div key={idx} className="px-2">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 text-base md:text-lg font-semibold" style={{ color: "#D10806" }}>
                            Before
                          </h3>
                          <div className="rounded-2xl h-[320px] md:h-[360px] flex items-center justify-center p-3 bg-gray-50 dark:bg-neutral-900">
                            <img src={pair.before} alt={`${active.title} — before`} className="h-full w-64 object-cover rounded-lg" loading="lazy" />
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-2 text-base md:text-lg font-semibold text-green-600 dark:text-green-400">
                            After
                          </h3>
                          <div className="rounded-2xl h-[320px] md:h-[360px] flex items-center justify-center p-3 bg-gray-50 dark:bg-neutral-900">
                            <img src={pair.after} alt={`${active.title} — after`} className="h-full w-64 object-cover rounded-lg" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="mt-6 rounded-lg bg-gray-100/70 dark:bg-neutral-900 p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">About This Service</h3>
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

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="flex-1 inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Get Quote for This Service
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center rounded-md border border-[#D10806] bg-[#D10806] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
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