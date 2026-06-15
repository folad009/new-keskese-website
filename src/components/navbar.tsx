"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "@/components/theme-toggle";

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "top-2 sm:top-3 px-2 sm:px-4 lg:px-8" : "top-4 sm:top-8 px-0"
      }`}
    >
      <div
        className={`max-w-495 mx-auto page-x transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border border-border/50 rounded-xl sm:rounded-2xl shadow-lg shadow-black/5 dark:bg-background/35 dark:border-border/40 dark:shadow-black/10"
            : ""
        }`}
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="relative z-50 shrink-0">
            <Image
              src="/keskese-logo.png"
              alt="KESKESE Limited Logo"
              width={150}
              height={100}
              priority
              className="h-8 sm:h-10 w-auto"
              style={{ width: "auto" }}
            />
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
                  className="px-4 py-2 text-lg font-bold text-foreground/70 hover:text-foreground transition-colors relative"
                >
                  {link.label}
                  {link.submenu && (
                    <span className="ml-1 text-md">+</span>
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

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:brightness-110 transition-all hover:scale-105"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="relative z-50 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-background z-40 pt-20 sm:pt-24 overflow-y-auto overscroll-contain">
          <div className="page-x py-6 sm:py-8 space-y-2 pb-[max(2rem,env(safe-area-inset-bottom))]">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl sm:text-4xl font-bold py-2.5 sm:py-3 text-foreground/70 hover:text-foreground transition-colors"
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
