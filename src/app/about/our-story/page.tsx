"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/page-shell";
import Link from "next/link";
import Image from "next/image";
import VideoBreakSection from "@/components/video-break-section";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

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

const values = [
  {
    title: "Experience First",
    description:
      "Every decision starts with the question: how will this make people feel? We design for emotion, sensation, and memory.",
  },
  {
    title: "Fearless Creativity",
    description:
      "We chase the ideas that scare us. The ones that haven't been done. The ones that make clients pause before saying yes.",
  },
  {
    title: "Measurable Impact",
    description:
      "Beautiful isn't enough. Every experience is built on a foundation of data, strategy, and clear KPIs that prove ROI.",
  },
  {
    title: "Human Connection",
    description:
      "In a digital world, real human moments are the ultimate luxury. We create spaces where people truly connect.",
  },
];

export default function OurStoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".story-hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
      }).from(
        ".story-hero-text",
        { y: 40, opacity: 0, duration: 0.8 },
        "-=0.4",
      );
    },
    { scope: heroRef },
  );

  useGSAP(
    () => {
      gsap.from(".timeline-item", {
        x: -60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: timelineRef },
  );

  useGSAP(
    () => {
      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: valuesRef },
  );

  return (
    <PageShell>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          >
            <source src={STOCK_VIDEOS.concert} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center lg:px-12 w-full">
          <p className="story-hero-line text-sm uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Our Story
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8">
            <span className="story-hero-line block">Born From a Belief That</span>
            <span className="story-hero-line block text-gradient">Marketing Should Be <em className="italic text-primary/80">Felt</em></span>
          </h1>
          {/*<p className="story-hero-text text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto leading-relaxed">
            We design brand activations and immersive experiences that connect
            audiences to brands — authentically and at scale.
          </p>*/}
        </div>
      </section>

      {/* Founders Block */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
              <Image
                src={STOCK_IMAGES[2]}
                alt="Keskese team at an experiential activation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-[#d94fa0]/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-foreground/80 text-sm uppercase tracking-widest font-medium">
                  Since 2018
                </p>
                <p className="text-foreground/50 text-sm mt-1">
                  Lagos · Experiential at heart
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                About
                <br />
                <span className="text-gradient">Keskese Ltd.</span>
              </h2>
              <div className="space-y-6 text-foreground/50 leading-relaxed">
                <p>
                  We are an independent agency dedicated to experiential
                  marketing and brand activations — nimble, flexible, and
                  focused on delivering on time and on budget.
                </p>
                <p>
                  Our work creates connections that influence how audiences
                  feel, think, and act about brands — driving performance,
                  sales, and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoBreakSection
        compact
        eyebrow="Our Craft"
        line1="Designing Moments"
        line2="People Remember"
        subtext="From pop-ups to stadium-scale activations — we make brands felt, not just seen."
        videoSrc={STOCK_VIDEOS.crowd}
        primaryCta={{ href: "/#work", label: "See Our Work" }}
        secondaryCta={{ href: "/contact", label: "Start a Project" }}
        showStats={false}
      />

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 lg:py-40 bg-card">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16">
            Our
            <br />
            <span className="text-gradient">Journey</span>
          </h2>

          <div className="relative">
            <div className="absolute left-6.75 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex items-start gap-8 lg:gap-16 ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse lg:text-right"
                  }`}
                >
                  <div className="hidden lg:block lg:w-1/2" />

                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  <div className="ml-20 lg:ml-0 lg:w-1/2">
                    <div
                      className={`bg-background border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-colors ${
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

      {/* Values */}
      <section ref={valuesRef} className="py-24 lg:py-40">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              What We
              <br />
              <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-lg text-foreground/40 leading-relaxed">
              These aren&apos;t just words on a wall. They&apos;re the filter
              through which every idea, every hire, and every project passes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card group bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/30 transition-all duration-500"
              >
                <span className="text-5xl font-bold text-primary/10 block mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/40 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="max-w-360 mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Let&apos;s Design Your</span>
            <span className="block text-gradient whitespace-nowrap">
              Next Chapter
            </span>
          </h2>
          <p className="text-foreground/40 mb-8 max-w-lg mx-auto">
            We&apos;re always looking for ambitious brands and talented people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary hover:text-primary transition-all"
            >
              Join the Team
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
