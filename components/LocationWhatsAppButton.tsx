"use client";

import { useState } from "react";
import { MapPinned } from "lucide-react";
import { siteData } from "../lib/site-data";

type LocationWhatsAppButtonProps = {
  className?: string;
  iconSize?: number;
  label?: string;
};

export default function LocationWhatsAppButton({
  className = "",
  iconSize = 20,
  label = "Invia posizione",
}: LocationWhatsAppButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendLocation = () => {
    if (!navigator.geolocation) {
      const fallbackMessage = encodeURIComponent(
        "Ciao, ho bisogno di soccorso stradale. Non riesco a condividere automaticamente la mia posizione. Vi invio la posizione manualmente su WhatsApp."
      );

      window.open(
        `https://wa.me/${siteData.company.whatsappNumber}?text=${fallbackMessage}`,
        "_blank",
        "noreferrer"
      );
      return;
    }

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

        const message = encodeURIComponent(
          `Ciao, ho bisogno di soccorso stradale. Questa è la mia posizione: ${mapsLink}. Se necessario posso inviare anche foto del veicolo e targa.`
        );

        window.open(
          `https://wa.me/${siteData.company.whatsappNumber}?text=${message}`,
          "_blank",
          "noreferrer"
        );

        setIsLoading(false);
      },
      () => {
        const fallbackMessage = encodeURIComponent(
          "Ciao, ho bisogno di soccorso stradale. Non sono riuscito a condividere automaticamente la mia posizione. Vi invio la posizione manualmente su WhatsApp."
        );

        window.open(
          `https://wa.me/${siteData.company.whatsappNumber}?text=${fallbackMessage}`,
          "_blank",
          "noreferrer"
        );

        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <button
      type="button"
      onClick={handleSendLocation}
      disabled={isLoading}
      className={className}
    >
      <MapPinned size={iconSize} />
      {isLoading ? "Recupero posizione..." : label}
    </button>
  );
}