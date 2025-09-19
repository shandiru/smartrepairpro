// src/components/AutoShowcaseCarousel.jsx
// React + Tailwind + Swiper (no dots). Dark/Light modes. Black/White/Red palette.
// Improved zoom effect + equal height cards.

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CARS = [
  {
    id: "c1-aston-dbs",
    brand: "Aston Martin",
    title: "DBS Superleggera",
    subtitle: "Stage-2 Paint Correction • Ceramic Coat • Wheel Protection",
    img: "/C1.jpeg",
  },
  {
    id: "c2-ariel-atom",
    brand: "Ariel",
    title: "Atom",
    subtitle:
      "Lightweight Track Prep • Ceramic Protection • Performance Detail",
    img: "/C2.jpeg",
  },
  {
    id: "c3-bentley-gt",
    brand: "Bentley",
    title: "Continental GT",
    subtitle: "Luxury Detail • Alloy Decontamination • Ceramic Coat",
    img: "/C3.jpeg",
  },
  {
    id: "c4-rolls-phantom",
    brand: "Rolls-Royce",
    title: "Phantom",
    subtitle:
      "Executive Detailing • Leather Rejuvenation • Ceramic Protection",
    img: "/C4.jpeg",
  },
  {
    id: "c5-aston-vantage",
    brand: "Aston Martin",
    title: "Vantage Roadster",
    subtitle: "Swirl Removal • Leather Rejuvenation • Ceramic Sealant",
    img: "/C5.jpeg",
  },
  {
    id: "c6-ferrari-296",
    brand: "Ferrari",
    title: "296 GTB",
    subtitle: "Paint Protection Film • Ceramic Coating • Wheel Detailing",
    img: "/C6.jpeg",
  },
  {
    id: "c7-bentley-gtc",
    brand: "Bentley",
    title: "Continental GTC",
    subtitle: "Convertible Detailing • Paint Enhancement • Interior Spa",
    img: "/C7.jpeg",
  },
  {
    id: "c8-mercedes-sl63",
    brand: "Mercedes-Benz",
    title: "SL 63 AMG",
    subtitle: "Convertible Detailing • PPF Front End • Interior Deep Clean",
    img: "/C8.jpeg",
  },
  {
    id: "c9-vauxhall-vx220",
    brand: "Vauxhall",
    title: "VX220",
    subtitle: "Full Paint Correction • Glass Protection • Track-Ready Detail",
    img: "/C9.jpeg",
  },
  {
    id: "c10-porsche-911",
    brand: "Porsche",
    title: "911 Carrera (991)",
    subtitle:
      "Decon Wash • Clay Treatment • One-Step Polish • Ceramic Sealant",
    img: "/C10.jpeg",
  },
  {
    id: "c11-ford-mustang",
    brand: "Ford",
    title: "Mustang Convertible (S197)",
    subtitle:
      "American Muscle Detail • Paint Enhancement • Interior Protection",
    img: "/C11.jpeg",
  },
  {
    id: "c12-mclaren-720s",
    brand: "McLaren",
    title: "720S Spider",
    subtitle: "Exotic Supercar Detail • Ceramic Coating • Glass Protection",
    img: "/C12.jpeg",
  },
  {
    id: "c13-ford-escort",
    brand: "Ford",
    title: "Escort XR3i",
    subtitle:
      "Classic Restoration • Multi-Stage Paint Correction • Interior Revival",
    img: "/C13.jpeg",
  },
  {
    id: "c14-rolls-wraith",
    brand: "Rolls-Royce",
    title: "Wraith",
    subtitle: "Multi-Stage Polish • Leather Treatment • Ceramic Top Coat",
    img: "/C14.jpeg",
  },
  {
    id: "c15-ferrari-roma",
    brand: "Ferrari",
    title: "Roma",
    subtitle:
      "Gloss Enhancement • Ceramic Protection • Luxury Interior Detail",
    img: "/C15.jpeg",
  },
  {
    id: "c16-porsche-macan",
    brand: "Porsche",
    title: "Macan",
    subtitle: "Luxury SUV Detail • Paint Correction • Ceramic Wheel Coat",
    img: "/C16.jpeg",
  },
];

// ----- Tag pill -----
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-300/70 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 dark:border-zinc-600/60" >
    {children}
  </span>
);

// ----- Card -----
const CarCard = ({ car }) => {
  return (
    <article className="group grid h-full grid-rows-[auto,1fr] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900" >
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={car.img}
          alt={car.title}
          className="h-full w-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-95"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/0 transition-opacity duration-700 group-hover:opacity-70" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Pill>{car.brand}</Pill>
        </div>

        {/* keep card height uniform */}
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 min-h-[28px]">
          {car.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 min-h-[40px]">
          {car.subtitle}
        </p>

        <div className="mt-auto" />
      </div>
    </article>
  );
};

// ----- Section (Title + Swiper) -----
export default function AutoShowcaseCarousel({
  title = "Luxury Automotive Excellence",
  kbd = "Award-Winning Craftsmanship",
  description = `Discover our portfolio of meticulously crafted automotive masterpieces. Each project represents our commitment to perfection and passion for luxury vehicles.`,
  items = CARS,
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="portfolio">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[11px] font-semibold text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
          {kbd}
        </span>
        <h2 className="mt-4 text-4xl font-extrabold leading-tight text-zinc-900 dark:text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-10">
        {/* Custom arrows */}
        <button
          className="nav-prev absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-300 bg-white/90 p-2 shadow backdrop-blur transition hover:scale-105 hover:bg-white dark:border-zinc-700 dark:bg-zinc-800/90"
          aria-label="Previous"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="nav-next absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-300 bg-white/90 p-2 shadow backdrop-blur transition hover:scale-105 hover:bg-white dark:border-zinc-700 dark:bg-zinc-800/90"
          aria-label="Next"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".nav-prev", nextEl: ".nav-next" }}
          slidesPerView={1}
          spaceBetween={24}
          speed={700}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-2"
        >
          {items.map((car) => (
            <SwiperSlide key={car.id} className="!h-auto">
              <div className="h-full">
                <CarCard car={car} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
