# 🏗️ RenovasiPro — Landing Page Jasa Renovasi Rumah Profesional

Landing page modern, elegan, dan berkonversi tinggi untuk bisnis jasa renovasi rumah, dibangun dengan **React**, **Vite**, **Tailwind CSS**, dan **Lucide React**.

Didesain khusus untuk menjadi tujuan traffic iklan (Facebook Ads, Instagram Ads, Google Ads) dengan fokus mengarahkan calon klien ke **konsultasi via WhatsApp**.

---

## 🚀 Cara Menjalankan Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Server Development
```bash
npm run dev
```
Buka browser di `http://localhost:5173/`

### 3. Build untuk Production
```bash
npm run build
```
Output build akan tersimpan di folder `dist/`.

---

## 🎯 Single Source of Truth: `src/config/business.js`

Semua identitas dan data bisnis dikelola di satu file:
👉 **[`src/config/business.js`](src/config/business.js)**

Ketika ada perubahan dari klien, **cukup ubah file ini saja** tanpa perlu mencari ke berbagai komponen!

### Yang dapat diubah di `src/config/business.js`:
- **`name` & `shortName`**: Nama bisnis yang tampil di navbar, footer, copyright, dan SEO.
- **`tagline` & `description`**: Tagline hero section dan deskripsi profil usaha.
- **`whatsapp`**: Nomor WhatsApp tujuan konsultasi (format: kode negara tanpa spasi, contoh: `6281234567890`).
- **`whatsappMessage`**: Pesan pembuka default ketika klien klik tombol WhatsApp.
- **`email` & `address`**: Kontak dan alamat kantor.
- **`serviceAreas`**: Daftar kota/wilayah jangkauan layanan.
- **`socialMedia`**: Tautan akun Instagram & Facebook.
- **`logo`**: Path ke file logo (jika `null`, otomatis menampilkan badge huruf inisial).
- **`heroImage` & `aboutImage`**: URL atau path gambar untuk hero & about section.
- **`website`**: Domain website utama.
- **`seo`**: Title dan deskripsi untuk optimasi mesin pencari.
- **`stats`**: Data angka proyek, pengalaman, dan kepuasan pelanggan.

---

## 📂 Mengelola Konten Tambahan

Semua data tersimpan rapi dalam file JavaScript statis (tanpa perlu database atau backend):

| Konten | Lokasi File | Keterangan |
|---|---|---|
| **Identitas Bisnis** | [`src/config/business.js`](src/config/business.js) | Nama, WA, email, alamat, logo, SEO, medsos |
| **Daftar Layanan** | [`src/data/services.js`](src/data/services.js) | Layanan, fitur, icon, dan pesan WA khusus |
| **Portofolio** | [`src/data/portfolio.js`](src/data/portfolio.js) | Foto proyek, kategori, lokasi, deskripsi |
| **Before & After** | [`src/data/beforeAfter.js`](src/data/beforeAfter.js) | Komparasi foto sebelum dan sesudah renovasi |
| **Testimoni Klien** | [`src/data/testimonials.js`](src/data/testimonials.js) | Ulasan pelanggan, rating bintang, lokasi |
| **FAQ** | [`src/data/faq.js`](src/data/faq.js) | Tanya jawab seputar biaya, survey, proses |

---

## 📋 Checklist Sebelum Launching

Sebelum website dipublikasikan atau dipasang iklan, pastikan:

- [ ] Ganti nomor WhatsApp di `src/config/business.js` dengan nomor asli bisnis.
- [ ] Sesuaikan nama bisnis, tagline, dan deskripsi di `src/config/business.js`.
- [ ] Masukkan alamat kantor dan area layanan di `src/config/business.js`.
- [ ] Ganti tautan sosial media (Instagram, Facebook) di `src/config/business.js`.
- [ ] Ganti foto-foto Unsplash placeholder dengan dokumentasi proyek asli:
  - Hero image & about image di `src/config/business.js`
  - Foto portofolio di `src/data/portfolio.js`
  - Foto before & after di `src/data/beforeAfter.js`
- [ ] Sesuaikan testimoni di `src/data/testimonials.js` dengan ulasan asli pelanggan.
- [ ] Sesuaikan FAQ di `src/data/faq.js` dengan kebijakan bisnis Anda.
- [ ] Masukkan favicon bisnis di `public/favicon.svg` (atau `public/favicon.ico`).
- [ ] Sesuaikan domain di `public/robots.txt` dan `public/sitemap.xml`.

---

## 🛠️ Tech Stack & Fitur

- **React 19** + **Vite**: Performa super cepat dan Hot Module Replacement (HMR).
- **Tailwind CSS v4**: Desain modern, clean, responsif (Mobile, Tablet, Desktop).
- **Lucide React**: Icon modern dan konsisten.
- **Sticky / Glassmorphism Navbar**: Transparan saat di atas, blur elegan saat di-scroll.
- **Interactive Portfolio Filter**: Filter instan berdasarkan kategori (Semua, Rumah, Dapur, Kamar Mandi, Kantor).
- **Before & After Interactive Slider**: Membandingkan foto sebelum & sesudah renovasi secara visual.
- **Accordion FAQ**: Tanya jawab interaktif yang rapi dan mudah dibaca.
- **Floating WhatsApp Button**: Tombol chat mengambang yang selalu terlihat di mobile & desktop.
- **SEO Ready**: Meta tags, Open Graph, Twitter Cards, Semantic HTML, Sitemap & Robots.txt.
