"use client";

import dynamic from "next/dynamic";

const LocomotiveScrollProvider = dynamic(
  () => import("@/components/locomotive-scroll-provider"),
  { ssr: false },
);

const CustomCursor = dynamic(() => import("@/components/custom-cursor"), {
  ssr: false,
});

const AmbientBackground = dynamic(
  () => import("@/components/ambient-background"),
  { ssr: false },
);

export default function HomeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocomotiveScrollProvider>
      <AmbientBackground />
      <CustomCursor />
      {children}
    </LocomotiveScrollProvider>
  );
}
