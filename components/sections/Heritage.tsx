import Container from "@/components/ui/Container";

export default function Heritage() {
  const statements = [
    {
      num: "01",
      title: "Natural Purity",
      description:
        "Sarang walet dipilih dengan perhatian terhadap kebersihan dan kualitas alami.",
    },
    {
      num: "02",
      title: "Careful Selection",
      description:
        "Setiap produk melewati proses seleksi yang teliti.",
    },
    {
      num: "03",
      title: "Sustainable Practices",
      description:
        "Mengutamakan proses yang bertanggung jawab terhadap keberlanjutan.",
    },
    {
      num: "04",
      title: "Premium Quality",
      description:
        "Menghadirkan kualitas yang konsisten untuk pelanggan VIDA NEST.",
    },
  ];

  return (
    <section
      id="heritage"
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-charcoal border-y border-border relative"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* LEFT: Eyebrow, Heading, Narrative */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-border-gold" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-muted uppercase font-sans">
                OUR HERITAGE
              </span>
            </div>

            <h2 className="font-serif-luxury text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] text-ivory font-normal leading-[1.08] tracking-tight">
              Pure by Nature. <br />
              <span className="italic text-gold">
                Carefully Preserved.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-secondary font-normal leading-relaxed">
              VIDA NEST berakar dari komitmen teguh untuk menghargai keajaiban
              sarang burung walet alami. Kami percaya bahwa kualitas sejati
              tidak pernah memerlukan bahan pengawet, pemutih kimiawi, maupun
              rekayasa bentuk.
            </p>

            <p className="text-xs sm:text-sm text-muted font-normal leading-relaxed">
              Setiap helai sarang walet dipanen dari rumah walet pesisir yang
              dikelola secara bertanggung jawab, kemudian dibersihkan secara
              manual dengan kesabaran tinggi untuk menjaga struktur serat utuh
              dan nutrisi alaminya.
            </p>
          </div>

          {/* RIGHT: 4 Statements with Responsive Divider (Horizontal on mobile, Vertical on desktop) */}
          <div className="lg:col-span-7 pt-8 border-t border-border-gold/50 lg:pt-0 lg:border-t-0 lg:pl-10 lg:border-l lg:border-border-gold space-y-6 sm:space-y-8">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-muted uppercase block">
              Prinsip Keunggulan Kami
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {statements.map((stmt) => (
                <div key={stmt.num} className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Small Gold Circle Icon */}
                    <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold font-mono text-xs font-semibold shrink-0">
                      {stmt.num}
                    </div>
                    <h3 className="font-serif-luxury text-lg sm:text-xl text-ivory font-medium">
                      {stmt.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-11">
                    {stmt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
