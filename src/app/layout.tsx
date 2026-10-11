import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingFeedback from "@/components/FloatingFeedback";
import BackgroundSystem from "@/components/BackgroundSystem";
import { CommandPalette } from "@/components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SUCHARITHA REDDY VAKAMALLA | Pharmaceutical Analysis & Quality Systems",
  description: "MSc Pharmaceutical Analysis Scholar at Queen's University Belfast. Over 12 months laboratory experience in formulation QC, HPLC & GC chromatography, and Good Laboratory Practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-blue-500/30`}
      >
        <CommandPalette />
        <BackgroundSystem />
        <SmoothScroll>
          <div className="relative min-h-screen">
            <Navbar />
            <FloatingFeedback />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
