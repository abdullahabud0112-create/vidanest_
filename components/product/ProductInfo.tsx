"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Product } from "@/data/products";
import { formatRupiah } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSpecOpen, setIsSpecOpen] = useState(true);
  const [isPrepOpen, setIsPrepOpen] = useState(false);

  const totalPrice = product.price * quantity;
  const formattedPrice = formatRupiah(totalPrice);

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* 1. Category Eyebrow */}
      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-gold block font-mono">
        {product.category}
      </span>

      {/* 2. Product Title */}
      <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
        {product.name}
      </h1>

      {/* 3. Price Display */}
      <div className="py-3 border-y border-border flex items-baseline justify-between">
        <span className="text-xs text-muted uppercase tracking-wider">
          Harga ({product.weight})
        </span>
        <div className="text-right">
          <span className="font-serif-luxury text-3xl sm:text-4xl text-gold font-normal tabular-nums">
            {formattedPrice}
          </span>
          {quantity > 1 && (
            <span className="block text-[11px] text-muted mt-0.5">
              ({formatRupiah(product.price)} / unit)
            </span>
          )}
        </div>
      </div>

      {/* 4. Short Description */}
      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
        {product.fullDescription || product.description}
      </p>

      {/* 5. Quantity Selector with 44px min-touch target */}
      <div className="flex items-center justify-between py-2 border-b border-border">
        <span className="text-xs uppercase tracking-wider text-ivory font-medium">
          Jumlah:
        </span>
        <div className="flex items-center border border-border bg-obsidian">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            className="w-11 h-11 flex items-center justify-center text-sm text-ivory hover:bg-surface disabled:opacity-30 transition-colors"
            aria-label="Kurangi jumlah"
          >
            -
          </button>
          <span className="w-12 h-11 flex items-center justify-center text-xs font-mono font-semibold text-gold">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-11 h-11 flex items-center justify-center text-sm text-ivory hover:bg-surface transition-colors"
            aria-label="Tambah jumlah"
          >
            +
          </button>
        </div>
      </div>

      {/* 6. Main CTA */}
      <div className="pt-2">
        <WhatsAppButton
          productName={`${product.name} (${product.weight})`}
          priceFormatted={formattedPrice}
          quantity={quantity}
          className="w-full text-center justify-center py-4 text-xs tracking-[0.16em]"
        />
        <p className="text-[11px] text-center text-muted mt-2.5">
          Pesanan dikonfirmasi dan diproses secara personal langsung via WhatsApp resmi.
        </p>
      </div>

      {/* 7. Key Brand Pillars Checkmarks */}
      <div className="pt-4 border-t border-border space-y-2.5">
        {product.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2.5 text-xs text-secondary">
            <div className="w-4 h-4 rounded-full border border-gold flex items-center justify-center text-gold shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* 8. Accordions for Information */}
      <div className="pt-4 border-t border-border space-y-3">
        {/* Specifications Accordion */}
        <div className="border border-border bg-charcoal">
          <button
            onClick={() => setIsSpecOpen(!isSpecOpen)}
            className="w-full p-4 flex items-center justify-between text-xs uppercase tracking-wider text-ivory font-medium text-left min-h-[44px]"
          >
            <span>Spesifikasi Produk</span>
            <ChevronDown
              className={`w-4 h-4 text-gold transition-transform duration-300 ${
                isSpecOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isSpecOpen && (
            <div className="px-4 pb-4 pt-1 border-t border-border/60 space-y-2 text-xs">
              {product.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline justify-between text-xs py-1 border-b border-border/30"
                >
                  <span className="text-muted">{spec.label}</span>
                  <span className="text-ivory font-medium text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Preparation Guide Accordion */}
        <div className="border border-border bg-charcoal">
          <button
            onClick={() => setIsPrepOpen(!isPrepOpen)}
            className="w-full p-4 flex items-center justify-between text-xs uppercase tracking-wider text-ivory font-medium text-left min-h-[44px]"
          >
            <span>Petunjuk Penyajian Tradisional</span>
            <ChevronDown
              className={`w-4 h-4 text-gold transition-transform duration-300 ${
                isPrepOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isPrepOpen && (
            <div className="px-4 pb-4 pt-2 border-t border-border/60 text-xs text-secondary leading-relaxed space-y-2">
              <p>
                1. Rendam sarang walet dalam air matang bersuhu ruang selama 2–3 jam hingga serat melunak dan mengembang.
              </p>
              <p>
                2. Tiriskan, bilas perlahan dengan air mineral steril.
              </p>
              <p>
                3. Kukus dalam mangkuk keramik bertutup (metode double-boil) dengan api kecil selama 30–45 menit bersama gula batu sesuai selera.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
