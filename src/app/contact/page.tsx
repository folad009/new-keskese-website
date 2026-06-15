"use client";

import { useRef, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Send,
  Mail,
  Phone,
} from "lucide-react";
import PageShell from "@/components/page-shell";
import VideoBreakSection from "@/components/video-break-section";
import PopHeading from "@/components/pop-heading";
import { STOCK_VIDEOS } from "@/lib/visual-assets";

gsap.registerPlugin(ScrollTrigger, useGSAP);


export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.from(".contact-map", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power4.out",
      });
    },
    { scope: heroRef },
  );

  useGSAP(
    () => {
      gsap.from(".form-section", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: formRef },
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full bg-card border border-border rounded-xl px-5 py-4 text-sm text-foreground placeholder:text-foreground/25 outline-none focus:border-primary/50 transition-colors";

  return (
    <PageShell>
      {/* Map Hero */}
      <section ref={heroRef} className="relative pt-20">
        <div className="contact-map relative w-full h-[60vh] min-h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.736227984135!2d3.3587267739203712!3d6.554946572799339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d92f4647123%3A0x47bb8bdfb4dd2400!2s10%20Olowogbowo%20St%2C%20Ilupeju%2C%20Lagos%20102215%2C%20Lagos!5e0!3m2!1sen!2sng!4v1779110845232!5m2!1sen!2sng"
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 dark:invert"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Keskese Limited HQ"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/60 via-transparent to-background pointer-events-none" />
        </div>
      </section>

      {/*<VideoBreakSection
        compact
        eyebrow="Get in Touch"
        line1="Let&apos;s Design Your"
        line2="Next Experience"
        subtext="Whether it&apos;s a product launch, brand activation, or immersive installation — we&apos;d love to hear from you."
        videoSrc={STOCK_VIDEOS.concert}
        primaryCta={{ href: "#contact-form", label: "Start a Project" }}
        secondaryCta={{ href: "tel:+2348034022383", label: "Book a Call" }}
        showStats={false}
      />*/}

      {/* Form + Info */}
      <section ref={formRef} id="contact-form" className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-360 mx-auto page-x">
          <div className="form-section grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <PopHeading as="h2" className="text-3xl md:text-4xl font-bold mb-2">
                <PopHeading.Line inline>Start a</PopHeading.Line>{" "}
                <PopHeading.Line inline className="text-gradient">
                  Project
                </PopHeading.Line>
              </PopHeading>
              <p className="text-foreground/40 mb-10">
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>

              {submitted ? (
                <div className="bg-card border border-primary/30 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent</h3>
                  <p className="text-foreground/40 max-w-md mx-auto">
                    Thanks for reaching out. A member of our team will be in
                    touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="">Budget Range</option>
                      <option value="under-50k">Under $50K</option>
                      <option value="50k-100k">$50K – $100K</option>
                      <option value="100k-250k">$100K – $250K</option>
                      <option value="250k-500k">$250K – $500K</option>
                      <option value="500k-plus">$500K+</option>
                    </select>
                  </div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">What are you looking for?</option>
                    <option value="brand-activations">
                      Brand Activations
                    </option>
                    <option value="event-production">Event Production</option>
                    <option value="immersive-installations">
                      Immersive Installations
                    </option>
                    <option value="digital-experiences">
                      Digital Experiences
                    </option>
                    <option value="pop-up-experiences">
                      Pop-Up Experiences
                    </option>
                    <option value="experiential-strategy">
                      Experiential Strategy
                    </option>
                    <option value="other">Something Else</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-105 cursor-pointer"
                  >
                    Send Message
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-lg font-semibold mb-4">General Enquiries</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:intouch@keskese-ng.com"
                    className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    intouch@keskese-ng.com
                  </a>
                  <a
                    href="tel:+2348034022383"
                    className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                     +234 803 402 2383
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">New Business</h3>
                <a
                  href="mailto:newbusiness@keskese-ng.com"
                  className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  newbusiness@keskese-ng.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Careers</h3>
                <a
                  href="mailto:careers@keskese-ng.com"
                  className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm mb-2"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  careers@keskese-ng.com
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all mt-1"
                >
                  View Open Roles
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Press</h3>
                <a
                  href="mailto:press@keskese-ng.com"
                  className="flex items-center gap-3 text-foreground/50 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  press@keskese-ng.com
                </a>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Prefer a call?
                </h3>
                <p className="text-foreground/40 text-sm mb-4">
                  Make an introductory call to a member of our new business team.
                </p>
                <a
                  href="tel:+2348034022383"
                  className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all"
                >
                  Make a Call
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studios 
      <section ref={studiosRef} className="section-y-lg bg-card">
        <div className="max-w-360 mx-auto page-x">
          <PopHeading
            as="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16"
          >
            <PopHeading.Line inline>Our</PopHeading.Line>{" "}
            <PopHeading.Line inline className="text-gradient">
              Studios
            </PopHeading.Line>
          </PopHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studios.map((studio, i) => (
              <div
                key={i}
                className="studio-card group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div
                  className={`aspect-video bg-linear-to-br ${studio.color} relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white/20">
                      {studio.city}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold">{studio.city}</h3>
                  <div className="space-y-2 text-sm text-foreground/40">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-foreground/20" />
                      {studio.address}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 shrink-0 text-foreground/20" />
                      <a
                        href={`mailto:${studio.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {studio.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 shrink-0 text-foreground/20" />
                      {studio.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0 text-foreground/20" />
                      {studio.hours}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Map placeholder / CTA 
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-360 mx-auto page-x text-center">
          <PopHeading as="h2" className="text-3xl md:text-4xl font-bold mb-6">
            <PopHeading.Line inline>
              4 Studios. 12 Markets. 1 Mission.
            </PopHeading.Line>
          </PopHeading>
          <p className="text-foreground/40 mb-8 max-w-lg mx-auto">
            Wherever your audience is, we can build an unforgettable experience
            for them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:brightness-110 transition-all hover:scale-105"
            >
              See Our Work
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about/our-story"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary hover:text-primary transition-all"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>*/}
    </PageShell>
  );
}
