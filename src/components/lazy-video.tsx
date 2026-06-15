"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = Omit<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  "src"
> & {
  src: string;
  rootMargin?: string;
};

export default function LazyVideo({
  src,
  rootMargin = "300px",
  preload = "metadata",
  ...props
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <video
      ref={ref}
      {...props}
      src={shouldLoad ? src : undefined}
      preload={shouldLoad ? preload : "none"}
    />
  );
}
