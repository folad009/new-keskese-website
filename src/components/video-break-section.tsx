"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface VideoBreakSectionProps {
  compact?: boolean;
  eyebrow?: string;
  line1?: string;
  line2?: string;
  subtext?: string;
  videoSrc?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  showStats?: boolean;
  className?: string;
}

export default function VideoBreakSection({
  compact = false,
  eyebrow = "In Motion",
  line1 = "Where Brands",
  line2 = "Come Alive",
  subtext = "Immersive activations, live energy, and moments people feel — not just see.",
  videoSrc = STOCK_VIDEOS.crowd,
  primaryCta = { href: "/#work", label: "Explore Our Work" },
  secondaryCta = { href: "/contact", label: "Start a Project" },
  showStats = true,
  className = "",
}: VideoBreakSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scopeId = useRef(
    `vb-${Math.random().toString(36).slice(2, 9)}`,
  ).current;

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const lineSel = `.${scopeId}-line`;
      const subSel = `.${scopeId}-sub`;
      const ctaSel = `.${scopeId}-cta`;
      const mediaSel = `.${scopeId}-media`;

      if (prefersReducedMotion) {
        gsap.set([lineSel, subSel, ctaSel], { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        mediaSel,
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        lineSel,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        subSel,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            end: "top 30%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ctaSel,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 55%",
            end: "top 25%",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className={`relative left-1/2 w-screen -translate-x-1/2 my-8 lg:my-16 ${className}`}
      aria-label="Experiential showreel"
    >
      <div
        className={`relative overflow-hidden ${
          compact
            ? "h-[62vh] min-h-[420px] max-h-[640px]"
            : "h-[88vh] min-h-[560px] max-h-[920px]"
        }`}
      >
        <div
          className={`${scopeId}-media absolute inset-0 will-change-transform`}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/25 dark:bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/35 to-background/55 dark:from-background dark:via-background/20 dark:to-background/60" />
        <div className="absolute inset-0 bg-linear-to-r from-background/70 via-transparent to-background/70 dark:from-background/50 dark:to-background/50" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center lg:px-12">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span
              className={`${scopeId}-sub text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/60`}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className={`max-w-5xl font-bold leading-[0.95] tracking-tight ${
              compact
                ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            }`}
          >
            <span className={`${scopeId}-line block`}>{line1}</span>
            <span className={`${scopeId}-line block text-gradient whitespace-nowrap`}>
              {line2}
            </span>
          </h2>

          <p
            className={`${scopeId}-sub mt-6 max-w-xl text-base text-foreground/60 md:text-lg`}
          >
            {subtext}
          </p>

          <div
            className={`${scopeId}-cta mt-10 flex flex-col items-center gap-4 sm:flex-row`}
          >
            <Link
              href={primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
            >
              {primaryCta.label}
              <ArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-8 py-4 text-base font-medium text-foreground transition-all hover:border-primary hover:text-primary"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        {showStats && (
          <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/60 bg-background/80 backdrop-blur-sm dark:border-white/10 dark:bg-black/25">
            <div className="mx-auto grid max-w-360 grid-cols-3 divide-x divide-border/60 px-6 py-5 dark:divide-white/10 lg:px-12">
              {[
                { value: "360°", label: "Sensory Design" },
                { value: "Live", label: "Audience Energy" },
                { value: "Always", label: "On Brand" },
              ].map((item) => (
                <div key={item.label} className="px-3 text-center sm:px-6">
                  <p className="text-lg font-bold text-primary sm:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground/45 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
