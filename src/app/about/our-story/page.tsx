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
import OurJourneySection from "@/components/our-journey-section";
import PopHeading from "@/components/pop-heading";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
        className="relative min-h-[65vh] sm:min-h-[80vh] flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/keskese-web-6.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.12]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-center lg:px-12 w-full">
          <p className="story-hero-line text-sm uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Our Story
          </p>
          <PopHeading className="text-5xl sm:text-6xl md:text-5xl lg:text-[4.5rem] font-bold leading-[0.97] tracking-tight mb-10">
            <PopHeading.Line className="story-hero-line">
              Born From a Belief That
            </PopHeading.Line>
            <PopHeading.Line className="story-hero-line text-gradient">
              Marketing Should Be Felt
            </PopHeading.Line>
          </PopHeading>
          {/*<p className="story-hero-text text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto leading-relaxed">
            We design brand activations and immersive experiences that connect
            audiences to brands — authentically and at scale.
          </p>*/}
        </div>
      </section>

      {/* Founders Block */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-360 mx-auto page-x">
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
              <PopHeading
                as="h2"
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
              >
                <PopHeading.Line>About</PopHeading.Line>
                <PopHeading.Line className="text-gradient">
                  Keskese Ltd.
                </PopHeading.Line>
              </PopHeading>
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

      <OurJourneySection />

      {/* Values */}
      <section ref={valuesRef} className="section-y-lg">
        <div className="max-w-360 mx-auto page-x">
          <div className="max-w-3xl mb-16">
            <PopHeading
              as="h2"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <PopHeading.Line>What We</PopHeading.Line>
              <PopHeading.Line className="text-gradient">Stand For</PopHeading.Line>
            </PopHeading>
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
        <div className="max-w-360 mx-auto page-x text-center">
          <PopHeading as="h2" className="text-3xl md:text-4xl font-bold mb-6">
            <PopHeading.Line>Let&apos;s Design Your</PopHeading.Line>
            <PopHeading.Line className="text-gradient sm:whitespace-nowrap">
              Next Chapter
            </PopHeading.Line>
          </PopHeading>
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
