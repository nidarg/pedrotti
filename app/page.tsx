import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-24 text-zinc-900">
      <Hero />
      <Services />
      <StickyMobileBar />
    </main>
  );
}