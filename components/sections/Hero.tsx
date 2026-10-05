import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-obsidian">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-border-gold" />
                <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-muted uppercase font-sans">
                  PREMIUM NATURAL PRODUCT
                </p>
              </div>

              <h1 className="font-serif-luxury text-[44px] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[88px] text-ivory font-normal leading-[0.92] tracking-tight">
                The Essence of <br />
                <span className="italic text-gold">Natural Purity</span>.
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-secondary font-normal leading-relaxed max-w-xl">
              Sarang burung walet alami dengan proses seleksi yang mengutamakan
              kualitas, kemurnian, dan keberlanjutan.
            </p>

            {/* CTAs: Responsive Mobile-First */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Button href="#product" variant="primary" size="lg" className="w-full sm:w-auto">
                BELI SEKARANG
              </Button>

              <Button href="#heritage" variant="outline" size="lg" className="w-full sm:w-auto">
                PELAJARI WARISAN KAMI
              </Button>
            </div>

            {/* Subtle Brand Specifications */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 md:pt-10 border-t border-border/60 max-w-lg">
              <div>
                <span className="block font-serif-luxury text-xl sm:text-2xl text-gold">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider">
                  Kemurnian Alami
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-xl sm:text-2xl text-ivory">
                  0%
                </span>
                <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider">
                  Bahan Pemutih
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-xl sm:text-2xl text-ivory">
                  &lt; 12%
                </span>
                <span className="text-[10px] sm:text-[11px] text-muted uppercase tracking-wider">
                  Kadar Air Kering
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Bird's Nest Photography */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] aspect-[4/3] sm:aspect-square lg:aspect-[4/5] bg-charcoal border border-border p-2.5 sm:p-3 shadow-2xl">
              {/* Subtle Decorative Gold Lines */}
              <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 border-t border-r border-border-gold" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 sm:w-6 sm:h-6 border-b border-l border-border-gold" />

              <div className="relative w-full h-full overflow-hidden bg-obsidian">
                <Image
                  src="/hero-nest.jpg"
                  alt="Sarang Burung Walet Alami VIDA NEST"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent" />

                {/* Editorial Caption Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-charcoal/90 border border-border px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-xs">
                  <p className="text-[9px] sm:text-[10px] text-muted uppercase tracking-widest font-mono">
                    Origin: Cirebon, Indonesia
                  </p>
                  <p className="text-[11px] sm:text-xs text-ivory font-medium mt-0.5">
                    Hand-selected edible bird’s nest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
