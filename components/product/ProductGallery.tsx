"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] || "/mangkok.png");

  return (
    <div className="space-y-4 w-full">
      {/* Main Image Frame */}
      <div className="relative aspect-square w-full bg-charcoal border border-border overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          className="object-contain p-4 sm:p-6"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={img + idx}
              onClick={() => setActiveImage(img)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-charcoal border overflow-hidden transition-all shrink-0 min-h-[44px] min-w-[44px] ${
                activeImage === img
                  ? "border-gold ring-1 ring-gold"
                  : "border-border opacity-60 hover:opacity-100"
              }`}
              aria-label={`Lihat gambar produk ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-1.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
