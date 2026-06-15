import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Preloader from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem("keskese-theme");if(t==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");}catch(e){}})();`;

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
