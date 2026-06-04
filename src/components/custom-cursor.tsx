"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINK_SELECTOR = "a, button, [role='button']";
const ICON_SELECTOR = "[data-cursor='icon']";
const CARD_SELECTOR = "[data-cursor='card']";

function getCursorRingColor() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue("--cursor-ring")
      .trim() || "rgba(0, 0, 0, 0.18)"
  );
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const activeTargetRef = useRef<"default" | "link" | "icon" | "card">(
    "default",
  );

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const resetCursor = () => {
      activeTargetRef.current = "default";
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        borderColor: getCursorRingColor(),
        backgroundColor: "transparent",
      });
    };

    const setLinkCursor = () => {
      if (activeTargetRef.current === "link") return;
      activeTargetRef.current = "link";
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      gsap.to(follower, {
        scale: 1.5,
        duration: 0.3,
        borderColor: "#B02A76",
        backgroundColor: "transparent",
      });
    };

    const setIconCursor = (iconEl: Element) => {
      activeTargetRef.current = "icon";
      gsap.to(cursor, { scale: 0, duration: 0.2 });
      gsap.to(follower, {
        scale: 2.2,
        duration: 0.35,
        borderColor: "#B02A76",
        backgroundColor: "rgba(176, 42, 118, 0.12)",
      });
      gsap.to(iconEl, {
        scale: 1.25,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    };

    const setCardCursor = () => {
      if (activeTargetRef.current === "card") return;
      activeTargetRef.current = "card";
      gsap.to(cursor, { scale: 0.3, duration: 0.3 });
      gsap.to(follower, {
        scale: 2.8,
        duration: 0.4,
        borderColor: "#d94fa0",
        backgroundColor: "rgba(176, 42, 118, 0.08)",
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    let hoveredIcon: Element | null = null;

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const icon = target.closest(ICON_SELECTOR);
      const card = target.closest(CARD_SELECTOR);
      const link = target.closest(LINK_SELECTOR);

      if (icon && icon !== hoveredIcon) {
        if (hoveredIcon) {
          gsap.to(hoveredIcon, { scale: 1, duration: 0.25 });
        }
        hoveredIcon = icon;
        setIconCursor(icon);
        return;
      }

      if (card && !icon) {
        setCardCursor();
        return;
      }

      if (link && !icon) {
        setLinkCursor();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      const target = e.target as Element;

      const icon = target.closest(ICON_SELECTOR);
      if (icon && (!related || !icon.contains(related))) {
        gsap.to(icon, { scale: 1, duration: 0.25 });
        if (hoveredIcon === icon) hoveredIcon = null;
      }

      if (
        !related ||
        (!related.closest(LINK_SELECTOR) &&
          !related.closest(ICON_SELECTOR) &&
          !related.closest(CARD_SELECTOR))
      ) {
        resetCursor();
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    const themeObserver = new MutationObserver(() => {
      if (activeTargetRef.current === "default") {
        gsap.to(follower, {
          borderColor: getCursorRingColor(),
          duration: 0.2,
        });
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      themeObserver.disconnect();
      if (hoveredIcon) gsap.set(hoveredIcon, { scale: 1 });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 hidden lg:block dark:mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-border rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      />
    </>
  );
}
