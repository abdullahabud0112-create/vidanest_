import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Product | VIDA NEST — Premium Natural Bird's Nest",
  description:
    "Produk sarang burung walet alami VIDA NEST. Pilihan terbaik dengan kemurnian 100% tanpa bahan pemutih kimiawi.",
};

export default function ProductsPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-obsidian text-ivory">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20 sm:pb-24">
        <Container>
          <div className="mb-10 sm:mb-14 pb-6 border-b border-border">
            <SectionHeading
              eyebrow="PRODUCT"
              title="Our Product"
              subtitle="Dipanen secara berkelanjutan dan dibersihkan manual tanpa sentuhan bahan kimia."
            />
          </div>

          <div className="max-w-xl mx-auto lg:max-w-2xl">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
