import HeroSlider from "@/components/ui/HeroSlider";
import ServicesSection from "@/components/ui/ServicesSection";
import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection compactHeader />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </main>
  );
}
