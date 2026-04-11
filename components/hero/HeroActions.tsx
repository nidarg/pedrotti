"use client";

import { useState } from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { siteData } from "../../lib/site-data";
import LocationWhatsAppButton from "../LocationWhatsAppButton";
import { trackEvent } from "../../lib/gtag";
import AiEmergencyIntake from "../AiEmergencyIntake";

export default function HeroActions() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Ciao, ho bisogno di soccorso stradale."
  );

  const phoneLink = `tel:${siteData.company.phoneHref}`;
  const whatsappLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${whatsappMessage}`;

  const actionButtonClass =
    "inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100";

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <a
          href={phoneLink}
          onClick={() =>
            trackEvent("phone_click", {
              placement: "hero",
            })
          }
          className={actionButtonClass}
        >
          <Phone size={20} />
          Chiama ora
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackEvent("whatsapp_click", {
              placement: "hero",
            })
          }
          className={actionButtonClass}
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

        <LocationWhatsAppButton
          className={`${actionButtonClass} disabled:cursor-not-allowed disabled:opacity-60`}
        />

        <button
          type="button"
          onClick={() => setIsAiOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:opacity-90"
        >
          <Sparkles size={20} />
          AI Help
        </button>
      </div>

      {isAiOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/50 p-4">
          <div className="mx-auto mt-6 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl md:mt-10">
            <AiEmergencyIntake onClose={() => setIsAiOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}