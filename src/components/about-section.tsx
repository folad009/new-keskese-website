"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-heading-word", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".about-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".about-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".about-cards",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} id="about" className="py-10 lg:py-16">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <div className="about-heading overflow-hidden">
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
                <span className="about-heading-word inline-block">
                  Our
                </span>{" "}
                <span className="about-heading-word inline-block text-gradient">
                  Philosophy
                </span>
              </h2>
            </div>

            <div className="about-text mt-8 space-y-6">
              <p className="text-lg text-foreground/50 leading-relaxed">
                Our campaigns and productions will create connections that
                positively influence how internal and external audiences feel,
                think and act about brands, products and services.
              </p>
              <p className="text-lg text-foreground/50 leading-relaxed">
                Such campaigns will ignite improved performance, increase sales
                and build strong brand loyalty.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="/about/our-story"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Our Story
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-foreground/50 font-semibold hover:text-foreground hover:gap-3 transition-all"
                >
                  Our Services
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="about-image relative aspect-4/5 rounded-2xl overflow-hidden bg-secondary">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-[#d94fa0]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">K</span>
                </div>
                <p className="text-foreground/30 text-sm uppercase tracking-widest">
                  Since 2018
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cards grid md:grid-cols-4 gap-6">
          <div className="about-card bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group">
            <p className="text-4xl font-bold text-primary mb-4">30+</p>
            <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
        
          </div>
          <div className="about-card bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group">
            <p className="text-4xl font-bold text-primary mb-4">10,000+</p>
            <h3 className="text-xl font-semibold mb-2">Successful Activations</h3>
        
          </div>
          <div className="about-card bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group">
            <p className="text-4xl font-bold text-primary mb-4">2,000+</p>
            <h3 className="text-xl font-semibold mb-2">Successful Events</h3>
           
          </div>
          <div className="about-card bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group">
            <p className="text-4xl font-bold text-primary mb-4">1,000,000+</p>
            <h3 className="text-xl font-semibold mb-2">Consumers Reached</h3>
           
          </div>
        </div>
      </div>
    </section>
  );
}
