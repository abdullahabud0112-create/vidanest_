import { Feather, ShieldCheck, Leaf, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Benefits() {
  const cards = [
    {
      icon: Feather,
      title: "Natural Purity",
      description:
        "Menjaga karakter alami produk melalui proses yang diperhatikan secara teliti.",
    },
    {
      icon: ShieldCheck,
      title: "Careful Selection",
      description:
        "Pemilihan bahan berdasarkan standar kualitas.",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description:
        "Memperhatikan proses yang berkelanjutan.",
    },
    {
      icon: Sparkles,
      title: "Premium Experience",
      description:
        "Pengalaman produk yang dirancang untuk konsumen premium.",
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-charcoal border-t border-border relative">
      <Container>
        {/* Centered Editorial Heading */}
        <SectionHeading
          eyebrow="WHY VIDA NEST"
          title="Manfaat & Keunggulan Utama"
          subtitle="Dedikasi kami terhadap kualitas alami, transparansi, dan pelayanan terpercaya."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* 4 Horizontal Cards: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 with fluid min-height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-surface border border-border hover:border-border-gold p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-colors duration-300 min-h-[200px] sm:min-h-[220px]"
              >
                <div className="space-y-4">
                  {/* Icon Circle 32-40px with Gold Border */}
                  <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="font-serif-luxury text-xl text-ivory font-medium leading-snug">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-secondary font-normal leading-relaxed pt-2">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
