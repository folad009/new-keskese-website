"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Box,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Brand Activations",
    href: "/services/brand-activations",
    description:
      "Beyond defining the immediate opportunity, audience and objectives, we dig deeper. We strive to understand your brand positioning, company culture, overall marketing strategies and tactics.",
    color: "group-hover:text-yellow-400",
    bg: "group-hover:bg-yellow-400/10",
  },
  {
    icon: Calendar,
    title: "Event Experience Production",
    href: "/services/event-production",
    description:
      "We take time to come up with creative concepts, which we implement using processes and assets necessary to the event to reality. Logistics are mapped, staff is readied, the program is launched and tactics are executed.",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-400/10",
  },
  {
    icon: Box,
    title: "Brand Exhibitions",
    href: "/services/immersive-installations",
    description:
      "Showcase your brand in style with our brand exhibitions. From design to execution, we create visually stunning exhibitions that highlight your brand's uniqueness. Our team specializes in designing and executing exhibitions.",
    color: "group-hover:text-purple-400",
    bg: "group-hover:bg-purple-400/10",
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const els = containerRef.current.querySelectorAll(".svc-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || "0");
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, delay * 1000);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-10 lg:py-16 bg-card">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div
          className="svc-animate flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
          data-delay="0"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Our
            <br />
            <span className="text-gradient">Services</span>
          </h2>
          <Link
            href="/services/brand-activations"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className={`svc-animate group relative bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer`}
                style={{
                  opacity: 0,
                  transform: "translateY(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease, border-color 0.5s ease",
                }}
                data-delay={String(0.1 + index * 0.1)}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-colors duration-500 ${service.bg}`}
                >
                  <Icon
                    className={`w-7 h-7 text-foreground/40 transition-colors duration-500 ${service.color}`}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-foreground/30 group-hover:text-primary transition-colors">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
