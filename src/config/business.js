/**
 * ============================================================
 * KONFIGURASI BISNIS — SINGLE SOURCE OF TRUTH
 * ============================================================
 * Semua informasi bisnis dikelola di file ini.
 * Ketika client memberikan perubahan (nama, nomor WA, alamat,
 * logo, social media, dll), cukup edit file ini saja.
 *
 * Semua component yang membutuhkan data bisnis harus import
 * dari file ini, bukan hardcode di masing-masing component.
 * ============================================================
 */

export const business = {
  // ----------------------------------------------------------
  // IDENTITAS BISNIS
  // TODO: Ganti dengan nama bisnis sebenarnya
  // ----------------------------------------------------------
  name: "Jack Jaya Properti",
  shortName: "Jack Jaya Properti",
  tagline: "Jasa Renovasi Rumah Profesional",

  description:
    "Jasa renovasi rumah profesional dengan pengerjaan berkualitas, " +
    "transparan, dan terpercaya. Melayani area Jabodetabek.",

  // ----------------------------------------------------------
  // WHATSAPP
  // TODO: Ganti dengan nomor WhatsApp bisnis (tanpa + atau spasi)
  // Format: kode negara + nomor (contoh: 6281234567890)
  // ----------------------------------------------------------
  whatsapp: "628XXXXXXXXXX",

  whatsappMessage:
    "Halo, saya ingin berkonsultasi mengenai jasa renovasi rumah.",

  // ----------------------------------------------------------
  // KONTAK
  // TODO: Ganti dengan informasi kontak sebenarnya
  // ----------------------------------------------------------
  email: "email@example.com",
  address: "Perumahan Kirana Cikarang Blok E3 No 31 Rt10/Rw21, Kel.Telaga Murni, Kec.Cikarang Barat",

  // ----------------------------------------------------------
  // AREA LAYANAN
  // TODO: Sesuaikan dengan area layanan bisnis Anda
  // ----------------------------------------------------------
  serviceAreas: [
    "Bekasi",
    "Jakarta",
    "Depok",
    "Bogor",
    "Tangerang",
  ],

  // ----------------------------------------------------------
  // SOSIAL MEDIA
  // TODO: Ganti dengan URL akun sosial media sebenarnya
  // ----------------------------------------------------------
  socialMedia: {
    instagram: "https://instagram.com/username",
    facebook: "https://facebook.com/username",
  },

  // ----------------------------------------------------------
  // ASET VISUAL
  // ----------------------------------------------------------
  logo: "/images/logo.png",
  heroImage:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  // TODO: Ganti heroImage dengan foto proyek asli client:
  // heroImage: "/images/hero.jpg",

  aboutImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=500&fit=crop",
  // TODO: Ganti aboutImage dengan foto proyek asli:
  // aboutImage: "/images/about.jpg",

  // ----------------------------------------------------------
  // DOMAIN & WEBSITE
  // TODO: Ganti dengan domain sebenarnya
  // ----------------------------------------------------------
  website: "https://renovasipro.com",

  // ----------------------------------------------------------
  // SEO
  // TODO: Sesuaikan title dan description dengan keyword target
  // ----------------------------------------------------------
  seo: {
    title: "Jasa Renovasi Rumah Profesional | RenovasiPro",
    description:
      "Jasa renovasi rumah profesional dengan pengerjaan berkualitas dan " +
      "terpercaya. Konsultasikan kebutuhan renovasi rumah Anda bersama kami.",
  },

  // ----------------------------------------------------------
  // STATISTIK & KLAIM
  // TODO: Sesuaikan dengan data riil client (jangan mengarang)
  // ----------------------------------------------------------
  stats: [
    { value: "10+", label: "Proyek Selesai" },
    { value: "15+", label: "Tahun Pengalaman" },
    { value: "100%", label: "Kepuasan Pelanggan" },
    { value: "Gratis", label: "Konsultasi" },
  ],

  // ----------------------------------------------------------
  // INFORMASI LAIN
  // ----------------------------------------------------------
  copyrightYear: 2026,
};

/**
 * Helper: generate URL WhatsApp dengan pesan otomatis.
 * @param {string} [customMessage] - Pesan kustom (opsional).
 *   Jika tidak diisi, menggunakan business.whatsappMessage.
 * @returns {string} URL WhatsApp siap pakai
 */
export const getWhatsAppUrl = (customMessage) => {
  const message = customMessage ?? business.whatsappMessage;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
};
