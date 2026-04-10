import Hero from "@/components/hero/Hero";
import Services from "@/components/Services";
import FleetGallery from "@/components/FleetGallery";
import Locations from "@/components/Locations";
import LegalFooter from "@/components/LegalFooter";
import StickyMobileBar from "@/components/StickyMobileBar";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Pedrotti Srl - Soccorso Stradale Pedrotti",
  url: "https://www.soccorsostradalepedrotti.com",
  telephone: "+39 0464 913290",
  areaServed: ["Trento", "Mori", "Trentino", "A22"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Via Matteotti 3/C",
      addressLocality: "Mori",
      postalCode: "38065",
      addressCountry: "IT",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Loc. Roncafort 4",
      addressLocality: "Trento",
      postalCode: "38121",
      addressCountry: "IT",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <main className="min-h-screen bg-white pb-24 text-zinc-900">
        <Hero />
        <Services />
        <FleetGallery />
        <Locations />
        <LegalFooter />
        <StickyMobileBar />
      </main>
    </>
  );
}