export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  weight: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  features: string[];
  specifications: { label: string; value: string }[];
}

export const MAIN_PRODUCT: Product = {
  slug: "sarang-walet-premium-grade-a",
  name: "Sarang Walet",
  category: "PREMIUM GRADE A",
  price: 104900,
  weight: "10gr",
  description:
    "Isi 10gr sarang walet mangkok premium tanpa pengawet dan pemutih. Dipanen secara berkelanjutan untuk menjaga kualitas dan ekosistem alami.",
  fullDescription:
    "Sarang burung walet pilihan Grade A dengan bentuk mangkok alami yang utuh dan rajutan serat padat. Dipanen dengan penuh tanggung jawab dari pesisir Cirebon dan dibersihkan manual helai demi helai menggunakan air mineral steril. Menjaga kandungan glikoprotein dan asam sialat alami tetap murni untuk nutrisi optimal keluarga Anda.",
  image: "/mangkok.png",
  gallery: ["/mangkok.png", "/hero-nest.jpg", "/nest-strands.jpg"],
  features: [
    "Natural product tanpa pemutih kimiawi (0% Hidrogen Peroksida)",
    "Premium selection dengan serat utuh dan padat",
    "Carefully processed dengan pembersihan manual teliti",
    "Sustainable sourcing menghormati siklus hidup burung walet",
  ],
  specifications: [
    { label: "Kemurnian", value: "100% Sarang Burung Walet Murni" },
    { label: "Bahan Tambahan", value: "Tanpa Pengawet, Pemutih, atau Perekat" },
    { label: "Kadar Air", value: "< 12% (Kering Standar Simpan)" },
    { label: "Asal", value: "Pesisir Cirebon, Jawa Barat, Indonesia" },
    { label: "Metode Pembersihan", value: "Manual dengan Pinset & Air Mineral Steril" },
  ],
};

export const PRODUCTS: Product[] = [MAIN_PRODUCT];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
