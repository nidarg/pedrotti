import { Phone, MessageCircle, MapPinned } from "lucide-react";
import { siteData } from "../lib/site-data";

export default function StickyMobileBar() {
  const whatsappMessage = encodeURIComponent(
    "Ciao, ho bisogno di soccorso stradale."
  );

  const locationMessage = encodeURIComponent(
    "Ciao, vi invio subito la mia posizione GPS."
  );

  const phoneLink = `tel:${siteData.company.phoneHref}`;
  const whatsappLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${whatsappMessage}`;
  const locationLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${locationMessage}`;

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

        <a
          href={locationLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-zinc-900"
        >
          <MapPinned size={18} />
          Position
        </a>
      </div>
    </div>
  );
}