"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PopHeading from "@/components/pop-heading";
import "./hero-carousel-slider.css";

const AUTOPLAY_MS = 6000;

const HERO_IMAGES = {
  six: "/images/keskese-web-1.jpg",
  eight: "/images/keskese-web-2.jpg",
  fortyOne: "/images/keskese-web-3.jpg",
  fifty: "/images/keskese-web-4.jpg",
} as const;

type Slide = {
  id: string;
  label: string;
  image: string;
  video?: string;
};

const slides: Slide[] = [
  {
    id: "showcase",
    label: "Brand activation experience",
    image: HERO_IMAGES.six,
    video: "/videos/cinematic-showcase.mp4",
  },
  {
    id: "live-event",
    label: "Live event production",
    image: HERO_IMAGES.eight,
  },
  {
    id: "festival",
    label: "Festival activation",
    image: HERO_IMAGES.fortyOne,
  },
  {
    id: "experiential",
    label: "Experiential marketing",
    image: HERO_IMAGES.fifty,
  },
  {
    id: "activation",
    label: "Brand activation",
    image: HERO_IMAGES.six,
  },
  {
    id: "production",
    label: "Event production",
    image: HERO_IMAGES.eight,
  },
];

export default function HeroCarouselSlider() {
  const [orderedSlides, setOrderedSlides] = useState(() => [...slides]);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const activeSlide = orderedSlides[1];
  const activeIndex = slides.findIndex((slide) => slide.id === activeSlide.id);

  const goToSlide = useCallback((targetIndex: number) => {
    const targetId = slides[targetIndex].id;
    setOrderedSlides((current) => {
      const currentIndex = current.findIndex((slide) => slide.id === targetId);
      if (currentIndex === 1) return current;

      const steps = (currentIndex - 1 + current.length) % current.length;
      let next = [...current];
      for (let i = 0; i < steps; i += 1) {
        const [first, ...rest] = next;
        next = [...rest, first];
      }
      return next;
    });
  }, []);

  const goNext = useCallback(() => {
    setOrderedSlides((current) => {
      const [first, ...rest] = current;
      return [...rest, first];
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, activeSlide?.id]);

  useEffect(() => {
    orderedSlides.forEach((slide, index) => {
      const video = videoRefs.current.get(slide.id);
      if (!video) return;

      if (index === 1) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [orderedSlides]);

  return (
    <section
      className="hc-slider-section"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hc-slider-main">
        <ul className="hc-slider">
          {orderedSlides.map((slide, index) => {
            const isBackdrop = index <= 1;
            const isActive = index === 1;
            const isPreview = index >= 2 && index <= 4;
            const isAboveFoldImage = isBackdrop || isPreview;

            return (
              <li
                key={slide.id}
                className={`hc-slider__item${
                  isBackdrop
                    ? " hc-slider__item--backdrop"
                    : isPreview
                      ? " hc-slider__item--preview"
                      : " hc-slider__item--preview-hidden"
                }`}
                aria-hidden={!isActive && !isPreview}
              >
                {slide.video && isActive ? (
                  <video
                    ref={(node) => {
                      if (node) videoRefs.current.set(slide.id, node);
                      else videoRefs.current.delete(slide.id);
                    }}
                    className="hc-slider__media hc-slider__media--cover"
                    src={slide.video}
                    poster={slide.image}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <div className="hc-slider__media-wrap">
                    <Image
                      src={slide.image}
                      alt={slide.label}
                      fill
                      loading={isAboveFoldImage ? "eager" : "lazy"}
                      sizes={isBackdrop ? "100vw" : "220px"}
                      className="hc-slider__media hc-slider__media--cover"
                    />
                  </div>
                )}

                {isActive && (
                  <div className="hc-slider__content hc-slider__content--active font-sans">
                    <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white font-bold mb-4 sm:mb-8">
                      Experiential Marketing Agency
                    </p>

                    <PopHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6 sm:mb-8 text-wrap-balance text-white">
                      <PopHeading.Line>We Create Unforgettable</PopHeading.Line>
                      <PopHeading.Line className="text-gradient">
                        Experiences
                      </PopHeading.Line>
                    </PopHeading>

                    {/*<p className="text-base sm:text-lg md:text-xl text-white/50 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                      Brand activations, immersive installations, and live
                      experiences that connect audiences to brands
                    </p>*/}

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
                      <Link
                        href="#work"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
                      >
                        Explore Our Work
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href="/about/our-story"
                        className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:border-primary hover:text-primary transition-all"
                      >
                        Our Story
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <nav className="hc-slider__dots" aria-label="Carousel pagination">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hc-slider__dot${
                activeIndex === index ? " hc-slider__dot--active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.label}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => goToSlide(index)}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}
