"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clients = [
  "Nike", "Spotify", "Red Bull", "Samsung", "Adidas",
  "Tesla", "Netflix", "Apple", "Google", "Meta",
  "Amazon", "Coca-Cola", "BMW", "Sony", "Airbnb",
];

export default function ClientMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".client-item", {
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="py-16 border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-foreground/30 mb-10">
        Trusted by the world&apos;s most ambitious brands
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="client-item flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-xl md:text-2xl font-bold text-foreground/15 hover:text-foreground/40 transition-colors duration-300 whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
