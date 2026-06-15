"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Lightbulb,
  Heart,
  Globe,
  Zap,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import PageShell from "@/components/page-shell";
import VideoBreakSection from "@/components/video-break-section";
import PopHeading from "@/components/pop-heading";
import Image from "next/image";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const pillars = [
  {
    icon: Lightbulb,
    title: "Creative Courage",
    description:
      "We celebrate the bold ideas. The ones that make you nervous. We've built a culture where creative risk is rewarded, and safe choices are the real danger.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Heart,
    title: "Radical Empathy",
    description:
      "Great experiences come from understanding people deeply. We practice empathy in everything — in how we treat each other, our clients, and the audiences we design for.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "23 nationalities across 4 studios. We believe diverse viewpoints produce richer, more resonant work. Cultural fluency is a superpower.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Zap,
    title: "Relentless Energy",
    description:
      "We move fast. We iterate faster. Our production engine can take an idea from napkin sketch to live activation in 30 days — and we love the rush.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description:
      "No silos, no egos. Producers sit next to designers sit next to strategists. The best work happens when disciplines collide.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "We invest in our people. Learning budgets, mentorship programs, and a culture that encourages experimentation — even when it fails.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const perks = [
  "Unlimited learning & development budget",
  "4-day work weeks (yes, really)",
  "Remote-first with studio access",
  "Annual team trip to somewhere amazing",
  "Mental health & wellness stipend",
  "Sabbatical after 3 years",
  "Equity participation program",
  "Creative side-project time (10%)",
  "Home office setup allowance",
  "Global mobility between studios",
  "Parental leave (equal for all)",
  "Birthday off + volunteer days",
];

const testimonials = [
  {
    quote:
      "I've worked at 4 agencies. KESKESE is the first place where I've felt genuinely trusted to take creative risks. The work we produce here is unlike anything else in the industry.",
    name: "Priya Patel",
    role: "Creative Director, 3 years",
  },
  {
    quote:
      "The 4-day week isn't a gimmick — it's made me more focused, more creative, and honestly a better human. I can't imagine going back.",
    name: "Liam Gallagher",
    role: "Head of Production, 4 years",
  },
  {
    quote:
      "Moving from the Tokyo studio to London for 6 months was transformative. The global mobility program gives you perspective that makes your work so much richer.",
    name: "Yuki Tanaka",
    role: "Studio Director Tokyo, 2 years",
  },
];

export default function CulturePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".culture-hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
      }).from(
        ".culture-hero-text",
        { y: 40, opacity: 0, duration: 0.8 },
        "-=0.4"
      );
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      gsap.from(".pillar-card", {
        y: 70,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: pillarsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: pillarsRef }
  );

  useGSAP(
    () => {
      gsap.from(".perk-item", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: perksRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: perksRef }
  );

  useGSAP(
    () => {
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: testimonialsRef }
  );

  return (
    <PageShell>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={STOCK_IMAGES[4]}
            alt=""
            fill
            className="object-cover opacity-[0.18]"
            sizes="100vw"
            aria-hidden
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-[0.1]"
          >
            <source src={STOCK_VIDEOS.festival} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/5 via-transparent to-transparent" />
        <div className="relative max-w-[1440px] mx-auto page-x w-full">
          <p className="culture-hero-line text-sm uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Our Culture
          </p>
          <PopHeading className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8">
            <PopHeading.Line className="culture-hero-line">Where Bold</PopHeading.Line>
            <PopHeading.Line className="culture-hero-line text-gradient">
              Ideas Meet
            </PopHeading.Line>
            <PopHeading.Line className="culture-hero-line">Bold People</PopHeading.Line>
          </PopHeading>
          <p className="culture-hero-text text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            A culture built for bold ideas and bold people — where creative
            risk is rewarded and the work never feels ordinary.
          </p>
        </div>
      </section>

      {/* Culture Pillars */}
      <section ref={pillarsRef} className="section-y-lg border-t border-border">
        <div className="max-w-[1440px] mx-auto page-x">
          <PopHeading
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16"
          >
            <PopHeading.Line inline>Our Culture</PopHeading.Line>{" "}
            <PopHeading.Line inline className="text-gradient">
              Pillars
            </PopHeading.Line>
          </PopHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="pillar-card group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500"
                >
                  <div
                    data-cursor="icon"
                    className={`w-14 h-14 rounded-xl ${pillar.bg} flex items-center justify-center mb-6 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${pillar.color} group-hover:stroke-[2.5] transition-all duration-300`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-foreground/40 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section ref={perksRef} className="section-y-lg bg-card">
        <div className="max-w-[1440px] mx-auto page-x">
          <div className="max-w-3xl mb-16">
            <PopHeading
              as="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <PopHeading.Line inline>Perks &</PopHeading.Line>{" "}
              <PopHeading.Line inline className="text-gradient">
                Benefits
              </PopHeading.Line>
            </PopHeading>
            <p className="text-lg text-foreground/40 leading-relaxed">
              We believe that well-supported people do extraordinary work.
              Here&apos;s how we invest in our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="perk-item flex items-center gap-3 bg-background border border-border rounded-xl px-6 py-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm text-foreground/70">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoBreakSection
        compact
        eyebrow="Life at Keskese"
        line1="Culture You Can"
        line2="Feel in the Work"
        subtext="The energy inside our studios shows up in every activation we design."
        videoSrc={STOCK_VIDEOS.crowd}
        primaryCta={{ href: "/careers", label: "View Open Roles" }}
        secondaryCta={{ href: "/about/meet-the-team", label: "Meet the Team" }}
        showStats={false}
      />

      {/* Testimonials */}
      <section ref={testimonialsRef} className="section-y-lg">
        <div className="max-w-[1440px] mx-auto page-x">
          <PopHeading
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16"
          >
            <PopHeading.Line inline>From the</PopHeading.Line>{" "}
            <PopHeading.Line inline className="text-gradient">
              Team
            </PopHeading.Line>
          </PopHeading>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="testimonial-card bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/30 transition-colors"
              >
                <div className="text-primary text-4xl mb-4">&ldquo;</div>
                <p className="text-foreground/60 leading-relaxed mb-6 italic">
                  {item.quote}
                </p>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-foreground/30 text-xs">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="max-w-[1440px] mx-auto page-x text-center">
          <PopHeading as="h2" className="text-3xl md:text-4xl font-bold mb-6">
            <PopHeading.Line inline>
              Sound like your kind of place?
            </PopHeading.Line>
          </PopHeading>
          <p className="text-foreground/40 mb-8 max-w-lg mx-auto">
            We&apos;re hiring across all studios. Check out our open roles and
            come build unforgettable things.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
          >
            View Open Roles
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
