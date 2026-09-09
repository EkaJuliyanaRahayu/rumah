import { MessageCircle, ArrowDown, CheckCircle } from "lucide-react";
import { business, getWhatsAppUrl } from "../config/business";

const highlights = [
  "Konsultasi Gratis",
  "Pengerjaan Profesional",
  "Hasil Berkualitas",
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      {/* TODO: Ganti background image dengan foto proyek asli client */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `url('${business.heroImage}')`,
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-950/70" />
        {/* Bottom gradient for fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              {business.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Renovasi Rumah Impian Anda,{" "}
            <span className="text-gradient">Kami Wujudkan.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-primary-200 sm:text-xl">
            {business.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-accent-500/30 transition-all duration-300 hover:bg-accent-600 hover:shadow-accent-500/50 hover:-translate-y-1 sm:text-lg"
            >
              <MessageCircle size={20} />
              💬 Konsultasi Gratis
            </a>
            <a
              href="#portofolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 sm:text-lg"
            >
              Lihat Portofolio
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Highlights */}
          <div className="animate-fade-in-up animation-delay-400 mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-white/80"
              >
                <CheckCircle
                  size={18}
                  className="text-accent-400 flex-shrink-0"
                />
                <span className="text-sm font-medium sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-fade-in animation-delay-600">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-primary-400 transition-colors hover:text-accent-400"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
