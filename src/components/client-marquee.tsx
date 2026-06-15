"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { clientLogos } from "@/lib/client-logos";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ClientMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeLogos = [...clientLogos, ...clientLogos];

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
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="py-12 sm:py-14 lg:py-20 border-y border-border overflow-hidden bg-card/40 dark:bg-card/60"
    >
      <p className="text-center text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/60 font-medium mb-10 sm:mb-12 page-x">
        Trusted by the world&apos;s most ambitious brands
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track items-center gap-4 sm:gap-6">
          {marqueeLogos.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="client-item flex-shrink-0"
            >
              <div className="flex h-20 sm:h-24 md:h-28 min-w-[10.5rem] sm:min-w-[12rem] md:min-w-[14rem] items-center justify-center rounded-xl bg-white px-5 sm:px-6 py-3 shadow-sm ring-1 ring-black/5 dark:shadow-md dark:ring-white/10">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  width={320}
                  height={160}
                  className="h-12 sm:h-14 md:h-16 lg:h-[4.5rem] w-auto max-w-[9rem] sm:max-w-[10.5rem] md:max-w-[12rem] object-contain"
                  style={{ width: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
