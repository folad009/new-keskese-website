"use client";

import { useRef, useEffect } from "react";
import { Award, Trophy, Star, Crown } from "lucide-react";
import Image from "next/image";
import PopHeading from "@/components/pop-heading";

const awards = [
  {
    year: "2025",
    items: [
      { title: "Agency of the Year", org: "Campaign Magazine", icon: Crown },
      {
        title: "Gold — Best Experiential Campaign",
        org: "Cannes Lions",
        icon: Trophy,
      },
      {
        title: "Best Immersive Experience",
        org: "The Drum Awards",
        icon: Star,
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Grand Prix — Brand Activation",
        org: "Clio Awards",
        icon: Trophy,
      },
      {
        title: "Best Pop-Up Experience",
        org: "Event Marketer (Ex Awards)",
        icon: Award,
      },
      {
        title: "Innovation in Digital Experience",
        org: "Eventex Awards",
        icon: Star,
      },
      {
        title: "Agency of the Year — Shortlisted",
        org: "Campaign Magazine",
        icon: Crown,
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "Agency of the Year",
        org: "Global Experiential Awards",
        icon: Crown,
      },
      {
        title: "Gold — Best Event Production",
        org: "Cannes Lions",
        icon: Trophy,
      },
      { title: "Best Use of Technology", org: "The Drum Awards", icon: Star },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "Silver — Brand Experience", org: "Clio Awards", icon: Trophy },
      {
        title: "Best Festival Activation",
        org: "Event Marketer (Ex Awards)",
        icon: Award,
      },
      { title: "Creative Innovation Award", org: "Eventex Awards", icon: Star },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "Gold — Digital Activation", org: "Cannes Lions", icon: Trophy },
      {
        title: "Best Virtual Experience",
        org: "Global Experiential Awards",
        icon: Award,
      },
    ],
  },
  {
    year: "2020",
    items: [
      {
        title: "Best Pivot to Virtual",
        org: "Event Marketer (Ex Awards)",
        icon: Award,
      },
      {
        title: "Rising Agency of the Year",
        org: "The Drum Awards",
        icon: Crown,
      },
    ],
  },
];

const totalAwards = awards.reduce((sum, yr) => sum + yr.items.length, 0);

const orgLogos: Record<string, string> = {
  "Cannes Lions": "bg-amber-500/10 text-amber-400",
  "Clio Awards": "bg-sky-500/10 text-sky-400",
  "The Drum Awards": "bg-rose-500/10 text-rose-400",
  "Event Marketer (Ex Awards)": "bg-violet-500/10 text-violet-400",
  "Campaign Magazine": "bg-emerald-500/10 text-emerald-400",
  "Global Experiential Awards": "bg-orange-500/10 text-orange-400",
  "Eventex Awards": "bg-cyan-500/10 text-cyan-400",
};

export default function LegacySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const els = containerRef.current.querySelectorAll(".aw-animate");
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
      { threshold: 0.05 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} data-scroll data-scroll-class="is-inview" className="py-10 sm:py-12 lg:py-16">
      <div className="max-w-360 mx-auto page-x">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-20 mb-12 sm:mb-16 lg:mb-20">
          <div
            className="aw-animate lg:col-span-2"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
            data-delay="0"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              Recognition
            </p>
            <PopHeading as="h2" className="heading-section mb-4 sm:mb-6">
              <PopHeading.Line>Award-Winning</PopHeading.Line>
              <PopHeading.Line className="text-gradient">Excellence</PopHeading.Line>
            </PopHeading>
            <p className="text-base sm:text-lg text-foreground/50 leading-relaxed max-w-2xl">
              Our work has been recognized by The Experiential Marketers
              Association of Nigeria (EXMAN). Every award represents a project
              where we pushed the boundaries of what experiential marketing can
              achieve.
            </p>
          </div>

          {/* Stats sidebar */}
          <div
            className="aw-animate flex flex-row lg:flex-col gap-3 sm:gap-4 lg:gap-8"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
            data-delay="0.2"
          >
            <div className="flex-1 bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-1">
                {totalAwards}+
              </p>
              <p className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-wider">
                Awards Won
              </p>
            </div>
            <div className="flex-1 bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-1">
                3x
              </p>
              <p className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-wider">
                Agency of the Year
              </p>
            </div>
            <div className="flex-1 bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-1">
                7
              </p>
              <p className="text-[10px] sm:text-xs text-foreground/50 uppercase tracking-wider">
                Award Bodies
              </p>
            </div>
          </div>
        </div>

        
        {/* Bottom recognition strip */}
        <div
          className="aw-animate mt-10 sm:mt-16 border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 bg-card"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          data-delay="0.2"
        >
          <p className="text-xl uppercase tracking-[0.2em] text-foreground/25 mb-4 text-center font-bold">
            Recognized by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
            <Image
              src="/images/exman-logo-keskese.png"
              alt="Exman logo"
              width={300}
              height={150}
              className="h-30 sm:h-30 w-auto"
            />
            <Image
              src="/images/ises-logo-keskese.png"
              alt="ISES logo"
              width={300}
              height={150}
              className="h-30 sm:h-30 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
