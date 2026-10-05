import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { serializeJsonLd } from "@/lib/jsonld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | VIDA NEST",
    };
  }

  return {
    title: `${product.name} — ${product.category} | VIDA NEST`,
    description: product.description,
    openGraph: {
      title: `${product.name} — VIDA NEST`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.price.toString(),
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

      <div className="relative flex flex-col min-h-screen bg-[#090B09] text-[#F2EBDD]">
        <Navbar />

        <main className="flex-1 pt-32 pb-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* LEFT: Product Gallery */}
              <div className="lg:col-span-6 sticky top-28">
                <ProductGallery
                  images={product.gallery || [product.image]}
                  productName={product.name}
                />
              </div>

              {/* RIGHT: Product Info */}
              <div className="lg:col-span-6 bg-[#0F120F] border border-[#34362D] p-8 sm:p-10">
                <ProductInfo product={product} />
              </div>
            </div>
          </Container>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
