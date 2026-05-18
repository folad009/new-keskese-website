"use client";

import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/announcement-bar";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ClientMarquee from "@/components/client-marquee";
import AboutSection from "@/components/about-section";
import FeaturedWork from "@/components/featured-work";
import ServicesSection from "@/components/services-section";
import TextMarquee from "@/components/text-marquee";
import LegacySection from "@/components/legacy-section";
import BlogSection from "@/components/blog-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

const SmoothScroll = dynamic(() => import("@/components/smooth-scroll"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/custom-cursor"), {
  ssr: false,
});

const AlpineProvider = dynamic(() => import("@/components/alpine-provider"), {
  ssr: false,
});

export default function Home() {
  return (
    <AlpineProvider>
    <SmoothScroll>
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <AboutSection />
        <FeaturedWork />
        <ServicesSection />
        <TextMarquee />
        <LegacySection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </SmoothScroll>
    </AlpineProvider>
  );
}
