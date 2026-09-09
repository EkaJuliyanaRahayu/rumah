import { MapPin, MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { business, getWhatsAppUrl } from "../config/business";

export default function ServiceArea() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="bg-surface-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-600 mb-4">
            Area Layanan
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
            Melayani Area{" "}
            <span className="text-gradient">Jabodetabek</span>
          </h2>

          {/* Area Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {business.serviceAreas.map((area, index) => (
              <span
                key={area}
                className={`inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white px-5 py-2.5 text-sm font-medium text-primary-700 shadow-sm transition-all duration-500 hover:border-accent-300 hover:shadow-md hover:-translate-y-0.5 ${
                  isInView
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <MapPin size={14} className="text-accent-500" />
                {area}
              </span>
            ))}
          </div>

          {/* Note */}
          <p
            className={`mt-8 text-sm text-primary-500 transition-all duration-700 delay-500 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Tidak yakin apakah lokasi Anda termasuk area layanan kami?
            <br />
            Hubungi kami untuk konsultasi.
          </p>

          {/* CTA */}
          <a
            href={getWhatsAppUrl(
              "Halo, saya ingin bertanya apakah lokasi saya termasuk area layanan."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all duration-700 delay-600 hover:bg-accent-600 hover:-translate-y-0.5 hover:shadow-accent-500/40 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <MessageCircle size={16} />
            💬 Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
