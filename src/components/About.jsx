import {
  CheckCircle,
  Users,
  Package,
  DollarSign,
  HeadphonesIcon,
  Hammer,
} from "lucide-react";
import { useInView } from "../hooks/useInView";
import { business, getWhatsAppUrl } from "../config/business";

const features = [
  { icon: Users, text: "Tenaga berpengalaman" },
  { icon: Package, text: "Material berkualitas" },
  { icon: DollarSign, text: "Harga transparan" },
  { icon: HeadphonesIcon, text: "Konsultasi sesuai kebutuhan" },
  { icon: Hammer, text: "Pengerjaan profesional" },
];

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="tentang" ref={ref} className="bg-surface-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* TODO: Ganti dengan foto asli proyek renovasi */}
              <img
                src={business.aboutImage}
                alt="Proyek renovasi rumah"
                className="h-full w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Overlay accent corner */}
              <div className="absolute bottom-0 left-0 h-2 w-24 bg-accent-500 rounded-tr-full" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-white p-4 shadow-xl sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50">
                  <CheckCircle className="h-6 w-6 text-accent-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary-900">100%</p>
                  <p className="text-xs text-primary-500">Kepuasan Pelanggan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-600 mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Bangun Ruang yang Lebih{" "}
              <span className="text-gradient">Nyaman</span> untuk Anda
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-600 sm:text-lg">
              Kami menyediakan jasa renovasi rumah dengan fokus pada kualitas
              pengerjaan, ketepatan waktu, komunikasi yang baik dengan
              pelanggan, dan hasil yang sesuai kebutuhan Anda. Setiap proyek
              kami tangani dengan profesional, memastikan setiap detail
              mendapatkan perhatian penuh.
            </p>

            {/* Feature list */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50">
                      <Icon className="h-4 w-4 text-accent-500" />
                    </div>
                    <span className="text-sm font-medium text-primary-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Kenali Kami Lebih Lanjut
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
