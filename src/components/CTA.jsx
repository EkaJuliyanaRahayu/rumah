import { MessageCircle, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { getWhatsAppUrl } from "../config/business";

export default function CTA() {
  const [ref, isInView] = useInView();

  return (
    <section id="kontak" ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-sm font-semibold text-accent-400 mb-6">
            <Phone size={14} />
            Hubungi Kami
          </span>

          {/* Headline */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Punya Rencana{" "}
            <span className="text-accent-400">Renovasi Rumah?</span>
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-300 sm:text-lg">
            Punya rencana renovasi? Ceritakan kebutuhan Anda, dan mari diskusikan langkah berikutnya.
          </p>

          {/* CTA Button */}
          <a
            href={getWhatsAppUrl(
              "Halo, saya punya rencana renovasi rumah dan ingin mendiskusikan langkah berikutnya."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-accent-500 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-accent-500/30 transition-all duration-300 hover:bg-accent-600 hover:shadow-accent-500/50 hover:-translate-y-1 sm:text-xl"
          >
            <MessageCircle size={24} />
            <span>Mulai Renovasi</span>
          </a>
        </div>
      </div>
    </section>
  );
}
