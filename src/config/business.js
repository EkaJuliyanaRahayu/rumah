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
  whatsapp: "6281280731154",

  whatsappMessage:
    "Halo, saya ingin berkonsultasi mengenai jasa renovasi rumah.",

  // ----------------------------------------------------------
  // KONTAK
  // TODO: Ganti dengan informasi kontak sebenarnya
  // ----------------------------------------------------------
  email: "jackjaya78@gmail.com",
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
  // ----------------------------------------------------------
  socialMedia: {
    facebook: "https://www.facebook.com/share/p/1MV4Mx8PLj/?mibextid=wwXIfr",
  },

  // ----------------------------------------------------------
  // ASET VISUAL
  // ----------------------------------------------------------
  logo: "/images/logo.png",
  heroImage: "/images/hero.jpg",

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
  // TRUST HIGHLIGHTS & NILAI UTAMA
  // Nilai kredibilitas bisnis tanpa klaim atau angka yang dibuat-buat
  // ----------------------------------------------------------
  trustHighlights: [
    { primary: "15+", label: "Tahun Pengalaman", isNumeric: true },
    { primary: "Konsultasi", label: "Sesuai Kebutuhan", isNumeric: false },
    { primary: "Proses", label: "Terencana", isNumeric: false },
    { primary: "Hasil", label: "Fokus Pada Kualitas", isNumeric: false },
  ],
  stats: [
    { value: "15+", label: "Tahun Pengalaman", isNumeric: true },
    { value: "Konsultasi", label: "Sesuai Kebutuhan", isNumeric: false },
    { value: "Proses", label: "Terencana", isNumeric: false },
    { value: "Hasil", label: "Fokus Pada Kualitas", isNumeric: false },
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
