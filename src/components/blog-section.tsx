"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const posts = [
  {
    title: "The Future of Experiential Marketing in 2026",
    excerpt:
      "How AI, spatial computing, and sustainability are reshaping live brand experiences.",
    author: "Sarah Chen",
    readTime: "5 min",
    category: "Insights",
    color: "from-violet-600/30 to-purple-600/30",
  },
  {
    title: "Behind the Scenes: Neon Horizons Installation",
    excerpt:
      "A deep dive into the creative and technical process behind our most ambitious project.",
    author: "Marcus Holt",
    readTime: "4 min",
    category: "Case Study",
    color: "from-orange-600/30 to-red-600/30",
  },
  {
    title: "KESKESE Expands to Tokyo and Seoul",
    excerpt:
      "Our new APAC studios bring experiential marketing expertise to the fastest-growing markets.",
    author: "James Park",
    readTime: "3 min",
    category: "News",
    color: "from-emerald-600/30 to-teal-600/30",
  },
];

export default function BlogSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".blog-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".blog-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".blog-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="journal" className="py-10 lg:py-16 bg-card">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="blog-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What&apos;s
            <br />
            <span className="text-gradient">New</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Explore All Thoughts
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="blog-grid grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="blog-card group cursor-pointer"
            >
              <div
                className={`relative aspect-16/10 rounded-2xl overflow-hidden bg-linear-to-br ${post.color} mb-5`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-foreground/40 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-foreground/30">
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
