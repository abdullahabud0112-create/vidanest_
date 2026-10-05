import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Sustainability", href: "#heritage" },
    { name: "Produk Utama", href: "#product" },
  ];

  return (
    <footer className="bg-obsidian border-t border-[#22251F] py-12 sm:py-14 md:py-16 text-muted">
      <Container className="space-y-8 sm:space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 border-b border-[#22251F]">
          {/* Logo & Tagline */}
          <div className="space-y-2 sm:space-y-3">
            <Link href="/" className="inline-block">
              <div className="relative h-7 w-28">
                <Image
                  src="/vida-logo.png"
                  alt="VIDA NEST"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-secondary max-w-sm">
              Sarang burung walet alami dengan proses seleksi yang mengutamakan
              kualitas, kemurnian, dan keberlanjutan.
            </p>
          </div>

          {/* Simple Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-xs tracking-wider">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-gold transition-colors py-1 min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright & Location */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-muted gap-3">
          <p>© {currentYear} VIDA NEST. All rights reserved.</p>
          <p>Origin: Cirebon, Indonesia • Purity in Every Ritual</p>
        </div>
      </Container>
    </footer>
  );
}
