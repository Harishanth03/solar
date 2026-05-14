import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

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
  title: "Solar Star Énergie — Solutions solaires",
  description:
    "Solutions solaires pour particuliers et entreprises au Canada — installation, entretien et accompagnement.",
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
      <body className="min-h-screen overflow-x-hidden flex flex-col">
        <LanguageProvider>
          <Navbar />
          <ParticleBackground />
          <div className="flex-1">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}