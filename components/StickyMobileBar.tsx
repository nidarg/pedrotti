import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "../lib/site-data";
import LocationWhatsAppButton from "./LocationWhatsAppButton";

export default function StickyMobileBar() {
  const whatsappMessage = encodeURIComponent(
    "Ciao, ho bisogno di soccorso stradale."
  );

  const phoneLink = `tel:${siteData.company.phoneHref}`;
  const whatsappLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white shadow-lg md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={phoneLink}
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-zinc-900"
        >
          <Phone size={18} />
          Call
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-zinc-900"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <LocationWhatsAppButton
          iconSize={18}
          label="Position"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>
    </div>
  );
}