import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/announcement-bar";
import Navbar from "@/components/navbar";
import HeroCarouselSlider from "@/components/hero-carousel-slider";
import ClientMarquee from "@/components/client-marquee";
import HomeProviders from "@/components/home-providers";

const AboutSection = dynamic(() => import("@/components/about-section"));
const FeaturedWork = dynamic(() => import("@/components/featured-work"));
const VideoBreakSection = dynamic(
  () => import("@/components/video-break-section"),
);
const ServicesSection = dynamic(() => import("@/components/services-section"));
const TextMarquee = dynamic(() => import("@/components/text-marquee"));
const LegacySection = dynamic(() => import("@/components/legacy-section"));
const CTASection = dynamic(() => import("@/components/cta-section"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <HomeProviders>
      <AnnouncementBar />
      <Navbar />
      <main className="relative z-10">
        <HeroCarouselSlider />
        <ClientMarquee />
        <AboutSection />
        <FeaturedWork />
        <VideoBreakSection />
        <ServicesSection />
        <TextMarquee />
        <LegacySection />
        <CTASection />
        <Footer />
      </main>
    </HomeProviders>
  );
}