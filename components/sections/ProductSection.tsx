"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/product/WhatsAppButton";
import { MAIN_PRODUCT, Product } from "@/data/products";
import { formatRupiah } from "@/lib/utils";
import { Eye, ShieldCheck, Check } from "lucide-react";

interface ProductSectionProps {
  onOpenDetail?: (product: Product) => void;
}

export default function ProductSection({ onOpenDetail }: ProductSectionProps) {
  const formattedPrice = formatRupiah(MAIN_PRODUCT.price);

  return (
    <section id="product" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-obsidian relative">
      <Container>
        {/* Section Heading: PRODUCT / Our Product */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border gap-4 sm:gap-6">
          <SectionHeading
            eyebrow="PRODUCT"
            title="Our Product"
            subtitle="Sarang burung walet alami pilihan terbaik dengan standar kemurnian tinggi tanpa bahan kimia."
          />
        </div>

        {/* Large Editorial Product Presentation */}
        <div className="bg-charcoal border border-border hover:border-border-gold transition-colors duration-500 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* LEFT / TOP on mobile: Product Image Frame */}
            <div className="lg:col-span-6 bg-obsidian p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-border relative">
              <div className="relative aspect-square w-full max-w-[420px] overflow-hidden flex items-center justify-center">
                <Image
                  src={MAIN_PRODUCT.image}
                  alt={MAIN_PRODUCT.name}
                  fill
                  className="object-contain p-4 sm:p-6 transition-transform duration-500 ease-out hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />

                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-charcoal/90 border border-border px-2.5 py-1 text-[10px] text-gold uppercase tracking-widest font-mono">
                  {MAIN_PRODUCT.category}
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-[420px] mt-6 pt-4 border-t border-border/60 text-[11px] text-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>100% Sarang Alami</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span>Kadar Air &lt; 12%</span>
                </div>
              </div>
            </div>

            {/* RIGHT / BOTTOM on mobile: Product Information */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-gold block font-mono font-semibold">
                    {MAIN_PRODUCT.category}
                  </span>
                  <h3 className="font-serif-luxury text-[32px] sm:text-[38px] lg:text-[46px] text-ivory font-normal leading-tight mt-1">
                    {MAIN_PRODUCT.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-secondary font-normal leading-relaxed">
                  {MAIN_PRODUCT.description}
                </p>

                {/* Key Features Checklist */}
                <div className="space-y-2 pt-2">
                  {MAIN_PRODUCT.features.slice(0, 3).map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-secondary">
                      <div className="w-3.5 h-3.5 rounded-full border border-gold flex items-center justify-center text-gold shrink-0 mt-0.5">
                        <Check className="w-2 h-2 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Focal Point Price: Responsive Scale (Mobile 32-40px, Tablet 36-44px, Desktop 40-52px) */}
                <div className="pt-4 border-t border-border">
                  <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider block">
                    Harga Resmi ({MAIN_PRODUCT.weight})
                  </span>
                  <p className="font-serif-luxury text-[34px] sm:text-[40px] lg:text-[48px] text-gold font-normal leading-tight tabular-nums tracking-tight">
                    {formattedPrice}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Full-width on mobile */}
              <div className="space-y-3 pt-4 border-t border-border">
                <WhatsAppButton
                  productName={MAIN_PRODUCT.name}
                  priceFormatted={formattedPrice}
                  quantity={1}
                  className="w-full text-center justify-center py-4 text-xs tracking-[0.16em]"
                />

                {onOpenDetail && (
                  <button
                    onClick={() => onOpenDetail(MAIN_PRODUCT)}
                    className="w-full inline-flex items-center justify-center gap-2 border border-border hover:border-gold text-ivory hover:text-gold py-3 text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer bg-surface/50 min-h-[44px]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>LIHAT DETAIL LENGKAP</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
