"use client"

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import SectionContainer from "./layout/SectionContainer";
import { siteData } from "../lib/site-data";
import { trackEvent } from "../lib/gtag";

export default function Locations() {
  return (
    <SectionContainer className="py-16">
      {/* Intro */}
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Sedi e contatti
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Due sedi operative per assistenza rapida
        </h2>

        <p className="mt-4 text-lg leading-8 text-zinc-600">
          Pedrotti è presente con due sedi operative a Mori e Trento, con
          assistenza dedicata per soccorso stradale, officina, noleggio e
          supporto ai veicoli.
        </p>
      </div>

      {/* Main grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Location cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {siteData.locations.map((location) => (
            <div
              key={location.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                <MapPin size={22} />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {location.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {location.addressLine1}
                <br />
                {location.addressLine2}
              </p>

              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                 onClick={() =>
    trackEvent("maps_click", {
      office: location.name,
    })
  }
              >
                <MapPin size={16} />
                Apri su Maps
              </a>
            </div>
          ))}
        </div>

        {/* General contacts */}
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold text-zinc-900">
            Contatti generali
          </h3>

          <div className="mt-5 space-y-4">
            <a
              href={`tel:${siteData.company.phoneHref}`}
              className="flex items-start gap-3 text-sm text-zinc-700 transition hover:text-zinc-900"
            >
              <Phone size={18} className="mt-0.5 text-red-600" />
              <span>{siteData.company.phoneDisplay}</span>
            </a>

            <a
              href={`mailto:${siteData.company.email}`}
              className="flex items-start gap-3 text-sm text-zinc-700 transition hover:text-zinc-900"
            >
              <Mail size={18} className="mt-0.5 text-red-600" />
              <span>{siteData.company.email}</span>
            </a>

            <a
              href={`https://${siteData.company.website}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-sm text-zinc-700 transition hover:text-zinc-900"
            >
              <Globe size={18} className="mt-0.5 text-red-600" />
              <span>{siteData.company.website}</span>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}