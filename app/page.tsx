"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Heritage from "@/components/sections/Heritage";
import Benefits from "@/components/sections/Benefits";
import ProductSection from "@/components/sections/ProductSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ProductDetailModal from "@/components/product/ProductDetailModal";
import { MAIN_PRODUCT, Product } from "@/data/products";
import { serializeJsonLd } from "@/lib/jsonld";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: MAIN_PRODUCT.name,
    image: `https://vidanest.id${MAIN_PRODUCT.image}`,
    description: MAIN_PRODUCT.description,
    category: MAIN_PRODUCT.category,
    brand: {
      "@type": "Brand",
      name: "VIDA NEST",
    },
    offers: {
      "@type": "Offer",
      price: MAIN_PRODUCT.price.toString(),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "VIDA NEST",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="relative flex flex-col min-h-screen bg-obsidian text-ivory overflow-x-hidden">
        <Navbar
          onOpenCart={() => {
            const productEl = document.getElementById("product");
            if (productEl) {
              productEl.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        <main className="flex-1">
          <Hero />
          <Heritage />
          <Benefits />
          <ProductSection onOpenDetail={(product) => setSelectedProduct(product)} />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />

        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </>
  );
}
