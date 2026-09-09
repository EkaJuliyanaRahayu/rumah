import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config/business";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/50 animate-pulse-glow sm:h-16 sm:w-16"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={28} className="sm:hidden" />
      <MessageCircle size={32} className="hidden sm:block" />
    </a>
  );
}
