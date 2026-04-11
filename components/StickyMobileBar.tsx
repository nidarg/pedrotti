"use client";

import { useState } from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { siteData } from "../lib/site-data";
import LocationWhatsAppButton from "./LocationWhatsAppButton";
import AiEmergencyIntake from "./AiEmergencyIntake";

export default function StickyMobileBar() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Ciao, ho bisogno di soccorso stradale."
  );

  const phoneLink = `tel:${siteData.company.phoneHref}`;
  const whatsappLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <div className="fixed inset-x-0 bottom-3 z-50 px-4 md:hidden">
        <div className="mx-auto w-full max-w-md">
          <div className="grid grid-cols-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
            <a
              href={phoneLink}
              className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold text-zinc-900"
            >
              <Phone size={18} />
              Call
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold text-zinc-900"
            >
              <MessageCircle size={18} />
              Chat
            </a>

            <LocationWhatsAppButton
              iconSize={18}
              label="GPS"
              className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold text-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
            />

            <button
              type="button"
              onClick={() => setIsAiOpen(true)}
              className="flex flex-col items-center justify-center gap-1 bg-red-600 py-3 text-[11px] font-semibold text-white"
            >
              <Sparkles size={18} />
              AI Help
            </button>
          </div>
        </div>
      </div>

      {isAiOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/50 p-4 md:hidden">
          <div className="mx-auto mt-8 max-h-[85vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <AiEmergencyIntake onClose={() => setIsAiOpen(false)} />
          </div>
        </div>
      ) : null}
    </>
  );
}