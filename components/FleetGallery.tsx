import Image from "next/image";
import SectionContainer from "./layout/SectionContainer";

const fleetImages = [
  {
    src: "/images/fleet/tow-truck-1.jpg",
    alt: "Carro attrezzi Pedrotti per soccorso stradale",
    title: "Soccorso rapido",
  },
  {
    src: "/images/fleet/heavy-recovery.jpg",
    alt: "Recupero mezzi pesanti e autogrù Pedrotti",
    title: "Heavy recovery",
  },
  {
    src: "/images/fleet/workshop-lift.jpg",
    alt: "Autofficina e assistenza tecnica Pedrotti",
    title: "Autofficina",
  },
  {
    src: "/images/fleet/tire-service.jpg",
    alt: "Servizio gomme e pneumatici Pedrotti",
    title: "Servizio pneumatici",
  },
];

export default function FleetGallery() {
  return (
    <SectionContainer className="py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Flotta e struttura
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Mezzi, officina e attrezzature operative
        </h2>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Pedrotti dispone di mezzi dedicati per soccorso stradale, recupero
          mezzi pesanti, autofficina e servizi pneumatici per garantire
          interventi rapidi e sicuri.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {fleetImages.map((image) => (
          <div
            key={image.src}
            className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-zinc-900">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}