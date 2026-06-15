"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./ambient-background.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Star = {
  id: string;
  x: number;
  y: number;
  size: 1 | 2 | 3;
  opacity: number;
  accent: boolean;
  twinkle: boolean;
  twinkleDelay: number;
};

type StarLayer = {
  id: string;
  className: string;
  parallaxY: number;
  stars: Star[];
};

function seededRandom(seed: number) {
  let state = seed;

  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

function buildStars(count: number, seed: number, layerIndex: number): Star[] {
  const rand = seededRandom(seed);

  return Array.from({ length: count }, (_, index) => {
    const roll = rand();
    let size: 1 | 2 | 3 = 1;
    if (roll > 0.88) size = 3;
    else if (roll > 0.62) size = 2;

    return {
      id: `${layerIndex}-${index}`,
      x: rand() * 100,
      y: rand() * 100,
      size,
      opacity: 0.25 + rand() * 0.75,
      accent: layerIndex >= 2 && rand() > 0.94,
      twinkle: rand() > 0.72,
      twinkleDelay: rand() * 4,
    };
  });
}

const STAR_LAYERS: Omit<StarLayer, "stars">[] = [
  { id: "far", className: "ambient-stars__layer--far", parallaxY: -80 },
  { id: "mid", className: "ambient-stars__layer--mid", parallaxY: -160 },
  { id: "near", className: "ambient-stars__layer--near", parallaxY: -280 },
];

export default function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const layers = useMemo<StarLayer[]>(
    () =>
      STAR_LAYERS.map((layer, index) => ({
        ...layer,
        stars: buildStars(
          index === 0 ? 90 : index === 1 ? 70 : 45,
          4200 + index * 997,
          index,
        ),
      })),
    [],
  );

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      layers.forEach((layer) => {
        gsap.to(`.ambient-stars__parallax--${layer.id}`, {
          y: layer.parallaxY,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="ambient-stars fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden
    >
      <div className="ambient-stars__base" />

      {layers.map((layer) => (
        <div
          key={layer.id}
          className={`ambient-stars__layer ambient-stars__parallax--${layer.id} ${layer.className}`}
        >
          <div className="ambient-stars__field">
            {layer.stars.map((star) => (
              <span
                key={star.id}
                className={`ambient-stars__star${
                  star.accent ? " ambient-stars__star--accent" : ""
                }${star.twinkle ? " ambient-stars__star--twinkle" : ""}`}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                  opacity: star.opacity,
                  animationDelay: `${star.twinkleDelay}s`,
                }}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="ambient-stars__vignette" />
    </div>
  );
}
