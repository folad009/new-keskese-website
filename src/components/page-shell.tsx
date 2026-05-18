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

const AlpineProvider = dynamic(() => import("@/components/alpine-provider"), {
  ssr: false,
});

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <AlpineProvider>
      <SmoothScroll>
        <CustomCursor />
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </AlpineProvider>
  );
}
