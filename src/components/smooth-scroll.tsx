"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", onScroll);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
