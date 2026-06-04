"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STOCK_IMAGES, STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ambientImages = [
  {
    src: STOCK_IMAGES[0],
    className: "top-[6%] -left-16 w-[22rem] h-[26rem] -rotate-6",
    speed: 0.15,
  },
  {
    src: STOCK_IMAGES[1],
    className: "top-[28%] -right-20 w-[26rem] h-[20rem] rotate-5",
    speed: 0.22,
  },
  {
    src: STOCK_IMAGES[2],
    className: "bottom-[12%] left-[4%] w-[20rem] h-[24rem] rotate-3",
    speed: 0.18,
  },
  {
    src: STOCK_IMAGES[5],
    className: "bottom-[22%] right-[8%] w-[18rem] h-[22rem] -rotate-4",
    speed: 0.12,
  },
  {
    src: STOCK_IMAGES[7],
    className: "top-[48%] left-[38%] w-[16rem] h-[18rem] rotate-2",
    speed: 0.1,
  },
];

export default function AmbientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ambientImages.forEach((_, i) => {
        gsap.to(`.ambient-img-${i}`, {
          y: -80 * ambientImages[i].speed * 4,
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
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-[0.035] blur-sm saturate-[0.85] dark:opacity-[0.045] dark:blur-0 dark:saturate-50"
      >
        <source src={STOCK_VIDEOS.concert} type="video/mp4" />
      </video>

      {ambientImages.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={img.src}
          alt=""
          className={`ambient-img-${i} absolute ${img.className} object-cover rounded-[2rem] opacity-[0.15] blur-md saturate-[0.88] mix-blend-soft-light dark:rounded-3xl dark:opacity-[0.07] dark:blur-[3px] dark:saturate-50 dark:mix-blend-normal`}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(176,42,118,0.07)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_at_30%_20%,rgba(176,42,118,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_85%,rgba(217,79,160,0.06)_0%,transparent_55%)] dark:bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,79,160,0.06)_0%,transparent_50%)]" />

      {/* Blend scrims — melt imagery into the page */}
      <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/25 to-background/90 dark:from-transparent dark:via-transparent dark:to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-background/75 via-background/15 to-background/85 dark:from-transparent dark:via-transparent dark:to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,transparent_20%,var(--background)_88%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_60%,rgba(10,10,10,0.45)_100%)]" />

      <div className="ambient-grain absolute inset-0 opacity-[0.02] dark:opacity-[0.035]" />
    </div>
  );
}
