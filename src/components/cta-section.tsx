"use client";

import { useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Send } from "lucide-react";

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
    <section ref={containerRef} id="contact" className="py-24 lg:py-40">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="cta-content relative bg-card border border-border rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

          <div className="relative px-8 py-16 lg:px-10 lg:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6">
                Ready to create something unforgettable?
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                <span className="block">Let&apos;s Design Your</span>
                <span className="block text-gradient whitespace-nowrap">
                  Next Experience
                </span>
              </h2>

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
                  className="flex items-center gap-2 bg-secondary rounded-full p-1.5"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:brightness-110 transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
                >
                  Start a Project
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary hover:text-primary transition-all"
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
