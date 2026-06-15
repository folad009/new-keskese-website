"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import PopHeading from "@/components/pop-heading";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;

    const play = () => {
      video.play().catch(() => {});
    };

    play();
    video.addEventListener("loadeddata", play);

    return () => video.removeEventListener("loadeddata", play);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
      })
        .from(
          ".hero-sub",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
          },
          "-=0.3",
        )
        .from(
          ".hero-stat",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3",
        )
        .from(
          ".hero-video",
          {
            x: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      data-scroll
      data-scroll-class="is-inview"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#d94fa0]/5 blur-3xl" />

      <div className="relative max-w-495 mx-auto page-x py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="order-2 lg:order-1">
            <p className="hero-sub text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary font-medium mb-4 sm:mb-8">
              Experiential Marketing Agency
            </p>

            <PopHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8 text-wrap-balance">
              <PopHeading.Line className="hero-line">
                We Create Unforgettable
              </PopHeading.Line>
              <PopHeading.Line className="hero-line text-gradient">
                Experiences
              </PopHeading.Line>
            </PopHeading>

            <p className="hero-sub text-base sm:text-lg md:text-xl text-foreground/50 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Brand activations, immersive installations, and live experiences
              that connect audiences to brands
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-10 sm:mb-16">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
              >
                Explore Our Work
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <a
                href="/about/our-story"
                className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:border-primary hover:text-primary transition-all"
              >
                Our Story
              </a>
            </div>

            {/*<div className="flex flex-wrap gap-6 lg:gap-16">
              <div className="hero-stat">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  200+
                </p>
                <p className="text-sm text-foreground/40 mt-1">
                  Activations Delivered
                </p>
              </div>
              <div className="hero-stat">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  50M+
                </p>
                <p className="text-sm text-foreground/40 mt-1">
                  People Reached
                </p>
              </div>
              <div className="hero-stat">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  12
                </p>
                <p className="text-sm text-foreground/40 mt-1">Countries</p>
              </div>
              <div className="hero-stat">
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  50+
                </p>
                <p className="text-sm text-foreground/40 mt-1">
                  Industry Awards
                </p>
              </div>
            </div>*/}
          </div>

          {/* Right — Looping video */}
          <div className="hero-video relative order-1 lg:order-2" data-scroll data-scroll-speed="0.08">
            <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl lg:rounded-sm overflow-hidden border border-foreground/10 shadow-2xl shadow-primary/5">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/videos/cinematic-showcase.mp4"
                  type="video/mp4"
                />
              </video>
              {/*<div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-l from-transparent to-background/20" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-medium">
                    Live Reel
                  </span>
                </div>
                <p className="text-sm text-foreground/40">
                  A glimpse into our world of experiential design
                </p>
              </div>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/30">
          Scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-foreground/30 to-transparent" />
      </div>
    </section>
  );
}
