import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Preloader from "@/components/preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KESKESE | Experiential Marketing Agency",
  description:
    "Award-winning experiential marketing agency crafting immersive brand activations, events & installations that connect people with brands.",
  keywords: [
    "experiential marketing",
    "brand activations",
    "event production",
    "immersive experiences",
    "pop-up events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden" suppressHydrationWarning>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
