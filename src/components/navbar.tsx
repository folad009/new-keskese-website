"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    label: "Services",
    href: "/#services",
    submenu: [
      { label: "Brand Activations", href: "/services/brand-activations" },
      { label: "Event Production", href: "/services/event-production" },
      { label: "Immersive Installations", href: "/services/immersive-installations" },
      { label: "Digital Experiences", href: "/services/digital-experiences" },
      { label: "Pop-Up Experiences", href: "/services/pop-up-experiences" },
      { label: "Experiential Strategy", href: "/services/experiential-strategy" },
    ],
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "/about/our-story",
    submenu: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Meet the Team", href: "/about/meet-the-team" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative z-50">
            <Image src="/keskese-logo.png" alt="KESKESE Limited Logo" width={150} height={100} />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveMenu(link.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative"
                >
                  {link.label}
                  {link.submenu && (
                    <span className="ml-1 text-xs">+</span>
                  )}
                </Link>

                {link.submenu && activeMenu === link.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-60">
                    <div className="bg-card border border-border rounded-xl p-2 shadow-2xl">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="flex items-center justify-between px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-all group/item"
                        >
                          {sub.label}
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:brightness-110 transition-all hover:scale-105"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-background z-40 pt-24">
          <div className="px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl font-bold py-3 text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1 mb-2">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg text-foreground/40 hover:text-primary transition-colors py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-8">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold"
              >
                Get in touch
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
