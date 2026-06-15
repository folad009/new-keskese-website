"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  href: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Brand Activations",
    href: "/services/brand-activations",
    description:
      "Beyond defining the immediate opportunity, audience and objectives, we dig deeper. We strive to understand your brand positioning, company culture, overall marketing strategies and tactics.",
    image: "/images/keskese-web-1.jpg",
  },
  {
    title: "Event Experience Production",
    href: "/services/event-production",
    description:
      "We take time to come up with creative concepts, which we implement using processes and assets necessary to the event to reality. Logistics are mapped, staff is readied, the program is launched and tactics are executed.",
    image: "/images/keskese-web-2.jpg",
  },
  {
    title: "Brand Exhibitions",
    href: "/services/immersive-installations",
    description:
      "Showcase your brand in style with our brand exhibitions. From design to execution, we create visually stunning exhibitions that highlight your brand's uniqueness. Our team specializes in designing and executing exhibitions.",
    image: "/images/keskese-web-3.jpg",
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const els = containerRef.current.querySelectorAll(".svc-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || "0");
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleFlip = (index: number) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setFlippedIndex((current) => (current === index ? null : index));
    }
  };

  return (
    <section
      ref={containerRef}
      id="services"
      data-scroll
      data-scroll-class="is-inview"
      className="py-10 sm:py-12 lg:py-16 bg-card"
    >
      <div className="max-w-495 mx-auto page-x">
        <div
          className="svc-animate flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16"
          style={{
            opacity: 0,
            transform: "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
          data-delay="0"
        >
          <h2 className="heading-section">
            Our <span className="text-gradient">Services</span>
          </h2>
          <Link
            href="/services/brand-activations"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={service.title}
                className={`svc-animate svc-flip group h-[22rem] sm:h-[24rem] ${isFlipped ? "is-flipped" : ""}`}
                style={{
                  opacity: 0,
                  transform: "translateY(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
                data-delay={String(0.1 + index * 0.1)}
                onClick={() => handleFlip(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleFlip(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${service.title} service card. ${isFlipped ? "Showing details" : "Flip to see details"}`}
              >
                <div className="svc-flip-inner relative h-full w-full">
                  {/* Front */}
                  <div
                    data-cursor="card"
                    className="svc-flip-face svc-flip-front absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl border border-border transition-colors duration-500 group-hover:border-primary/30"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/10" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                      <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/60 [@media(hover:hover)_and_(pointer:fine)]:block hidden">
                        Hover to explore
                      </p>
                      <p className="text-sm text-white/60 [@media(hover:hover)_and_(pointer:fine)]:hidden">
                        Tap to explore
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <Link
                    href={service.href}
                    className="svc-flip-face svc-flip-back absolute inset-0 flex flex-col justify-between rounded-xl sm:rounded-2xl border border-primary/30 bg-background p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(176,42,118,0.08)] transition-colors duration-500 hover:border-primary/50"
                    onClick={(event) => {
                      if (
                        !window.matchMedia("(hover: hover) and (pointer: fine)")
                          .matches &&
                        !isFlipped
                      ) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <p className="text-base sm:text-lg text-foreground/55 leading-relaxed">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-primary">
                      Learn more
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
