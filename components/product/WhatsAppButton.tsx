import React from "react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  productName: string;
  priceFormatted: string;
  quantity?: number;
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function WhatsAppButton({
  productName,
  priceFormatted,
  quantity = 1,
  label = "BELI VIA WHATSAPP",
  variant = "primary",
  className,
}: WhatsAppButtonProps) {
  const waLink = generateWhatsAppLink({
    productName,
    priceFormatted,
    quantity,
  });

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 font-semibold text-xs tracking-[0.14em] uppercase py-3.5 px-6 transition-all duration-300 text-center select-none cursor-pointer min-h-[44px]",
        variant === "primary"
          ? "bg-gold hover:bg-gold-light text-obsidian border border-gold hover:border-gold-light"
          : "bg-transparent text-ivory hover:text-gold border border-border hover:border-gold",
        className
      )}
    >
      <MessageCircle className="w-4 h-4 fill-current shrink-0" />
      <span>{label}</span>
    </a>
  );
}
