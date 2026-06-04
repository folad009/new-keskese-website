"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/page-shell";
import VideoBreakSection from "@/components/video-break-section";
import Image from "next/image";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
  social: { linkedin?: string; twitter?: string };
}

const leadership: TeamMember[] = [
  {
    name: "Alex Langford",
    role: "Co-Founder & CEO",
    bio: "Former creative director at a top agency. Alex brings 15 years of brand strategy experience and an obsession with moments that make people stop and stare.",
    initials: "AL",
    color: "from-primary/30 to-yellow-500/30",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Maya Rivera",
    role: "Co-Founder & Chief Creative Officer",
    bio: "Multidisciplinary artist turned experiential designer. Maya has led creative on 100+ activations and holds 3 Cannes Lions for experiential work.",
    initials: "MR",
    color: "from-[#d94fa0]/30 to-[#B02A76]/30",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "James Okafor",
    role: "Chief Operating Officer",
    bio: "Former head of operations at a global events company. James scaled our production engine from 10 to 200+ activations per year without missing a beat.",
    initials: "JO",
    color: "from-emerald-500/30 to-teal-600/30",
    social: { linkedin: "#" },
  },
  {
    name: "Sofia Chen",
    role: "Chief Strategy Officer",
    bio: "Data scientist turned strategist. Sofia built our Impact Measurement Framework™ and ensures every experience delivers against hard business metrics.",
    initials: "SC",
    color: "from-purple-500/30 to-violet-600/30",
    social: { linkedin: "#", twitter: "#" },
  },
];

const team: TeamMember[] = [
  {
    name: "Liam Gallagher",
    role: "Head of Production",
    bio: "15 years in live event production across 30+ countries.",
    initials: "LG",
    color: "from-orange-500/30 to-red-500/30",
    social: { linkedin: "#" },
  },
  {
    name: "Priya Patel",
    role: "Creative Director",
    bio: "Award-winning creative with a background in spatial design.",
    initials: "PP",
    color: "from-pink-500/30 to-rose-500/30",
    social: { linkedin: "#" },
  },
  {
    name: "Daniel Kim",
    role: "Head of Digital Experiences",
    bio: "AR/VR specialist and former tech lead at a major gaming studio.",
    initials: "DK",
    color: "from-sky-500/30 to-indigo-500/30",
    social: { linkedin: "#" },
  },
  {
    name: "Amara Thompson",
    role: "Head of Client Services",
    bio: "Relationship builder and strategist with Fortune 500 expertise.",
    initials: "AT",
    color: "from-amber-500/30 to-yellow-600/30",
    social: { linkedin: "#" },
  },
  {
    name: "Marcus Webb",
    role: "Senior Producer",
    bio: "Festival and large-scale event specialist with a logistics brain.",
    initials: "MW",
    color: "from-lime-500/30 to-green-500/30",
    social: { linkedin: "#" },
  },
  {
    name: "Yuki Tanaka",
    role: "Studio Director, Tokyo",
    bio: "Bridging East and West with culturally resonant experiences.",
    initials: "YT",
    color: "from-red-500/30 to-orange-500/30",
    social: { linkedin: "#" },
  },
  {
    name: "Elena Voss",
    role: "Head of Design",
    bio: "From environments to graphics — Elena shapes the visual identity of every activation.",
    initials: "EV",
    color: "from-fuchsia-500/30 to-purple-500/30",
    social: { linkedin: "#" },
  },
  {
    name: "Noah Williams",
    role: "Studio Director, Los Angeles",
    bio: "Entertainment industry veteran connecting brands with culture.",
    initials: "NW",
    color: "from-cyan-500/30 to-teal-500/30",
    social: { linkedin: "#" },
  },
];

function TeamCard({
  member,
  large = false,
  imageIndex = 0,
}: {
  member: TeamMember;
  large?: boolean;
  imageIndex?: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      data-cursor="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative ${
          large ? "aspect-3/4" : "aspect-square"
        } rounded-2xl overflow-hidden bg-linear-to-br ${member.color} mb-4`}
      >
        <Image
          src={STOCK_IMAGES[imageIndex % STOCK_IMAGES.length]}
          alt={member.name}
          fill
          sizes={large ? "25vw" : "20vw"}
          className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`${
              large ? "text-6xl" : "text-4xl"
            } font-bold text-white/40`}
          >
            {member.initials}
          </span>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/70 to-transparent transition-all duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
          <div className="flex gap-3 mt-3">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="text-white/60 hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <h3 className={`${large ? "text-xl" : "text-base"} font-semibold`}>
        {member.name}
      </h3>
      <p className="text-foreground/40 text-sm">{member.role}</p>
    </div>
  );
}

export default function MeetTheTeamPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".team-hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
      }).from(
        ".team-hero-text",
        { y: 40, opacity: 0, duration: 0.8 },
        "-=0.4"
      );
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      gsap.from(".leader-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: leadershipRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: leadershipRef }
  );

  useGSAP(
    () => {
      gsap.from(".team-card", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: teamRef }
  );

  return (
    <PageShell>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#d94fa0]/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
          <p className="team-hero-line text-sm uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Meet the Team
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8">
            <span className="team-hero-line block text-gradient">The People Behind the</span>
            <span className="team-hero-line block">Experiences</span>
          </h1>
          <p className="team-hero-text text-lg md:text-xl text-foreground/50 text-center leading-relaxed max-w-2xl mx-auto">
            Creatives, strategists, and producers united by one obsession —
            creating moments that matter.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leadershipRef} className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Leadership
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="leader-card">
                <TeamCard member={member} large imageIndex={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoBreakSection
        compact
        eyebrow="The Team"
        line1="People Who Design"
        line2="The Extraordinary"
        subtext="Every face behind the work — strategists, producers, creatives, and technologists."
        videoSrc={STOCK_VIDEOS.festival}
        primaryCta={{ href: "/careers", label: "Join the Team" }}
        secondaryCta={{ href: "/contact", label: "Work With Us" }}
        showStats={false}
      />

      {/* Full Team */}
      <section ref={teamRef} className="py-24 lg:py-32 bg-card">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            The Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <TeamCard member={member} imageIndex={index + 4} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + Join CTA */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-360 mx-auto px-6 lg:px-12">
          {/*<div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { value: "120+", label: "Team Members" },
              { value: "4", label: "Global Studios" },
              { value: "23", label: "Nationalities" },
              { value: "42%", label: "Senior Women in Leadership" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground/40 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>*/}

          <div className="text-center bg-card border border-border rounded-3xl p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to join us?
            </h2>
            <p className="text-foreground/40 mb-8 max-w-lg mx-auto">
              We&apos;re always looking for extraordinary people who believe in
              the power of experiences.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
            >
              View Open Roles
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
