"use client";

import { useState } from "react";
import { MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { generateGeneralWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

export default function Contact() {
  const [topic, setTopic] = useState("Pemesanan Sarang Walet");

  const topics = [
    "Pemesanan Sarang Walet",
    "Konsultasi Kualitas & Grade",
    "Kebutuhan Hadiah / Kerjasama",
  ];

  const waLink = generateGeneralWhatsAppLink(`saya ingin berkonsultasi mengenai: ${topic}`);

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-obsidian border-t border-border relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* LEFT: Information (WhatsApp, Location) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <SectionHeading
              eyebrow="CONTACT"
              title="Let’s Connect."
              subtitle="Hubungi kami untuk informasi ketersediaan stok, konsultasi grade produk, atau proses pemesanan langsung."
            />

            <div className="space-y-5 sm:space-y-6 pt-4 border-t border-border">
              {/* WhatsApp Item */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold shrink-0">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-muted">
                    WhatsApp
                  </span>
                  <p className="font-mono text-sm sm:text-base text-ivory">
                    {WHATSAPP_DISPLAY_NUMBER}
                  </p>
                  <p className="text-xs text-secondary">
                    Senin – Sabtu, 08.00 – 17.00 WIB
                  </p>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-muted">
                    Location
                  </span>
                  <p className="text-sm sm:text-base text-ivory">Indonesia</p>
                  <p className="text-xs text-secondary">
                    Pesisir Cirebon, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact CTA (SEND MESSAGE) */}
          <div className="lg:col-span-6 bg-charcoal border border-border p-6 sm:p-8 md:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted block font-semibold">
                KONSULTASI LANGSUNG
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory font-normal">
                Kirim Pesan WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Pilih topik konsultasi di bawah ini untuk memulai percakapan
                langsung dengan tim VIDA NEST.
              </p>
            </div>

            {/* Quick Topic Selection */}
            <div className="space-y-2">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className={`w-full text-left p-3 sm:p-3.5 border text-xs tracking-wider transition-colors flex items-center justify-between min-h-[44px] ${
                    topic === t
                      ? "bg-surface text-gold border-gold"
                      : "bg-obsidian text-muted border-border hover:text-ivory hover:border-muted"
                  }`}
                >
                  <span>{t}</span>
                  <span className="text-[10px] uppercase font-mono">
                    {topic === t ? "Terpilih" : "Pilih"}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-obsidian font-semibold text-xs tracking-[0.16em] uppercase py-3.5 sm:py-4 px-6 border border-gold hover:border-gold-light transition-colors min-h-[44px]"
              >
                <span>SEND MESSAGE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] sm:text-[11px] text-center text-muted mt-3">
                Terhubung langsung ke WhatsApp resmi {WHATSAPP_DISPLAY_NUMBER}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
