"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  MapPin,
  Clock,
  ChevronDown,
  ArrowUpRight,
  Briefcase,
  Filter,
} from "lucide-react";
import PageShell from "@/components/page-shell";
import VideoBreakSection from "@/components/video-break-section";
import PopHeading from "@/components/pop-heading";
import { STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  posted: string;
}

const departments = [
  "All",
  "Creative",
  "Production",
  "Strategy",
  "Design",
  "Technology",
  "Operations",
];

const locations = ["All", "London", "New York", "Los Angeles", "Tokyo", "Remote"];

const jobs: Job[] = [
  {
    title: "Senior Creative Director",
    department: "Creative",
    location: "London",
    type: "Full-time",
    description:
      "Lead creative vision across major accounts and mentor the next generation of experiential creatives.",
    posted: "2 days ago",
  },
  {
    title: "Experience Designer",
    department: "Design",
    location: "New York",
    type: "Full-time",
    description:
      "Design immersive physical and digital experiences from concept through to fabrication-ready specifications.",
    posted: "5 days ago",
  },
  {
    title: "Technical Producer",
    department: "Production",
    location: "Los Angeles",
    type: "Full-time",
    description:
      "Manage the technical delivery of complex installations including AV, lighting, and interactive systems.",
    posted: "1 week ago",
  },
  {
    title: "Experiential Strategist",
    department: "Strategy",
    location: "London",
    type: "Full-time",
    description:
      "Develop data-driven experiential strategies that connect brand objectives to audience moments.",
    posted: "1 week ago",
  },
  {
    title: "Creative Technologist",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    description:
      "Prototype and build interactive installations using AR, spatial computing, sensors, and real-time graphics.",
    posted: "2 weeks ago",
  },
  {
    title: "Junior Producer",
    department: "Production",
    location: "New York",
    type: "Full-time",
    description:
      "Support event production logistics, vendor coordination, and on-site delivery for brand activations.",
    posted: "2 weeks ago",
  },
  {
    title: "Motion Designer",
    department: "Design",
    location: "London",
    type: "Full-time",
    description:
      "Create motion graphics, animated content, and real-time visuals for events and digital experiences.",
    posted: "3 weeks ago",
  },
  {
    title: "Account Director",
    department: "Operations",
    location: "Tokyo",
    type: "Full-time",
    description:
      "Own client relationships for APAC accounts and drive growth through strategic account management.",
    posted: "3 weeks ago",
  },
  {
    title: "Spatial Designer (Intern)",
    department: "Design",
    location: "London",
    type: "Internship",
    description:
      "6-month paid internship designing spatial layouts and environmental graphics for brand activations.",
    posted: "1 month ago",
  },
  {
    title: "Freelance Event Producer",
    department: "Production",
    location: "Remote",
    type: "Contract",
    description:
      "Project-based event production for major activations across European markets. 3-6 month contracts.",
    posted: "1 month ago",
  },
];

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = jobs.filter((job) => {
    const deptMatch = selectedDept === "All" || job.department === selectedDept;
    const locMatch =
      selectedLocation === "All" || job.location === selectedLocation;
    return deptMatch && locMatch;
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".careers-hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
      }).from(
        ".careers-hero-text",
        { y: 40, opacity: 0, duration: 0.8 },
        "-=0.4"
      );
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      gsap.from(".jobs-section", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: jobsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: jobsRef }
  );

  return (
    <PageShell>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
          >
            <source src={STOCK_VIDEOS.festival} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-[1440px] mx-auto page-x w-full">
          <p className="careers-hero-line text-sm uppercase tracking-[0.3em] text-primary font-medium mb-8">
            Careers
          </p>
          <PopHeading className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight mb-8">
            <PopHeading.Line className="careers-hero-line">Design</PopHeading.Line>
            <PopHeading.Line className="careers-hero-line text-gradient">
              Unforgettable
            </PopHeading.Line>
            <PopHeading.Line className="careers-hero-line">
              Things With Us
            </PopHeading.Line>
          </PopHeading>
          <p className="careers-hero-text text-lg md:text-xl text-foreground/50 max-w-2xl leading-relaxed">
            Join a team that believes the best marketing is the kind people
            never want to end.
          </p>

          <div className="careers-hero-text flex flex-wrap gap-12 lg:gap-20 mt-12">
            <div>
              <p className="text-3xl font-bold text-primary">
                {filteredJobs.length}
              </p>
              <p className="text-sm text-foreground/40 mt-1">Open Roles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4</p>
              <p className="text-sm text-foreground/40 mt-1">Studios</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4-day</p>
              <p className="text-sm text-foreground/40 mt-1">Work Week</p>
            </div>
          </div>
        </div>
      </section>

      <VideoBreakSection
        compact
        eyebrow="Careers"
        line1="Create Work That"
        line2="Moves People"
        subtext="From immersive installations to global activations — this is where careers become craft."
        videoSrc={STOCK_VIDEOS.crowd}
        primaryCta={{ href: "#roles", label: "Browse Open Roles" }}
        secondaryCta={{ href: "/about/culture", label: "Our Culture" }}
        showStats={false}
      />

      {/* Why Join */}
      <section className="py-24 lg:py-32 border-t border-border bg-card">
        <div className="max-w-[1440px] mx-auto page-x">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why <span className="text-gradient">KESKESE</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Work That Matters",
                desc: "You won't be making banner ads. You'll be building immersive worlds, stadium-scale spectacles, and moments that trend worldwide.",
              },
              {
                title: "Grow Relentlessly",
                desc: "Unlimited learning budget, mentorship from industry legends, and a clear path from junior to leadership. Your growth is our growth.",
              },
              {
                title: "Live Well",
                desc: "4-day weeks, remote flexibility, mental health support, sabbaticals, and an annual team trip. We take care of our people so they can do their best work.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
              >
                <span className="text-4xl font-bold text-primary/10 block mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={jobsRef} id="roles" className="section-y-lg">
        <div className="max-w-[1440px] mx-auto page-x">
          <div className="jobs-section">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Open <span className="text-gradient">Roles</span>
              </h2>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-foreground/40">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm">Filter:</span>
                </div>

                <div className="relative">
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="appearance-none bg-card border border-border rounded-lg px-4 py-2.5 pr-8 text-sm text-foreground/70 cursor-pointer hover:border-primary/30 transition-colors outline-none"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept === "All" ? "All Departments" : dept}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="appearance-none bg-card border border-border rounded-lg px-4 py-2.5 pr-8 text-sm text-foreground/70 cursor-pointer hover:border-primary/30 transition-colors outline-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc === "All" ? "All Locations" : loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-20 bg-card border border-border rounded-2xl">
                  <Briefcase className="w-12 h-12 text-foreground/10 mx-auto mb-4" />
                  <p className="text-foreground/40">
                    No roles match your filters right now.
                  </p>
                  <p className="text-foreground/20 text-sm mt-1">
                    Try broadening your search or check back soon.
                  </p>
                </div>
              ) : (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group"
                  >
                    <button
                      onClick={() =>
                        setExpandedJob(expandedJob === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 lg:p-8 text-left cursor-pointer"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-semibold group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-foreground/40">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3.5 h-3.5" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {job.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 ml-4">
                        <span className="hidden sm:block text-xs text-foreground/20">
                          {job.posted}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-foreground/30 transition-transform duration-300 ${
                            expandedJob === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {expandedJob === index && (
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-border pt-6">
                        <p className="text-foreground/50 leading-relaxed mb-6">
                          {job.description}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all hover:scale-105"
                        >
                          Apply Now
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <p className="text-center text-foreground/20 text-sm mt-8">
              Don&apos;t see a role that fits?{" "}
              <a
                href="#"
                className="text-primary hover:underline"
              >
                Send us a speculative application
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="max-w-[1440px] mx-auto page-x">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How It <span className="text-gradient">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your CV, portfolio (if relevant), and a short note on why KESKESE.",
              },
              {
                step: "02",
                title: "Chat",
                desc: "A 30-minute call with our People team to get to know each other.",
              },
              {
                step: "03",
                title: "Challenge",
                desc: "A short creative or technical task relevant to the role. No trick questions.",
              },
              {
                step: "04",
                title: "Meet the Team",
                desc: "Final conversations with your future team and leadership. Then we make it official.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-3" />
                )}
                <div className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors relative">
                  <span className="text-4xl font-bold text-primary/15 block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
