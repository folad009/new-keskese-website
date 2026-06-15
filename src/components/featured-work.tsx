"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { KESKESE_IMAGES } from "@/lib/visual-assets";
import PopHeading from "@/components/pop-heading";
import "swiper/css";
import "swiper/css/free-mode";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Neon Horizons",
    client: "Global Tech Brand",
    category: "Immersive Installation",
    year: "2025",
    color: "from-violet-600/40 to-fuchsia-600/40",
    image: KESKESE_IMAGES[0],
    description: "A 360° sensory experience spanning 4 cities",
  },
  {
    title: "Urban Pulse",
    client: "Leading Sports Brand",
    category: "Brand Activation",
    year: "2025",
    color: "from-orange-600/40 to-red-600/40",
    image: KESKESE_IMAGES[1],
    description: "Street culture meets athletic performance",
  },
  {
    title: "Sound Garden",
    client: "Premium Audio Brand",
    category: "Pop-Up Experience",
    year: "2024",
    color: "from-emerald-600/40 to-teal-600/40",
    image: KESKESE_IMAGES[2],
    description: "An interactive garden of sound & nature",
  },
  {
    title: "Future Forum",
    client: "Fortune 500 Company",
    category: "Event Production",
    year: "2024",
    color: "from-blue-600/40 to-cyan-600/40",
    image: KESKESE_IMAGES[3],
    description: "A 3-day summit reimagining the future of work",
  },
  {
    title: "Taste Lab",
    client: "Global F&B Brand",
    category: "Experiential Campaign",
    year: "2024",
    color: "from-amber-600/40 to-yellow-600/40",
    image: KESKESE_IMAGES[4],
    description: "Multi-sensory dining across 8 cities",
  },
  {
    title: "Glow Trail",
    client: "Energy Drink Brand",
    category: "Festival Activation",
    year: "2023",
    color: "from-lime-600/40 to-green-600/40",
    image: KESKESE_IMAGES[5],
    description: "An illuminated trail at 12 global festivals",
  },
  {
    title: "Digital Canvas",
    client: "Luxury Fashion House",
    category: "Digital Experience",
    year: "2023",
    color: "from-pink-600/40 to-rose-600/40",
    image: KESKESE_IMAGES[6],
    description: "AR-powered fashion showcase",
  },
  {
    title: "Wave Runner",
    client: "Automotive Giant",
    category: "Launch Event",
    year: "2023",
    color: "from-sky-600/40 to-indigo-600/40",
    image: KESKESE_IMAGES[7],
    description: "Electric vehicle launch experienced by 50K+ people",
  },
];

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="work" data-scroll data-scroll-class="is-inview" className="py-10 sm:py-12 lg:py-14">
      <div className="max-w-495 mx-auto page-x mb-8 sm:mb-12">
        <div className="work-heading flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
          <PopHeading as="h2" className="heading-section">
            <PopHeading.Line inline>Featured</PopHeading.Line>{" "}
            <PopHeading.Line inline className="text-gradient">
              Work
            </PopHeading.Line>
          </PopHeading>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={1.2}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 3.5 },
        }}
        className="px-4! sm:px-6! lg:px-12!"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="group cursor-pointer" data-cursor="card">
              <div
                className={`relative aspect-3/4 rounded-2xl overflow-hidden bg-linear-to-br ${project.color} mb-4`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/30 via-black/10 to-black/40 group-hover:from-black/20 transition-colors duration-500" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent">
                  <p className="text-white/60 text-sm mb-1">{project.client}</p>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
