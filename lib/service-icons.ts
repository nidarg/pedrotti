import {
  Car,
  ClipboardCheck,
  Construction,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const serviceIcons = {
  truck: Truck,
  towTruck: Truck,
  shield: ShieldCheck,
  wrench: Wrench,
  car: Car,
  construction: Construction,
  clipboard: ClipboardCheck,
  tools: Wrench,
} as const;