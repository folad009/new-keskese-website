"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Preloader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      const increment = current < 70 ? Math.random() * 12 + 3 : Math.random() * 4 + 1;
      current = Math.min(current + increment, 100);
      setProgress(Math.round(current));

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (!loaderRef.current) return;

          const tl = gsap.timeline({
            onComplete: () => {
              setDone(true);
              document.body.style.overflow = "";
            },
          });

          tl.to(".loader-content", {
            y: -30,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
          })
            .to(
              ".loader-col",
              {
                scaleY: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "power4.inOut",
                transformOrigin: "top",
              },
              "-=0.1"
            )
            .to(
              loaderRef.current,
              { opacity: 0, duration: 0.3, pointerEvents: "none" },
              "-=0.2"
            );
        }, 400);
      }
    }, 60);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center"
    >
      {/* Column strips background */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="loader-col flex-1 bg-background" />
        ))}
      </div>

      {/* Content */}
      <div className="loader-content relative z-10 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-1 text-3xl md:text-4xl font-bold tracking-tight">
          <Image
            src="/keskese-logo.png"
            alt="KESKESE Limited Logo"
            width={400}
            height={200}
            priority
            className="h-12 w-auto md:h-16"
            style={{ width: "auto" }}
          />
        </div>

        {/* Progress bar */}
        <div className="w-48 md:w-64">
          <div className="h-0.5 bg-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/25">
              Loading
            </span>
            <span className="text-xs font-mono text-foreground/40 tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
