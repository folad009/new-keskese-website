/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, ArrowRight, ChevronRight, Plus, Minus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import PageShell from "@/components/page-shell";
import Link from "next/link";
import Image from "next/image";
import VideoBreakSection from "@/components/video-break-section";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface CaseStudy {
  title: string;
  client: string;
  result: string;
  color: string;
  image?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServicePageProps {
  label: string;
  headline: string[];
  gradientLine: number;
  intro: string;
  features: { title: string; description: string }[];
  process: ProcessStep[];
  caseStudies: CaseStudy[];
  faq: { question: string; answer: string }[];
  ctaText: string;
  accentGradient?: string;
}

export default function ServicePageLayout({
  label,
  headline,
  gradientLine,
  intro,
  features,
  process,
  caseStudies,
  faq,
  ctaText,
  accentGradient = "from-primary/5 via-transparent to-transparent",
}: ServicePageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [activeProcess, setActiveProcess] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero animations
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".svc-hero-badge", { y: -20, opacity: 0, duration: 0.6 })
        .from(
          ".svc-hero-line",
          { y: 120, opacity: 0, duration: 1.1, stagger: 0.1 },
          "-=0.3"
        )
        .from(".svc-hero-text", { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(
          ".svc-hero-cta",
          { y: 30, opacity: 0, scale: 0.95, duration: 0.6 },
          "-=0.4"
        )
        .from(
          ".svc-hero-scroll",
          { opacity: 0, y: 10, duration: 0.5 },
          "-=0.2"
        );
    },
    { scope: heroRef }
  );

  // Features stagger
  useGSAP(
    () => {
      gsap.from(".feat-item", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: featuresRef }
  );

  // Marquee parallax
  useGSAP(
    () => {
      gsap.to(".svc-marquee-1", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: marqueeRef }
  );

  // Process section
  useGSAP(
    () => {
      gsap.from(".process-section-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: processRef }
  );

  // Work section
  useGSAP(
    () => {
      gsap.from(".work-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: workRef }
  );

  // FAQ
  useGSAP(
    () => {
      gsap.from(".faq-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: faqRef }
  );

  // CTA
  useGSAP(
    () => {
      gsap.from(".cta-inner", {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 0.9,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ctaRef }
  );

  const handleFeatureHover = useCallback(
    (el: HTMLElement, entering: boolean) => {
      gsap.to(el.querySelector(".feat-icon"), {
        scale: entering ? 1.15 : 1,
        rotation: entering ? 5 : 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(el.querySelector(".feat-arrow"), {
        x: entering ? 0 : -8,
        opacity: entering ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    []
  );

  return (
    <PageShell>
      {/* ─── Hero ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          >
            <source src={STOCK_VIDEOS.concert} type="video/mp4" />
          </video>
        </div>
        <div
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] ${accentGradient}`}
        />
        <div className="absolute top-1/3 -right-40 w-125 h-125 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-100 h-100 rounded-full bg-[#d94fa0]/3 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full text-center flex flex-col items-center">
          <div className="svc-hero-badge inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">
              {label}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] font-bold leading-[0.92] tracking-tight mb-8">
            {headline.map((line, i) => (
              <span
                key={i}
                className={`svc-hero-line block ${
                  i === gradientLine ? "text-gradient" : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="svc-hero-text text-lg md:text-xl text-foreground/45 max-w-2xl leading-relaxed mb-10">
            {intro}
          </p>

          <div className="svc-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-[1.03]"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-3 border border-foreground/15 text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary/50 hover:text-primary transition-all"
            >
              See Our Work
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        <div className="svc-hero-scroll absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/20">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-foreground/15 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Features — Interactive Expandable List ─── */}
      <section ref={featuresRef} className="py-24 lg:py-36 border-t border-border">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
                What we deliver
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Capabilities
                <br />
                <span className="text-gradient">& Expertise</span>
              </h2>
              <p className="text-foreground/35 leading-relaxed text-sm mb-8">
                Click any capability to learn more about how we approach it.
              </p>
              <div className="hidden lg:block">
                <div className="flex items-center gap-4 text-sm text-foreground/20">
                  <span className="text-3xl font-bold text-primary">
                    {String(features.length).padStart(2, "0")}
                  </span>
                  <span>core capabilities</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              {features.map((feature, i) => {
                const isExpanded = expandedFeature === i;
                return (
                  <div
                    key={i}
                    className="feat-item"
                    onMouseEnter={(e) =>
                      handleFeatureHover(e.currentTarget, true)
                    }
                    onMouseLeave={(e) =>
                      handleFeatureHover(e.currentTarget, false)
                    }
                  >
                    <button
                      onClick={() =>
                        setExpandedFeature(isExpanded ? null : i)
                      }
                      className={`w-full text-left bg-card border rounded-2xl p-6 lg:p-7 transition-all duration-500 cursor-pointer ${
                        isExpanded
                          ? "border-primary/40 shadow-lg shadow-primary/5"
                          : "border-border hover:border-foreground/15"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            data-cursor="icon"
                            className={`feat-icon w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                              isExpanded
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-foreground/30"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3
                            className={`text-lg font-semibold transition-colors ${
                              isExpanded ? "text-primary" : ""
                            }`}
                          >
                            {feature.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="feat-arrow opacity-0 -translate-x-2 text-primary">
                            <ArrowRight className="w-4 h-4" />
                          </span>
                          <div
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                              isExpanded
                                ? "border-primary bg-primary/10 rotate-0"
                                : "border-border"
                            }`}
                          >
                            {isExpanded ? (
                              <Minus className="w-3.5 h-3.5 text-primary" />
                            ) : (
                              <Plus className="w-3.5 h-3.5 text-foreground/30" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          isExpanded
                            ? "max-h-40 opacity-100 mt-5"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <div className="pl-14">
                          <p className="text-foreground/45 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Scrolling Marquee ─── */}
      <section
        ref={marqueeRef}
        className="py-12 overflow-hidden border-y border-border"
      >
        <div className="svc-marquee-1 whitespace-nowrap ml-[-10%]">
          <span className="text-6xl md:text-8xl font-bold text-foreground/4 uppercase tracking-tight">
            {Array(6)
              .fill(`${label} — `)
              .join("")}
          </span>
        </div>
      </section>

      <VideoBreakSection
        compact
        eyebrow={label}
        line1="Experiences That"
        line2="Move People"
        subtext={`See how ${label.toLowerCase()} comes to life — bold, immersive, and impossible to ignore.`}
        videoSrc={STOCK_VIDEOS.festival}
        primaryCta={{ href: "/contact", label: "Start a Project" }}
        secondaryCta={{ href: "/#work", label: "View Our Work" }}
        showStats={false}
      />

      {/* ─── Process — Interactive Stepper ─── */}
      <section ref={processRef} className="py-24 lg:py-36">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="process-section-heading mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Step buttons */}
            <div className="space-y-2">
              {process.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProcess(i)}
                  className={`w-full text-left flex items-center gap-5 p-5 rounded-xl transition-all duration-500 cursor-pointer group ${
                    activeProcess === i
                      ? "bg-card border border-primary/30 shadow-lg shadow-primary/5"
                      : "border border-transparent hover:bg-card/50"
                  }`}
                >
                  <div
                    data-cursor="icon"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
                      activeProcess === i
                        ? "bg-primary text-primary-foreground scale-110"
                        : "bg-secondary text-foreground/25 group-hover:text-foreground/50"
                    }`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-semibold transition-colors ${
                        activeProcess === i ? "text-primary" : "text-foreground/60"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {activeProcess === i && (
                      <div className="mt-1 h-1 w-full bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary/50 rounded-full animate-pulse w-full" />
                      </div>
                    )}
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                      activeProcess === i
                        ? "text-primary translate-x-0 opacity-100"
                        : "text-foreground/10 -translate-x-2 opacity-0 group-hover:opacity-50 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Active step detail */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary/0 via-primary to-primary/0" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                <div className="relative">
                  <span className="text-7xl font-bold text-primary/10 block mb-4">
                    {process[activeProcess].step}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {process[activeProcess].title}
                  </h3>
                  <p className="text-foreground/45 leading-relaxed mb-8">
                    {process[activeProcess].description}
                  </p>

                  {/* Step progress */}
                  <div className="flex items-center gap-2">
                    {process.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveProcess(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                          i === activeProcess
                            ? "bg-primary w-8"
                            : i < activeProcess
                              ? "bg-primary/30 w-4"
                              : "bg-foreground/10 w-4"
                        }`}
                      />
                    ))}
                    <span className="ml-auto text-xs text-foreground/20">
                      {activeProcess + 1} / {process.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Case Studies ─── */}
      <section ref={workRef} className="py-24 lg:py-36 bg-card">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="work-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
                Proof in the work
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Selected <span className="text-gradient">Results</span>
              </h2>
            </div>
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-primary text-sm font-semibold"
            >
              View all work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {caseStudies.map((cs, i) => (
              <div key={i} className="group cursor-pointer" data-cursor="card">
                <div
                  className={`relative aspect-16/10 rounded-2xl overflow-hidden bg-linear-to-br ${cs.color} transition-transform duration-700 group-hover:scale-[1.02]`}
                >
                  <Image
                    src={cs.image ?? STOCK_IMAGES[i % STOCK_IMAGES.length]}
                    alt={cs.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-700" />

                  <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-linear-to-t from-black/70 via-black/30 to-transparent">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1.5">
                      {cs.client}
                    </p>
                    <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {cs.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-primary text-sm font-semibold">
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — Interactive Accordion ─── */}
      <section ref={faqRef} className="py-24 lg:py-36">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="faq-heading lg:sticky lg:top-32">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
                  Got questions?
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Common
                  <br />
                  <span className="text-gradient">Questions</span>
                </h2>
                <p className="text-foreground/35 leading-relaxed text-sm mb-8">
                  Can&apos;t find what you&apos;re looking for?
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-primary text-sm font-semibold"
                >
                  Ask us anything
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3">
              {faq.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`bg-card border rounded-2xl overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "border-primary/30 shadow-lg shadow-primary/5"
                        : "border-border hover:border-foreground/15"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 lg:p-7 text-left cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-foreground/20"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className={`font-semibold text-base lg:text-lg transition-colors ${
                            isOpen
                              ? "text-foreground"
                              : "text-foreground/70 group-hover:text-foreground"
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                          isOpen
                            ? "border-primary bg-primary/10 rotate-180"
                            : "border-border"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-primary" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-foreground/30" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isOpen
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 lg:px-7 pb-6 lg:pb-7 pl-18">
                        <p className="text-foreground/45 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section ref={ctaRef} className="py-24 lg:py-36 bg-card">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="cta-inner relative bg-background border border-border rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-[#d94fa0]/5 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative px-8 py-16 lg:px-20 lg:py-24 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-6">
                Ready?
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Let&apos;s Design Your</span>
                <span className="block text-gradient whitespace-nowrap">
                  Next Experience
                </span>
              </h2>
              <p className="text-foreground/35 mb-10 max-w-lg mx-auto">
                {ctaText}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-[1.03]"
                >
                  Get in Touch
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <Link
                  href="/#services"
                  className="group inline-flex items-center gap-2 text-foreground/40 text-sm font-medium hover:text-foreground transition-colors"
                >
                  Explore all services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
