"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TextMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".text-scroll-1", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".text-scroll-2", {
        xPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: containerRef }
  );

  const line1 = "Creating Experiences ";
  const line2 = "Not Just Campaigns ";

  return (
    <section
      ref={containerRef}
      className="py-10 lg:py-16 overflow-hidden border-y border-border"
    >
      <div className="space-y-4">
        <div className="text-scroll-1 whitespace-nowrap ml-[-20%]">
          <span className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground/6 uppercase tracking-tight">
            {line1.repeat(6)}
          </span>
        </div>
        <div className="text-scroll-2 whitespace-nowrap ml-[-40%]">
          <span className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary/10 uppercase tracking-tight">
            {line2.repeat(6)}
          </span>
        </div>
      </div>
    </section>
  );
}
