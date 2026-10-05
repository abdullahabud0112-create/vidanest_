export const WHATSAPP_DISPLAY_NUMBER = "0821-5113-1835";
export const WHATSAPP_INTL_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282151131835";

interface WhatsAppOrderParams {
  productName: string;
  priceFormatted: string;
  quantity?: number;
}

/**
 * Builds the exact message specified in prompt section 10:
 * 
 * Halo VIDA NEST,
 * saya tertarik membeli:
 * 
 * Produk: Sarang Walet
 * Harga: Rp 104.900
 * Jumlah: 1
 * 
 * Mohon informasi ketersediaan dan proses pemesanannya.
 */
export function buildWhatsAppMessage({
  productName,
  priceFormatted,
  quantity = 1,
}: WhatsAppOrderParams): string {
  return `Halo VIDA NEST,
saya tertarik membeli:

Produk: ${productName}
Harga: ${priceFormatted}
Jumlah: ${quantity}

Mohon informasi ketersediaan dan proses pemesanannya.`;
}

/**
 * Generates the full WhatsApp link with the encoded order message
 */
export function generateWhatsAppLink(params: WhatsAppOrderParams): string {
  const message = buildWhatsAppMessage(params);
  return `https://wa.me/${WHATSAPP_INTL_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Generates a direct WhatsApp link for general consultation
 */
export function generateGeneralWhatsAppLink(customNote?: string): string {
  const message = customNote
    ? `Halo VIDA NEST, ${customNote}`
    : `Halo VIDA NEST, saya ingin berkonsultasi mengenai produk sarang walet alami Anda.`;
  return `https://wa.me/${WHATSAPP_INTL_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
