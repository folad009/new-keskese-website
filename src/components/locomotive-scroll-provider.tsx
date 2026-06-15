"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const locomotive = new LocomotiveScroll({
      lenisOptions: {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        smoothWheel: true,
        anchors: true,
      },
      scrollCallback: () => {
        ScrollTrigger.update();
      },
      initCustomTicker: (render) => {
        gsap.ticker.add(render);
      },
      destroyCustomTicker: (render) => {
        gsap.ticker.remove(render);
      },
      autoStart: true,
    });

    const refresh = () => {
      locomotive.resize();
      ScrollTrigger.refresh();
    };

    refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    const delayedRefresh = window.setTimeout(refresh, 600);

    return () => {
      window.clearTimeout(delayedRefresh);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      locomotive.destroy();
    };
  }, []);

  return <>{children}</>;
}
