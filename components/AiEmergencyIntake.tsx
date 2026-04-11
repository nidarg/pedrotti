"use client";

import { useState } from "react";
import {
  MapPinned,
  MessageCircle,
  Truck,
  Car,
  Bike,
  X,
} from "lucide-react";
import { siteData } from "../lib/site-data";

type IntakeResponse = {
  summary: string;
};

type AiEmergencyIntakeProps = {
  onClose?: () => void;
};

const vehicleOptions = [
  { value: "car", label: "Car", icon: Car },
  { value: "van", label: "Van", icon: Truck },
  { value: "truck", label: "Truck", icon: Truck },
  { value: "motorcycle", label: "Motorcycle", icon: Bike },
  { value: "camper", label: "Camper", icon: Truck },
] as const;

export default function AiEmergencyIntake({
  onClose,
}: AiEmergencyIntakeProps) {
  const [message, setMessage] = useState("");
  const [vehicleType, setVehicleType] = useState("car");
  const [canMove, setCanMove] = useState("no");
  const [needsTowing, setNeedsTowing] = useState("yes");
  const [needsHeavyRecovery, setNeedsHeavyRecovery] = useState("no");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openWhatsapp = (finalMessage: string) => {
    const whatsappMessage = encodeURIComponent(finalMessage);
    const whatsappLink = `https://wa.me/${siteData.company.whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappLink, "_blank", "noreferrer");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) {
      setError("Please describe the problem.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/emergency-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          vehicleType,
          canMove,
          needsTowing,
          needsHeavyRecovery,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data: IntakeResponse = await res.json();

      if (!navigator.geolocation) {
        openWhatsapp(data.summary);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
          const finalMessage = `${data.summary}\n\nPosizione GPS: ${mapsLink}`;

          openWhatsapp(finalMessage);
        },
        () => {
          openWhatsapp(data.summary);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xl md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
            International roadside assistance
          </div>

          <h2 className="mt-4 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Describe the problem in any language
          </h2>

          <p className="mt-3 text-base leading-7 text-zinc-600">
            Your message will be translated automatically and sent to Pedrotti
            with GPS location on WhatsApp.
          </p>
        </div>

        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 transition hover:bg-zinc-100"
            aria-label="Close assistance form"
          >
            <X size={18} />
          </button>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-zinc-900"
          >
            What happened?
          </label>

          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: Mein Wohnmobil ist auf der A22 bei Trento Sud stehen geblieben und kann sich nicht bewegen."
            rows={5}
            className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-500"
            required
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-900">
            Vehicle type
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {vehicleOptions.map((option) => {
              const Icon = option.icon;
              const isActive = vehicleType === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setVehicleType(option.value)}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-red-600 bg-red-50 text-red-700"
                      : "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label
              htmlFor="canMove"
              className="mb-2 block text-sm font-semibold text-zinc-900"
            >
              Can the vehicle move?
            </label>
            <select
              id="canMove"
              value={canMove}
              onChange={(e) => setCanMove(e.target.value)}
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-red-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unknown">Not sure</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="needsTowing"
              className="mb-2 block text-sm font-semibold text-zinc-900"
            >
              Need towing?
            </label>
            <select
              id="needsTowing"
              value={needsTowing}
              onChange={(e) => setNeedsTowing(e.target.value)}
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-red-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unknown">Not sure</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="needsHeavyRecovery"
              className="mb-2 block text-sm font-semibold text-zinc-900"
            >
              Heavy recovery needed?
            </label>
            <select
              id="needsHeavyRecovery"
              value={needsHeavyRecovery}
              onChange={(e) => setNeedsHeavyRecovery(e.target.value)}
              className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-red-500"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
              <option value="unknown">Not sure</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <MessageCircle size={20} />
            {loading ? "Preparing WhatsApp request..." : "Send with AI + WhatsApp"}
          </button>

          <div className="inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-zinc-50 px-4 py-4 text-sm text-zinc-600">
            <MapPinned size={18} className="text-red-600" />
            GPS location will be attached if allowed
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}
      </form>
    </div>
  );
}