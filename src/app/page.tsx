"use client";

import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/announcement-bar";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ClientMarquee from "@/components/client-marquee";
import AboutSection from "@/components/about-section";
import FeaturedWork from "@/components/featured-work";
import VideoBreakSection from "@/components/video-break-section";
import ServicesSection from "@/components/services-section";
import TextMarquee from "@/components/text-marquee";
import LegacySection from "@/components/legacy-section";
//import BlogSection from "@/components/blog-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import AmbientBackground from "@/components/ambient-background";


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
      <AmbientBackground />
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ClientMarquee />
        <AboutSection />
        <FeaturedWork />
        <VideoBreakSection />
        <ServicesSection />
        <TextMarquee />
        <LegacySection />
        {/*<BlogSection />*/}
        <CTASection />
        <Footer />
      </main>
    </SmoothScroll>
    </AlpineProvider>
  );
}
