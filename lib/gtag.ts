export const GA_MEASUREMENT_ID = "G-11N01GEZSR";

declare global {
  interface Window {
    gtag: (
      command: "event",
      eventName: string,
      params?: Record<string, string | number | boolean>
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", eventName, params);
};