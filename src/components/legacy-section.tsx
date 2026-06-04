"use client";

import { useRef, useEffect } from "react";
import { Award, Trophy, Star, Crown } from "lucide-react";
import Image from "next/image";

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
    <section ref={containerRef} className="py-10 lg:py-16">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Award-Winning
              <br />
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-white leading-relaxed max-w-2xl">
              Our work has been recognized by The Experiential Marketers
              Association of Nigeria (EXMAN). Every award represents a project
              where we pushed the boundaries of what experiential marketing can
              achieve.
            </p>
          </div>

          {/* Stats sidebar */}
          <div
            className="aw-animate flex flex-row lg:flex-col gap-6 lg:gap-8"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
            data-delay="0.2"
          >
            <div className="flex-1 bg-card border border-border rounded-2xl p-6 lg:p-8 text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-1">
                {totalAwards}+
              </p>
              <p className="text-xs text-white uppercase tracking-wider">
                Awards Won
              </p>
            </div>
            <div className="flex-1 bg-card border border-border rounded-2xl p-6 lg:p-8 text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-1">
                3x
              </p>
              <p className="text-xs text-white uppercase tracking-wider">
                Agency of the Year
              </p>
            </div>
            <div className="flex-1 bg-card border border-border rounded-2xl p-6 lg:p-8 text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-1">
                7
              </p>
              <p className="text-xs text-white uppercase tracking-wider">
                Award Bodies
              </p>
            </div>
          </div>
        </div>

        {/* Awards timeline */}
        <div className="space-y-4">
          {awards.map((yearGroup, yi) => (
            <div
              key={yearGroup.year}
              className="aw-animate"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
              data-delay={String(0.1 + yi * 0.08)}
            >
              {/* Year header row */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl lg:text-4xl font-bold text-foreground/10">
                  {yearGroup.year}
                </span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-foreground/20">
                  {yearGroup.items.length} award
                  {yearGroup.items.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Award cards for this year */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
                {yearGroup.items.map((award, ai) => {
                  const Icon = award.icon;
                  const colorClass =
                    orgLogos[award.org] || "bg-primary/10 text-primary";
                  return (
                    <div
                      key={ai}
                      className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-500 cursor-default"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          data-cursor="icon"
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${colorClass}`}
                        >
                          <Icon className="w-4 h-4 group-hover:stroke-[2.5] transition-all duration-300" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">
                            {award.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs text-foreground/30 font-medium">
                        {award.org}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom recognition strip */}
        <div
          className="aw-animate mt-16 border border-border rounded-2xl p-6 lg:p-8 bg-card"
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
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <Image
              src="/images/exman-logo-keskese.png"
              alt="Exman logo"
              width={300}
              height={150}
            
            />
            <Image
              src="/images/ises-logo-keskese.png"
              alt="ISES logo"
              width={300}
              height={150}
             
             
            />
          </div>
        </div>
      </div>
    </section>
  );
}
