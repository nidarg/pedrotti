"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import AiEmergencyIntake from "../AiEmergencyIntake";

export default function HeroForeignAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6">
      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-base font-semibold text-zinc-900 transition hover:bg-zinc-100"
        >
          <Languages size={20} />
          Need help in your language?
        </button>
      ) : (
        <div className="mt-6">
          <AiEmergencyIntake onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}