import HeroSlider from "@/components/ui/HeroSlider";
import ServicesSection from "@/components/ui/ServicesSection";
import AboutPage from "./about/page";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <ServicesSection />
      <AboutPage/>
      <ContactSection />
    </main>
  );
}
