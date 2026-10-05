"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { Product } from "@/data/products";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-charcoal border border-border z-10 shadow-2xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 bg-obsidian/80 text-muted hover:text-ivory border border-border transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Tutup detail produk"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[88vh] overflow-y-auto">
          {/* LEFT: Large Product Gallery */}
          <div className="lg:col-span-6 bg-obsidian p-4 sm:p-6 md:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
            <ProductGallery
              images={product.gallery || [product.image]}
              productName={product.name}
            />
          </div>

          {/* RIGHT: Product Information */}
          <div className="lg:col-span-6 p-5 sm:p-6 md:p-8">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
