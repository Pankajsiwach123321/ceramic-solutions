import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import DOMPurify from "isomorphic-dompurify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeNumber(number: string) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return number.replace(phoneRegex, "($1) $2-$3");
}

export function sanitize(input: string | Node): string {
  return DOMPurify.sanitize(input);
}

export function onAcceptCookies() {
  const cookieConsent = "granted";

  window.gtag("consent", "update", {
    analytics_storage: cookieConsent,
    ad_storage: cookieConsent,
    ad_personalization: cookieConsent,
    ad_user_data: cookieConsent,
  });
}
