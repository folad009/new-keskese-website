"use client";

import { useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Send } from "lucide-react";
import PopHeading from "@/components/pop-heading";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section ref={containerRef} id="contact" data-scroll data-scroll-class="is-inview" className="section-y-lg">
      <div className="max-w-495 mx-auto page-x">
        <div className="cta-content relative bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden" data-scroll data-scroll-speed="-0.04">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative px-5 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
            <div className="max-w-495 mx-auto text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary font-medium mb-4 sm:mb-6">
                Ready to create something unforgettable?
              </p>

              <PopHeading as="h2" className="heading-display mb-6 sm:mb-8">
                <PopHeading.Line>Let&apos;s Design Your Next Experience</PopHeading.Line>
              </PopHeading>

              {/*<p className="text-lg text-foreground/40 mb-12 max-w-xl mx-auto">
                Whether you&apos;re planning a product launch, brand activation,
                or immersive installation — we&apos;d love to hear from you.
              </p>*/}

              <div className="max-w-3xl mx-auto mb-5">
                <p className="text-sm text-foreground/30 mb-4">
                  Stay updated with our latest work & insights
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-secondary rounded-2xl sm:rounded-full p-2 sm:p-1.5"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3 sm:py-2.5 text-sm text-foreground placeholder:text-foreground/30 outline-none min-w-0"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground p-3 rounded-xl sm:rounded-full hover:brightness-110 transition-all self-end sm:self-auto"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-16">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
                >
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:border-primary hover:text-primary transition-all"
                >
                  Book a Call
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
