import { MessageCircle } from "lucide-react";
import portfolio from "../data/portfolio";
import PortfolioCarousel from "./PortfolioCarousel";
import { business, getWhatsAppUrl } from "../config/business";
import { useInView } from "../hooks/useInView";

export default function Portfolio() {
  const [ref, isInView] = useInView();

  return (
    <section
      id="portofolio"
      ref={ref}
      className="bg-surface-50 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-600 mb-4 sm:mb-6">
            PROYEK KAMI
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-950 sm:text-4xl lg:text-5xl">
            Proyek yang Telah <br className="hidden sm:inline" />
            <span className="text-gradient">Kami Kerjakan</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-primary-600 max-w-2xl mx-auto">
            Beberapa hasil pekerjaan renovasi yang telah kami kerjakan untuk menciptakan ruang
            yang lebih nyaman dan sesuai dengan kebutuhan pelanggan.
          </p>
        </div>

        {/* Large Horizontal Project Carousel */}
        <div
          className={`mt-12 sm:mt-16 transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <PortfolioCarousel items={portfolio} />
        </div>

        {/* Portfolio CTA */}
        <div
          className={`mt-16 sm:mt-20 mx-auto max-w-2xl text-center transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary-950">
            Ingin mewujudkan renovasi seperti ini?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-primary-600">
            Konsultasikan rencana renovasi Anda bersama kami.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={getWhatsAppUrl(
                `Halo ${business.shortName}, saya melihat portofolio proyek di website dan ingin berkonsultasi mengenai rencana renovasi rumah saya.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent-500 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-accent-500/25 transition-all duration-200 hover:bg-accent-600 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Konsultasi Gratis →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
