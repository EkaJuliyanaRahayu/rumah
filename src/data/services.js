/**
 * =============================================
 * DATA LAYANAN
 * =============================================
 * Single source of truth untuk daftar layanan.
 * Digunakan pada section "Layanan Kami" (Editorial Service List).
 * =============================================
 */

const services = [
  {
    id: 1,
    number: "01",
    title: "Renovasi Rumah",
    shortDescription: "Transformasi hunian sesuai kebutuhan",
    detailedDescription:
      "Perencanaan dan renovasi hunian secara menyeluruh ataupun bertahap untuk meningkatkan kenyamanan, estetika, dan nilai fungsi tempat tinggal keluarga Anda.",
    bullets: [
      "Penataan ulang layout & denah ruang",
      "Perbaikan struktur, atap & fasad",
      "Pengerjaan interior & eksterior",
      "Material pilihan berkualitas & rapi",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Renovasi Dapur",
    shortDescription: "Dapur yang lebih fungsional dan modern",
    detailedDescription:
      "Perencanaan dan renovasi dapur yang disesuaikan dengan kebutuhan aktivitas, layout kitchen set, dan karakter rumah Anda.",
    bullets: [
      "Penataan layout kitchen set ergonomis",
      "Instalasi plumbing pipa & kelistrikan",
      "Renovasi area backsplash & countertop",
      "Penyesuaian kebutuhan ventilasi udara",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Renovasi Kamar Mandi",
    shortDescription: "Ruang yang nyaman dan modern",
    detailedDescription:
      "Transformasi kamar mandi menjadi lebih bersih, higienis, kedap air, dan bernuansa modern dengan instalasi sanitair berkualitas.",
    bullets: [
      "Waterproofing anti bocor & rembes",
      "Penggantian keramik dinding & lantai",
      "Pemisahan area basah & kering",
      "Instalasi sanitair & exhaust fan",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Renovasi Ruang Tamu",
    shortDescription: "Ruang yang nyaman untuk berkumpul",
    detailedDescription:
      "Penataan ulang ruang tamu dan ruang keluarga agar terasa lebih luas, hangat, representatif, dan menyambut setiap tamu.",
    bullets: [
      "Konsep open space yang lapang",
      "Plafon & pencahayaan ambient hangat",
      "Aksen dinding & partisi dekoratif",
      "Penataan sirkulasi udara alami",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Renovasi Kamar Tidur",
    shortDescription: "Ruang istirahat yang lebih personal",
    detailedDescription:
      "Menciptakan ruang istirahat yang tenang, nyaman, fungsional, dan sesuai dengan kepribadian serta kebutuhan privasi Anda.",
    bullets: [
      "Optimasi pencahayaan & sirkulasi",
      "Penataan custom wardrobe & storage",
      "Pemilihan material dinding & lantai",
      "Desain interior yang menenangkan",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Renovasi Kantor / Ruko",
    shortDescription: "Ruang usaha yang lebih profesional",
    detailedDescription:
      "Redesign dan renovasi tempat usaha, kantor, atau ruko agar lebih produktif, profesional, dan memberikan impresi positif bagi klien.",
    bullets: [
      "Penataan layout ruang kerja & meeting",
      "Instalasi jaringan & kelistrikan rapi",
      "Fasad ruko modern & representatif",
      "Pengerjaan tepat waktu minim downtime",
    ],
  },
];

export default services;
