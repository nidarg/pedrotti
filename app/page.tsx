import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import FleetGallery from "@/components/FleetGallery";
import Locations from "@/components/Locations";
import LegalFooter from "@/components/LegalFooter";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-24 text-zinc-900">
      <Hero />
      <Services />
      <FleetGallery />
      <Locations />
      <LegalFooter />
      <StickyMobileBar />
    </main>
  );
}