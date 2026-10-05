"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const waLink = generateGeneralWhatsAppLink();

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex items-center gap-3 pb-[env(safe-area-inset-bottom)]">
      {/* Tooltip on hover only for desktop */}
      <div
        className={`bg-surface text-ivory text-xs px-3 py-1.5 border border-border rounded shadow-xl transition-all duration-300 pointer-events-none hidden sm:block ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="font-medium">Chat with us</span>
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-full bg-whatsapp hover:brightness-105 text-white flex items-center justify-center shadow-lg shadow-black/50 border border-white/20 transition-transform duration-300 hover:scale-105 active:scale-95 min-h-[44px] min-w-[44px]"
        aria-label="Hubungi kami melalui WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </a>
    </div>
  );
}
