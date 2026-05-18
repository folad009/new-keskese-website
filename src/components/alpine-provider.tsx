"use client";

import { useEffect } from "react";

export default function AlpineProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initAlpine = async () => {
      const Alpine = (await import("alpinejs")).default;

      Alpine.data("navScroll", () => ({
        scrolled: false,
        init() {
          window.addEventListener("scroll", () => {
            (this as Record<string, unknown>).scrolled = window.scrollY > 50;
          });
        },
      }));

      Alpine.data("reveal", () => ({
        visible: false,
        init() {
          const self = this as Record<string, unknown>;
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  self.visible = true;
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.1 }
          );
          observer.observe(self.$el as Element);
        },
      }));

      if (!window.Alpine) {
        window.Alpine = Alpine;
        Alpine.start();
      }
    };

    initAlpine();
  }, []);

  return <>{children}</>;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window {
    Alpine: any;
  }
}
