import { Wrench } from "lucide-react";
import { siteData } from "../lib/site-data";
import { serviceIcons } from "../lib/service-icons";
import SectionContainer from "./hero/layout/SectionContainer";

export default function Services() {
  return (
<SectionContainer className="pt-8 pb-16 md:pt-10 md:pb-16">        <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Servizi
        </p>

        <h2 className="mt-3 text-2xl font-bold sm:text-4xl">
          Assistenza completa per ogni esigenza
        </h2>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Pedrotti Group offre soccorso stradale H24, recupero veicoli,
          assistenza per mezzi pesanti e servizi complementari per privati,
          aziende e flotte.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteData.services.map((service) => {
          const Icon = serviceIcons[service.iconKey] ?? Wrench;

          return (
            <div
              key={service.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                <Icon size={22} />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer> 
  );
}