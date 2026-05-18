"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";


const footerLinks = {
  Services: [
    { label: "Brand Activations", href: "/services/brand-activations" },
    { label: "Event Production", href: "/services/event-production" },
    { label: "Immersive Installations", href: "/services/immersive-installations" },
    { label: "Digital Experiences", href: "/services/digital-experiences" },
    { label: "Pop-Up Experiences", href: "/services/pop-up-experiences" },
    { label: "Experiential Strategy", href: "/services/experiential-strategy" },
  ],
  Company: [
    { label: "Our Story", href: "/about/our-story" },
    { label: "Our Work", href: "/#work" },
    { label: "Careers", href: "/careers" },
    { label: "Meet the Team", href: "/about/meet-the-team" },
  ],
  Resources: [
    { label: "Journal", href: "/journal" },
    { label: "Case Studies", href: "/journal" },
    { label: "Industry Reports", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-360 mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter">
               <Image src="/keskese-logo.png" alt="KESKESE Limited Logo" width={150} height={100} />
              </span>
            </Link>
            <p className="text-sm text-foreground/30 leading-relaxed max-w-xs">
              An award-winning experiential marketing agency creating 
              unforgettable brand experiences worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/30 hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-foreground/20">
            &copy; {new Date().getFullYear()} KESKESE Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-foreground/20 hover:text-foreground/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-foreground/20 hover:text-foreground/50 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-xs text-foreground/20 hover:text-foreground/50 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
