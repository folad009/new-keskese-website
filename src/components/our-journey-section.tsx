"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const timeline = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "Founded in a small studio in East London by two creatives who believed marketing should be felt, not just seen. Our first activation — a pop-up sensory lab for an indie skincare brand — got 10,000 visitors in 3 days.",
  },
  {
    year: "2019",
    title: "First Major Client",
    description:
      "Landed our first Fortune 500 client with a city-wide scavenger hunt activation that generated 2M+ social impressions. Opened our first proper office and grew the team to 15.",
  },
  {
    year: "2020",
    title: "Pivoting Through Adversity",
    description:
      "When live events went dark, we pioneered hybrid and fully digital experiential formats. Launched our Digital Experiences division and delivered 40+ virtual activations.",
  },
  {
    year: "2021",
    title: "Expanding Horizons",
    description:
      "Opened our New York studio. Won Agency of the Year at the Experiential Marketing Awards. Team grew to 60 people across two continents.",
  },
  {
    year: "2022",
    title: "Going Global",
    description:
      "Launched our Los Angeles studio. Delivered activations in 8 countries. Introduced our proprietary Impact Measurement Framework™ — bringing data rigour to experiential.",
  },
  {
    year: "2023",
    title: "Record-Breaking Year",
    description:
      "100th activation milestone. Won 15 industry awards including 3 Cannes Lions. Named #1 Experiential Agency by Campaign Magazine. Revenue crossed $25M.",
  },
  {
    year: "2024",
    title: "Innovation & Scale",
    description:
      "Opened our Tokyo studio for APAC expansion. Launched the Immersive Lab — an R&D unit for spatial computing and AI-driven experiences. Team surpassed 120 people.",
  },
  {
    year: "2025",
    title: "The Future Is Now",
    description:
      "200+ activations delivered. 50M+ people reached. 50+ awards won. Today we stand at the intersection of creativity, technology, and human connection — and we're just getting started.",
  },
];

export default function OurJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      gsap.from(".journey-heading", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      if (prefersReducedMotion) {
        gsap.from(".journey-item", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
        return;
      }

      gsap.to(".journey-heading", {
        y: -72,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".journey-glow", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".journey-line", {
        scaleY: 1.08,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".journey-item").forEach((item, index) => {
        const card = item.querySelector(".journey-card");
        const marker = item.querySelector(".journey-marker");
        const yearBg = item.querySelector(".journey-year-bg");

        gsap.from(item, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });

        const cardShift = index % 2 === 0 ? -48 : -72;
        const markerShift = -28 - (index % 3) * 8;
        const yearShift = index % 2 === 0 ? -100 : -140;

        if (card) {
          gsap.to(card, {
            y: cardShift,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        if (marker) {
          gsap.to(marker, {
            y: markerShift,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        if (yearBg) {
          gsap.to(yearBg, {
            y: yearShift,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="journey-section relative section-y-lg bg-card overflow-hidden"
    >
      <div
        className="journey-glow pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-360 mx-auto page-x">
        <h2 className="journey-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16 lg:mb-20">
          Our
          <br />
          <span className="text-gradient">Journey</span>
        </h2>

        <div className="journey-track relative">
          <div
            className="journey-line absolute left-6.75 top-0 bottom-0 w-px bg-linear-to-b from-primary/40 via-border to-primary/20 lg:left-1/2 lg:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-16 lg:space-y-24">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`journey-item timeline-item relative flex items-start gap-8 lg:gap-16 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse lg:text-right"
                }`}
              >
                <span
                  className={`journey-year-bg pointer-events-none absolute top-1/2 -translate-y-1/2 select-none text-[clamp(4rem,12vw,9rem)] font-bold leading-none text-primary/6 ${
                    index % 2 === 0
                      ? "right-0 lg:right-auto lg:left-[8%]"
                      : "left-0 lg:left-auto lg:right-[8%]"
                  }`}
                  aria-hidden
                >
                  {item.year}
                </span>

                <div className="hidden lg:block lg:w-1/2" />

                <div className="journey-marker absolute left-0 lg:left-1/2 lg:-translate-x-1/2 shrink-0 z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/40 bg-background shadow-[0_0_24px_rgba(176,42,118,0.15)]">
                    <span className="text-xs font-bold text-primary">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="ml-20 lg:ml-0 lg:w-1/2">
                  <div
                    className={`journey-card bg-background border border-border rounded-2xl p-6 lg:p-8 shadow-sm transition-colors hover:border-primary/30 ${
                      index % 2 !== 0 ? "lg:mr-12" : "lg:ml-12"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/40 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
