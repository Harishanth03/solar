import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/ui/Navbar";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Solar Star — Énergie Solaire",
  description: "Solutions solaires pour particuliers et entreprises au Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <Navbar />
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}