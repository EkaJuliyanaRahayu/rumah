/**
 * =============================================
 * DEPRECATED — data/config.js
 * =============================================
 * File ini sudah tidak digunakan secara aktif.
 * Semua konfigurasi bisnis telah dipindahkan ke:
 *   src/config/business.js
 *
 * File ini dipertahankan hanya untuk kompatibilitas
 * mundur jika ada referensi yang terlewat.
 * =============================================
 */

// Re-export dari sumber baru agar tidak ada import yang rusak
export { business as BUSINESS_CONFIG, getWhatsAppUrl as getWhatsAppLink } from "../config/business";
