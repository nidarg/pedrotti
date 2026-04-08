import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "../../lib/site-data";
import LocationWhatsAppButton from "../LocationWhatsAppButton";

export default function HeroActions() {
  const whatsappMessage = encodeURIComponent(
    "Ciao, ho bisogno di soccorso stradale."
  );

  const phoneLink = `tel:${siteData.company.phoneHref}`;
  const whatsappLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      <a
        href={phoneLink}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:opacity-90"
      >
        <Phone size={20} />
        Chiama ora
      </a>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 px-6 py-4 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100"
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>

      <LocationWhatsAppButton
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 px-6 py-4 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}