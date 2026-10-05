"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Product } from "@/data/products";
import { formatRupiah } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onOpenDetail,
}: ProductCardProps) {
  const formattedPrice = formatRupiah(product.price);

  return (
    <div className="w-full bg-charcoal border border-border hover:border-border-gold transition-colors duration-500 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
      {/* Visual Image */}
      <div className="relative aspect-[4/3] w-full bg-obsidian overflow-hidden mb-6 flex items-center justify-center border border-border/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 sm:p-6 transition-transform duration-500 ease-out hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />

        <div className="absolute top-3 left-3 bg-charcoal/90 border border-border px-2.5 py-1 text-[10px] text-gold uppercase tracking-widest font-mono">
          {product.category}
        </div>
      </div>

      {/* Info Block */}
      <div className="space-y-4">
        <div>
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted block font-semibold">
            {product.category}
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-ivory font-normal mt-1">
            {product.name}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-secondary leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Focal Point Price: Responsive Typography (Mobile 32-40px, Tablet 36-44px, Desktop 40-52px) */}
        <div className="pt-4 border-t border-border">
          <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider block">
            Harga ({product.weight})
          </span>
          <p className="font-serif-luxury text-[32px] sm:text-[38px] md:text-[44px] text-gold font-normal leading-tight tabular-nums tracking-tight">
            {formattedPrice}
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-2 space-y-2.5">
          <WhatsAppButton
            productName={product.name}
            priceFormatted={formattedPrice}
            quantity={1}
            className="w-full"
          />

          {onOpenDetail ? (
            <button
              onClick={() => onOpenDetail(product)}
              className="w-full inline-flex items-center justify-center gap-2 border border-border hover:border-gold text-ivory hover:text-gold py-3 text-xs tracking-[0.14em] uppercase transition-colors cursor-pointer bg-transparent min-h-[44px]"
            >
              <Eye className="w-4 h-4" />
              <span>LIHAT DETAIL</span>
            </button>
          ) : (
            <Link
              href={`/products/${product.slug}`}
              className="w-full inline-flex items-center justify-center gap-2 border border-border hover:border-gold text-ivory hover:text-gold py-3 text-xs tracking-[0.14em] uppercase transition-colors text-center min-h-[44px]"
            >
              <Eye className="w-4 h-4" />
              <span>LIHAT DETAIL</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
