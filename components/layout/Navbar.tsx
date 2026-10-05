"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCart?: () => void;
  cartCount?: number;
}

export default function Navbar({ onOpenCart, cartCount = 0 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "HERITAGE", href: "#heritage" },
    { name: "PRODUCT", href: "#product" },
    { name: "BENEFITS", href: "#benefits" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 h-16 sm:h-18 lg:h-20 flex items-center ${
          isScrolled
            ? "bg-obsidian/95 backdrop-blur-sm border-b border-border/60 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center">
          {/* Left: Brand Logo & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-gold p-2 -ml-2 hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-gold min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Buka menu navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center group">
              <div className="relative h-7 w-26 sm:h-8 sm:w-30 lg:h-9 lg:w-32 transition-opacity duration-300 group-hover:opacity-90">
                <Image
                  src="/vida-logo.png"
                  alt="VIDA NEST"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[11px] font-medium tracking-[0.12em] uppercase font-sans">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#D6D2C7] hover:text-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Shopping Bag Action */}
          <div className="flex items-center gap-3">
            <a
              href="#product"
              onClick={(e) => {
                if (onOpenCart) {
                  e.preventDefault();
                  onOpenCart();
                }
              }}
              className="relative p-2.5 text-ivory hover:text-gold hover:bg-surface border border-border transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Produk & Pemesanan"
              title="Pemesanan Produk"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-obsidian text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-obsidian/85 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-xs bg-charcoal border-r border-border h-full p-6 flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <div className="relative h-7 w-24">
                  <Image
                    src="/vida-logo.png"
                    alt="VIDA NEST"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-muted hover:text-ivory transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Tutup menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-muted block mb-2 font-semibold">
                  Navigasi
                </span>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-ivory hover:text-gold text-sm tracking-[0.14em] uppercase py-2 transition-colors min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-border space-y-2 text-xs text-muted">
              <p className="text-[10px] uppercase tracking-wider text-gold">
                Official WhatsApp
              </p>
              <p className="font-mono text-ivory">0821-5113-1835</p>
              <p className="text-[10px]">Cirebon, Indonesia</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
