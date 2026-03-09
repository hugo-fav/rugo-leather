// central configuration constants for the application

// international format with plus sign
export const WHATSAPP_NUMBER = "+234 912 606 5730";

// wa.me requires only digits
const BASE_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

// helper: returns a chat link with optional pre-filled message text (URL‑encoded)
export function makeWhatsAppLink(message?: string) {
  if (!message) return BASE_WHATSAPP_URL;
  const encoded = encodeURIComponent(message);
  return `${BASE_WHATSAPP_URL}?text=${encoded}`;
}

export const WHATSAPP_LINK = BASE_WHATSAPP_URL;
