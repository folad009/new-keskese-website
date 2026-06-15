"use client";

import {
  useRef,
  useCallback,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";

type PopHeadingProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

type PopHeadingLineProps = {
  children: string;
  className?: string;
};

function PopWord({ text, className }: { text: string; className?: string }) {
  const accentClass = className ?? "text-primary";

  return (
    <span className="pop-heading__word relative inline-block overflow-hidden align-bottom leading-[1.05] h-[1.05em]">
      <span className="pop-heading__stack inline-block will-change-transform">
        <span className={`block whitespace-nowrap ${className ?? ""}`}>
          {text}
        </span>
        <span className={`block whitespace-nowrap ${accentClass}`}>{text}</span>
      </span>
    </span>
  );
}

function PopHeadingLine({ children, className = "" }: PopHeadingLineProps) {
  const words = children.trim().split(/\s+/);

  return (
    <span className={`block ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block">
          <PopWord text={word} className={className || undefined} />
          {index < words.length - 1 ? (
            <span className="inline-block w-[0.28em]" aria-hidden />
          ) : null}
        </span>
      ))}
    </span>
  );
}

function PopHeadingRoot({
  as: Tag = "h1",
  className = "",
  children,
}: PopHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  const animate = useCallback((direction: "up" | "down") => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stacks = ref.current?.querySelectorAll(".pop-heading__stack");
    if (!stacks?.length) return;

    gsap.to(stacks, {
      y: direction === "up" ? "-50%" : "0%",
      duration: 0.48,
      stagger: 0.032,
      ease: direction === "up" ? "back.out(2.2)" : "power2.inOut",
      overwrite: "auto",
    });
  }, []);

  return (
    <Tag
      ref={ref}
      className={`pop-heading cursor-default outline-none ${className}`}
      onMouseEnter={() => animate("up")}
      onMouseLeave={() => animate("down")}
      onFocus={() => animate("up")}
      onBlur={() => animate("down")}
      tabIndex={0}
    >
      {children}
    </Tag>
  );
}

const PopHeading = Object.assign(PopHeadingRoot, {
  Line: PopHeadingLine,
});

export default PopHeading;
export { PopHeadingLine };
