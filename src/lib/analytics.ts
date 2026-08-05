export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

  window.gtag?.("event", eventName, params);
}

export function trackDemoBooking() {
  trackEvent("demo_booking_submit", { event_category: "conversion" });
}

export function trackContactForm() {
  trackEvent("contact_form_submit", { event_category: "conversion" });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
