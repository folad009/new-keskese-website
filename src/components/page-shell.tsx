"use client";

import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/announcement-bar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const SmoothScroll = dynamic(() => import("@/components/smooth-scroll"), {
  ssr: false,
});

const CustomCursor = dynamic(() => import("@/components/custom-cursor"), {
  ssr: false,
});

const AmbientBackground = dynamic(
  () => import("@/components/ambient-background"),
  { ssr: false },
);

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <main className="relative z-10">
        {children}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
