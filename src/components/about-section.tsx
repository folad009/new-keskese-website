"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import PopHeading from "@/components/pop-heading";

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
    <section ref={containerRef} id="about" data-scroll data-scroll-class="is-inview" className="py-10 sm:py-12 lg:py-16">
      <div className="max-w-495 mx-auto page-x">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24 lg:items-stretch lg:min-h-[26rem] xl:min-h-[30rem] mb-12 sm:mb-16 lg:mb-24">
          <div className="flex flex-col justify-center">
            <div className="about-heading overflow-hidden">
              <PopHeading as="h2" className="heading-display">
                <PopHeading.Line inline className="about-heading-word">
                  Our
                </PopHeading.Line>{" "}
                <PopHeading.Line
                  inline
                  className="about-heading-word text-gradient"
                >
                  Philosophy
                </PopHeading.Line>
              </PopHeading>
            </div>

            <div className="about-text mt-6 sm:mt-8 space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-foreground/50 leading-relaxed">
                Our campaigns and productions will create connections that
                positively influence how internal and external audiences feel,
                think and act about brands, products and services.
              </p>
              <p className="text-base sm:text-lg text-foreground/50 leading-relaxed">
                Such campaigns will ignite improved performance, increase sales
                and build strong brand loyalty.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
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

          <div
            className="about-image relative aspect-4/5 lg:aspect-auto lg:h-full lg:min-h-[26rem] xl:min-h-[30rem] min-h-[320px] sm:min-h-[380px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-secondary"
            data-scroll
            data-scroll-speed="0.06"
          >
            <Image
              src="/images/keskese-about-section-image.jpg"
              alt="Keskese experiential event production"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-[#d94fa0]/20" />
            {/*<div className="absolute bottom-6 left-6 right-6">
              <p className="text-foreground/80 text-sm uppercase tracking-widest font-medium">
                Since 2018
              </p>
              <p className="text-foreground/50 text-sm mt-1">
                Crafting experiences across Africa & beyond
              </p>
            </div>*/}
          </div>
        </div>

        <div className="about-cards grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="about-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/30 transition-colors group">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">30+</p>
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2">Happy Clients</h3>
        
          </div>
          <div className="about-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/30 transition-colors group">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">10,000+</p>
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2">Past Activations</h3>
        
          </div>
          <div className="about-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/30 transition-colors group">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">2,000+</p>
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2">Past Events</h3>
           
          </div>
          <div className="about-card bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/30 transition-colors group">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">1,000,000+</p>
            <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-2">Consumers Reached</h3>
           
          </div>
        </div>
      </div>
    </section>
  );
}
