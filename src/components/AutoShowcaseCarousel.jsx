// src/components/AutoShowcaseCarousel.jsx
// React + Tailwind + Swiper (no dots). Dark/Light modes. Black/White/Red palette.
// Improved zoom effect on hover.

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CARS = [
  {
    id: "c1-lambo-2024",
    brand: "Lamborghini",
    year: "2024",
    title: "Huracán Performante",
    subtitle: "Full Ceramic Coat • Stage 2 Paint Correction",
    img: "/C1.jpeg",
    badge: "Best Restoration 2024",
    
  },
  {
    id: "c2-ferrari-2023",
    brand: "Ferrari",
    year: "2023",
    title: "488 GTB",
    subtitle: "Showroom Detail • Interior Deep Clean • PPF Refresh",
    img: "/C2.jpeg",
    badge: "Editor’s Pick",
   
  },
  {
    id: "c3-porsche-2023",
    brand: "Porsche",
    year: "2023",
    title: "911 Turbo S",
    subtitle: "Performance Upgrade • Alloy Decontamination",
    img: "/C3.jpeg",
    badge: null,
   
  },
  {
    id: "c4-mclaren-2022",
    brand: "McLaren",
    year: "2022",
    title: "720S",
    subtitle: "Two-Stage Polish • Ceramic Pro • Glass Coating",
    img: "/C4.jpeg",
    badge: "Award Finalist 2024",
   
  },
  {
    id: "c5-aston-2021",
    brand: "Aston Martin",
    year: "2021",
    title: "Vantage",
    subtitle: "Swirl Removal • Leather Rejuvenation • Sealant",
    img: "/C5.jpeg",
    badge: null,
    
  },
  {
    id: "c6-bmw-2020",
    brand: "BMW",
    year: "2020",
    title: "M4 Competition",
    subtitle: "Track Prep • Brake Dust Treatment • Trim Restore",
    img: "/C6.jpeg",
    badge: null,
   
  },
  {
    id: "c7-mercedes-2022",
    brand: "Mercedes-AMG",
    year: "2022",
    title: "GT R Pro",
    subtitle: "Stage 1 Correction • Wheel Ceramic • Engine Bay",
    img: "/C7.jpeg",
    badge: "Client Favorite",
   
  },
  {
    id: "c8-audi-2021",
    brand: "Audi",
    year: "2021",
    title: "RS7",
    subtitle: "PPF Front Package • Ceramic Topper • Interior",
    img: "/C8.jpeg",
    badge: null,
   
  },
  {
    id: "c9-nissan-2020",
    brand: "Nissan",
    year: "2020",
    title: "GT-R",
    subtitle: "Paint Correction • Hydrophobic Glass • Exhaust Polish",
    img: "/C9.jpeg",
    badge: null,
   
  },
  {
    id: "c10-toyota-2021",
    brand: "Toyota",
    year: "2021",
    title: "GR Supra",
    subtitle: "Decon Wash • Clay • One-Step Polish • Sealant",
    img: "/C10.jpeg",
    badge: null,
    
  },
  {
    id: "c11-bugatti-2019",
    brand: "Bugatti",
    year: "2019",
    title: "Chiron",
    subtitle: "Concours-Level Finish • Premium Ceramic System",
    img: "/C11.jpeg",
    badge: "Concours Ready",
   
  },
  {
    id: "c12-bentley-2020",
    brand: "Bentley",
    year: "2020",
    title: "Continental GT",
    subtitle: "Luxury Interior Spa • Chrome Polish • Sealant",
    img: "/C12.jpeg",
    badge: null,
   
  },
  {
    id: "c13-rolls-2018",
    brand: "Rolls-Royce",
    year: "2018",
    title: "Wraith",
    subtitle: "Multi-Stage Refinement • Leather Feed • Protection",
    img: "/C13.jpeg",
    badge: null,
   
  },
  {
    id: "c14-corvette-2022",
    brand: "Chevrolet",
    year: "2022",
    title: "Corvette C8",
    subtitle: "Track Wash • Tar Removal • Ceramic Top Coat",
    img: "/C14.jpeg",
    badge: null,
   
  },
  {
    id: "c15-acura-2021",
    brand: "Acura",
    year: "2021",
    title: "NSX",
    subtitle: "Two-Bucket Wash • DA Polish • Glass Ceramic",
    img: "/C15.jpeg",
    badge: "Staff Pick",
   
  },
  {
    id: "c16-maserati-2019",
    brand: "Maserati",
    year: "2019",
    title: "MC20",
    subtitle: "Full Paint Correction • PPF Track Kit • Wheel Coat",
    img: "/C16.jpeg",
    badge: null,
   
  },
];


// ----- Tag pill -----
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-300/70 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 dark:border-zinc-600/60">
    {children}
  </span>
);

// ----- Card -----
const CarCard = ({ car }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
       
        <img
          src={car.img}
          alt={car.title}
          className="h-full w-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-95"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/0 transition-opacity duration-700 group-hover:opacity-70" />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Pill>{car.brand}</Pill>
          <Pill>{car.year}</Pill>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {car.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          {car.subtitle}
        </p>

        
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
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="nav-next absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-zinc-300 bg-white/90 p-2 shadow backdrop-blur transition hover:scale-105 hover:bg-white dark:border-zinc-700 dark:bg-zinc-800/90"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
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
            <SwiperSlide key={car.id}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
