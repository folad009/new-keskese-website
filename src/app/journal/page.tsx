"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Clock, Search, ArrowRight, X } from "lucide-react";
import PageShell from "@/components/page-shell";
import VideoBreakSection from "@/components/video-break-section";
import Image from "next/image";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  category: string;
  color: string;
  featured?: boolean;
  image?: string;
}

const categories = [
  "All",
  "Insights",
  "Case Studies",
  "News",
  "Culture",
  "Industry",
];

const articles: Article[] = [
  {
    slug: "future-of-experiential-marketing-2026",
    title: "The Future of Experiential Marketing in 2026",
    excerpt:
      "How AI, spatial computing, and sustainability are reshaping live brand experiences — and what it means for marketers planning their next activation.",
    author: "Sofia Chen",
    authorRole: "Chief Strategy Officer",
    readTime: "7 min",
    date: "May 12, 2026",
    category: "Insights",
    color: "from-violet-600/40 to-purple-600/40",
    featured: true,
  },
  {
    slug: "behind-the-scenes-neon-horizons",
    title: "Behind the Scenes: Neon Horizons Installation",
    excerpt:
      "A deep dive into the creative and technical process behind our most ambitious immersive project — from concept sketch to 4-city tour.",
    author: "Maya Rivera",
    authorRole: "Chief Creative Officer",
    readTime: "10 min",
    date: "May 5, 2026",
    category: "Case Studies",
    color: "from-fuchsia-600/40 to-pink-600/40",
    featured: true,
  },
  {
    slug: "keskese-expands-apac",
    title: "KESKESE Expands to Tokyo and Seoul",
    excerpt:
      "Our new APAC studios bring experiential marketing expertise to the fastest-growing markets in the world.",
    author: "James Okafor",
    authorRole: "COO",
    readTime: "3 min",
    date: "Apr 28, 2026",
    category: "News",
    color: "from-emerald-600/40 to-teal-600/40",
  },
  {
    slug: "measuring-experiential-roi",
    title: "How to Measure Experiential ROI: A Practical Guide",
    excerpt:
      "Our Impact Measurement Framework™ explained. The metrics that matter, the tools we use, and how to build a business case your CFO will approve.",
    author: "Sofia Chen",
    authorRole: "Chief Strategy Officer",
    readTime: "8 min",
    date: "Apr 20, 2026",
    category: "Insights",
    color: "from-blue-600/40 to-cyan-600/40",
  },
  {
    slug: "urban-pulse-case-study",
    title: "Urban Pulse: How We Built a Street-Level Brand Movement",
    excerpt:
      "The creative strategy, production challenges, and results behind our award-winning campaign for a leading sports brand.",
    author: "Alex Langford",
    authorRole: "Co-Founder & CEO",
    readTime: "9 min",
    date: "Apr 14, 2026",
    category: "Case Studies",
    color: "from-orange-600/40 to-red-600/40",
  },
  {
    slug: "four-day-work-week-results",
    title: "One Year of 4-Day Weeks: What We Learned",
    excerpt:
      "Productivity went up. Burnout went down. Here's our honest look at what happened when we dropped Fridays.",
    author: "James Okafor",
    authorRole: "COO",
    readTime: "6 min",
    date: "Apr 7, 2026",
    category: "Culture",
    color: "from-primary/40 to-yellow-500/40",
  },
  {
    slug: "ar-vs-vr-brand-experiences",
    title: "AR vs VR: Which Is Right for Your Brand Experience?",
    excerpt:
      "A practical comparison of augmented and virtual reality for experiential marketing — use cases, costs, and audience considerations.",
    author: "Daniel Kim",
    authorRole: "Head of Digital",
    readTime: "7 min",
    date: "Mar 30, 2026",
    category: "Insights",
    color: "from-sky-600/40 to-indigo-600/40",
  },
  {
    slug: "sustainability-in-experiential",
    title: "Building Sustainable Experiences Without Sacrificing Impact",
    excerpt:
      "Practical approaches to reducing waste, carbon, and environmental impact in live events and installations — without compromising the wow factor.",
    author: "Elena Voss",
    authorRole: "Head of Design",
    readTime: "6 min",
    date: "Mar 22, 2026",
    category: "Industry",
    color: "from-lime-600/40 to-green-600/40",
  },
  {
    slug: "pop-up-playbook",
    title: "The Pop-Up Playbook: 7 Lessons from 50+ Activations",
    excerpt:
      "Location, timing, staffing, design, and the one thing most brands get wrong. Battle-tested lessons from our pop-up team.",
    author: "Marcus Webb",
    authorRole: "Senior Producer",
    readTime: "8 min",
    date: "Mar 15, 2026",
    category: "Insights",
    color: "from-amber-600/40 to-orange-600/40",
  },
  {
    slug: "keskese-wins-cannes-lions",
    title: "KESKESE Wins Three Cannes Lions for Experiential",
    excerpt:
      "Neon Horizons and Urban Pulse take Gold and Silver at the 2025 Cannes Lions International Festival of Creativity.",
    author: "Alex Langford",
    authorRole: "Co-Founder & CEO",
    readTime: "3 min",
    date: "Mar 8, 2026",
    category: "News",
    color: "from-yellow-600/40 to-amber-600/40",
  },
  {
    slug: "gen-z-experiential-trends",
    title: "What Gen Z Actually Wants from Brand Experiences",
    excerpt:
      "Forget the stereotypes. Our research into 5,000 Gen Z consumers reveals what drives them to attend, engage, and share brand experiences.",
    author: "Sofia Chen",
    authorRole: "Chief Strategy Officer",
    readTime: "9 min",
    date: "Feb 28, 2026",
    category: "Insights",
    color: "from-rose-600/40 to-pink-600/40",
  },
  {
    slug: "sound-garden-case-study",
    title: "Sound Garden: When Audio Becomes Architecture",
    excerpt:
      "How we designed an interactive garden of sound for a premium audio brand — and why sonic branding is the next frontier in experiential.",
    author: "Maya Rivera",
    authorRole: "Chief Creative Officer",
    readTime: "7 min",
    date: "Feb 20, 2026",
    category: "Case Studies",
    color: "from-teal-600/40 to-cyan-600/40",
  },
];

export default function JournalPage() {
  const topRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filtered = articles.filter((a) => {
    const catMatch = activeCategory === "All" || a.category === activeCategory;
    const searchMatch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  const featured = articles.filter((a) => a.featured);
  const showFeatured = activeCategory === "All" && searchQuery === "";

  const categoryCounts = categories.reduce(
    (acc, cat) => {
      acc[cat] =
        cat === "All"
          ? articles.length
          : articles.filter((a) => a.category === cat).length;
      return acc;
    },
    {} as Record<string, number>
  );

  useGSAP(
    () => {
      gsap.from(".top-bar", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".featured-main", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".featured-side", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.35,
      });
    },
    { scope: topRef }
  );

  useGSAP(
    () => {
      gsap.from(".article-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: gridRef }
  );

  const handleCardEnter = useCallback(
    (index: number, el: HTMLElement) => {
      setHoveredCard(index);
      gsap.to(el.querySelector(".card-image"), {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(el.querySelector(".card-arrow"), {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    []
  );

  const handleCardLeave = useCallback(
    (el: HTMLElement) => {
      setHoveredCard(null);
      gsap.to(el.querySelector(".card-image"), {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(el.querySelector(".card-arrow"), {
        x: -10,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    []
  );

  return (
    <PageShell>
      <div ref={topRef}>
        {/* Sticky Filter Bar */}
        <section className="pt-28 pb-6 sticky top-20 z-30 bg-background/90 backdrop-blur-2xl border-b border-border dark:bg-background/40">
          <div className="top-bar max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold tracking-tight">Journal</h1>
                <div className="hidden md:flex items-center gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground/40 hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {cat}
                      <span
                        className={`ml-1 ${
                          activeCategory === cat
                            ? "text-primary-foreground/60"
                            : "text-foreground/20"
                        }`}
                      >
                        {categoryCounts[cat]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/20" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card border border-border rounded-full pl-10 pr-9 py-2.5 text-sm text-foreground placeholder:text-foreground/20 outline-none focus:border-primary/50 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile categories */}
            <div className="flex md:hidden items-center gap-1.5 mt-4 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/40 hover:text-foreground bg-secondary"
                  }`}
                >
                  {cat} {categoryCounts[cat]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured — Bento layout */}
        {showFeatured && (
          <section className="py-10">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-5 gap-5">
                {/* Main featured */}
                <Link
                  href={`/journal/${featured[0].slug}`}
                  className="featured-main lg:col-span-3 group relative rounded-2xl overflow-hidden"
                >
                  <div
                    className={`relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[360px] bg-gradient-to-br ${featured[0].color}`}
                  >
                    <Image
                      src={featured[0].image ?? STOCK_IMAGES[0]}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />

                    <div className="absolute top-5 left-5 flex gap-2 z-10">
                      <span className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full font-semibold">
                        Featured
                      </span>
                      <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {featured[0].category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                        {featured[0].title}
                      </h2>
                      <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-4 max-w-xl">
                        {featured[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                            {featured[0].author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-white text-xs font-medium">
                              {featured[0].author}
                            </p>
                            <p className="text-white/40 text-xs">
                              {featured[0].date} &middot; {featured[0].readTime}
                            </p>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-white group-hover:text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Side featured stack */}
                <div className="lg:col-span-2 flex flex-col gap-5">
                  {featured.slice(0, 2).map((article, i) => (
                    <Link
                      key={i}
                      href={`/journal/${article.slug}`}
                      className={`featured-side group relative rounded-2xl overflow-hidden flex-1 ${
                        i === 0 && "hidden lg:block"
                      }`}
                    >
                      <div
                        className={`relative h-full min-h-[170px] bg-gradient-to-br ${
                          i === 0
                            ? featured[0].color
                            : article.color
                        }`}
                      >
                        <Image
                          src={
                            (i === 0 ? featured[0].image : article.image) ??
                            STOCK_IMAGES[(i + 1) % STOCK_IMAGES.length]
                          }
                          alt=""
                          fill
                          sizes="40vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-700" />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                            {i === 0
                              ? featured[0].category
                              : article.category}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent z-10">
                          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300 leading-snug mb-2">
                            {i === 0
                              ? featured[0].title
                              : article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-white/40 text-xs">
                            <span>
                              {i === 0
                                ? featured[0].author
                                : article.author}
                            </span>
                            <span>&middot;</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {i === 0
                                ? featured[0].readTime
                                : article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* Quick stats card */}
                  <div className="featured-side bg-card border border-border rounded-2xl p-6 flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">12</p>
                      <p className="text-xs text-foreground/30 mt-0.5">
                        Articles this month
                      </p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="text-3xl font-bold text-primary">6</p>
                      <p className="text-xs text-foreground/30 mt-0.5">
                        Contributors
                      </p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div>
                      <p className="text-3xl font-bold text-primary">24K</p>
                      <p className="text-xs text-foreground/30 mt-0.5">
                        Monthly readers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Articles Grid */}
      <section ref={gridRef} className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {!showFeatured && (
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-foreground/30">
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}{" "}
                {activeCategory !== "All" && (
                  <>
                    in <span className="text-primary">{activeCategory}</span>
                  </>
                )}
                {searchQuery && (
                  <>
                    {" "}
                    matching &ldquo;
                    <span className="text-foreground/60">{searchQuery}</span>
                    &rdquo;
                  </>
                )}
              </p>
            </div>
          )}

          {showFeatured && (
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Latest Articles</h2>
              <span className="text-xs text-foreground/20">
                {articles.filter((a) => !a.featured).length} articles
              </span>
            </div>
          )}

          {(showFeatured ? articles.filter((a) => !a.featured) : filtered)
            .length === 0 ? (
            <div className="text-center py-24 bg-card border border-border rounded-2xl">
              <Search className="w-12 h-12 text-foreground/10 mx-auto mb-4" />
              <p className="text-foreground/40 font-medium">
                No articles found
              </p>
              <p className="text-foreground/20 text-sm mt-1 mb-6">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-primary text-sm font-semibold hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {(showFeatured
                ? articles.filter((a) => !a.featured)
                : filtered
              ).map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="article-card group block"
                  onMouseEnter={(e) =>
                    handleCardEnter(i, e.currentTarget as HTMLElement)
                  }
                  onMouseLeave={(e) =>
                    handleCardLeave(e.currentTarget as HTMLElement)
                  }
                >
                  <div className="flex flex-col sm:flex-row gap-5 bg-card border border-border rounded-2xl p-4 sm:p-5 hover:border-primary/30 transition-all duration-300">
                    {/* Thumbnail */}
                    <div
                      className={`card-image relative w-full sm:w-48 lg:w-56 flex-shrink-0 aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${article.color}`}
                      data-cursor="card"
                    >
                      <Image
                        src={
                          article.image ??
                          STOCK_IMAGES[i % STOCK_IMAGES.length]
                        }
                        alt=""
                        fill
                        sizes="224px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="bg-white/10 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors duration-300 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-foreground/35 text-sm leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-foreground/40">
                            {article.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-foreground/60">
                              {article.author}
                            </p>
                            <p className="text-[10px] text-foreground/25">
                              {article.date} &middot; {article.readTime}
                            </p>
                          </div>
                        </div>

                        <div
                          className="card-arrow flex items-center gap-1 text-primary text-xs font-semibold opacity-0 -translate-x-2.5"
                        >
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <VideoBreakSection
        compact
        eyebrow="Journal"
        line1="Ideas That Shape"
        line2="Experiential Work"
        subtext="Insights, case studies, and culture — from the team designing what&apos;s next."
        videoSrc={STOCK_VIDEOS.festival}
        primaryCta={{ href: "/contact", label: "Work With Us" }}
        secondaryCta={{ href: "/#work", label: "See Our Work" }}
        showStats={false}
      />

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-card border border-border rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#d94fa0]/5 via-transparent to-transparent" />
            <div className="relative grid lg:grid-cols-2 gap-10 p-10 lg:p-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">
                  Newsletter
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  <span className="block">Insights Delivered</span>
                  <span className="block text-gradient whitespace-nowrap">
                    Straight to You
                  </span>
                </h2>
                <p className="text-foreground/40 text-sm leading-relaxed">
                  One email per week — case studies, strategy, and industry
                  signals. No filler.
                </p>
              </div>
              <div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 bg-background border border-border rounded-full p-1.5 focus-within:border-primary/50 transition-colors">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/20 outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all cursor-pointer flex-shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[11px] text-foreground/15 pl-4">
                    No spam. Unsubscribe anytime. Read by 24,000+ marketers.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
