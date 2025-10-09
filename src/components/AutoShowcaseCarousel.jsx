import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CARS = [
  { id: "c1-aston-dbs", brand: "Aston Martin", title: "DBS Superleggera", subtitle: "Bumper Scuff Repair • Colour-Matched Respray", img: "/C1.jpeg" },
  { id: "c2-ariel-atom", brand: "Ariel", title: "Atom", subtitle: "Alloy Wheel Refurbishment • Kerb Damage Repair", img: "/C2.jpeg" },
  { id: "c3-bentley-gt", brand: "Bentley", title: "Continental GT", subtitle: "Headlight Restoration • UV Protection", img: "/C3.jpeg" },
  { id: "c4-rolls-phantom", brand: "Rolls-Royce", title: "Phantom", subtitle: "Dent Removal • Panel Refinishing", img: "/C4.jpeg" },
  { id: "c5-aston-vantage", brand: "Aston Martin", title: "Vantage Roadster", subtitle: "Scratch Removal • Bumper Repair", img: "/C5.jpeg" },
  { id: "c6-ferrari-296", brand: "Ferrari", title: "296 GTB", subtitle: "Scratch Repair • Scratch Removal", img: "/C6.jpeg" },
  { id: "c7-bentley-gtc", brand: "Bentley", title: "Continental GTC", subtitle: "Dent Removal • Panel Respray", img: "/C7.jpeg" },
  { id: "c8-mercedes-sl63", brand: "Mercedes-Benz", title: "SL 63 AMG", subtitle: "Alloy Refurbishment • Scuff Removal", img: "/C8.jpeg" },
  { id: "c9-vauxhall-vx220", brand: "Vauxhall", title: "VX220", subtitle: "Scratch Repair • Headlight Restoration", img: "/C9.jpeg" },
  { id: "c10-porsche-911", brand: "Porsche", title: "911 Carrera (991)", subtitle: "Dent Repair • Panel Respray", img: "/C10.jpeg" },
  { id: "c11-ford-mustang", brand: "Ford", title: "Mustang Convertible (S197)", subtitle: "Alloy Refurbishment • Scratch Repair", img: "/C11.jpeg" },
  { id: "c12-mclaren-720s", brand: "McLaren", title: "720S Spider", subtitle: "Scratch Removal • Alloy Refurbishment", img: "/C12.jpeg" },
  { id: "c13-ford-escort", brand: "Ford", title: "Escort XR3i", subtitle: "Bumper Scuff Repair • Dent Removal", img: "/C13.jpeg" },
  { id: "c14-rolls-wraith", brand: "Rolls-Royce", title: "Wraith", subtitle: "Alloy Wheel Repair • Scratch Removal", img: "/C14.jpeg" },
  { id: "c15-ferrari-roma", brand: "Ferrari", title: "Roma", subtitle: "Alloy Refurbishment • Dent Removal", img: "/C15.jpeg" },
  { id: "c16-porsche-macan", brand: "Porsche", title: "Macan", subtitle: "Dent Removal • Panel Respray", img: "/C16.jpeg" },
];

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-300/70 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 dark:border-zinc-600/60">
    {children}
  </span>
);

const CarCard = ({ car }) => {
  return (
    <article className="group grid h-full grid-rows-[auto,1fr] overflow-hidden rounded-2xl border shadow-lg hover:shadow-red-600/40 active:shadow-red-600/40 border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 transition">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={car.img}
          alt={car.title}
          className="h-full w-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-95"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/0 transition-opacity duration-700 group-hover:opacity-70" />
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-2 flex items-center gap-2">
          <Pill>{car.brand}</Pill>
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 min-h-[28px]">
          {car.title}
        </h3>
        <p className="mt-1 text-zinc-600 text-sm dark:text-zinc-300 min-h-[40px]">
          {car.subtitle}
        </p>
        <div className="mt-auto" />
      </div>
    </article>
  );
};

export default function AutoShowcaseCarousel({
  title = "Luxury Automotive Excellence",
  kbd = "Award-Winning Craftsmanship",
  description = `Discover our portfolio of meticulously crafted automotive masterpieces. Each project represents our commitment to perfection and passion for luxury vehicles.`,
  items = CARS,
}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      id="portfolio"
    >
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

      <div className="relative mt-10">
        {/* Left Navigation */}
        <button
          className="nav-prev absolute -left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border cursor-pointer border-zinc-300 bg-white/90 p-2 shadow backdrop-blur transition hover:scale-110 hover:bg-zinc-100 hover:shadow-red-500/40 dark:border-zinc-700 dark:bg-zinc-800/90 dark:hover:bg-zinc-700 dark:hover:shadow-red-500/30 focus-visible:ring-2 focus-visible:ring-red-500/40"
          aria-label="Previous"
        >
          <FiChevronLeft className="h-5 w-5 text-zinc-800 dark:text-zinc-100 hover:-translate-x-2 active:-translate-x-2 duration-300 transform" />
        </button>

        {/* Right Navigation */}
        <button
          className="nav-next absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border cursor-pointer border-zinc-300 bg-white/90 p-2 shadow backdrop-blur transition hover:scale-110 hover:bg-zinc-100 hover:shadow-red-500/40 dark:border-zinc-700 dark:bg-zinc-800/90 dark:hover:bg-zinc-700 dark:hover:shadow-red-500/30 focus-visible:ring-2 focus-visible:ring-red-500/40"
          aria-label="Next"
        >
          <FiChevronRight className="h-5 w-5 text-zinc-800 dark:text-zinc-100 hover:translate-x-2 active:translate-x-2 duration-300 transform" />
        </button>

        {/* Swiper */}
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
