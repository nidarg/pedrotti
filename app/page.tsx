import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import Locations from "@/components/Locations";
import FleetGallery from "@/components/FleetGallery";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-24 text-zinc-900">
      <Hero />
      <Services />
      <FleetGallery />
      <Locations />
      <StickyMobileBar />
    </main>
  );
}