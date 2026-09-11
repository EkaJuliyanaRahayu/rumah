import { useState } from "react";
import { ArrowRight } from "lucide-react";
import services from "../data/services";
import ServiceItem from "./ServiceItem";
import { business, getWhatsAppUrl } from "../config/business";
import { useInView } from "../hooks/useInView";

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(1); // Default item 1 open or null
  const [ref, isInView] = useInView();

  const handleToggle = (id) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="layanan" ref={ref} className="bg-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Editorial Layout: 40% Left / 60% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN — ~40% (lg:col-span-5) */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Small Label */}
            <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-600 mb-4 sm:mb-6">
              LAYANAN KAMI
            </span>

            {/* Big Editorial Headline */}
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-primary-950 sm:text-4xl lg:text-5xl">
              Solusi Renovasi <br />
              <span className="text-gradient">untuk Setiap Ruang.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-primary-600 max-w-lg">
              Kami membantu mewujudkan ruang yang lebih nyaman, fungsional, dan sesuai
              dengan kebutuhan Anda dengan standar pengerjaan profesional dan transparan.
            </p>

            {/* Small Action CTA */}
            <div className="mt-8 pt-6 border-t border-surface-200/80">
              <a
                href={getWhatsAppUrl(
                  `Halo ${business.shortName}, saya ingin mendiskusikan kebutuhan renovasi rumah saya.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-base font-bold text-primary-900 transition-colors duration-200 hover:text-accent-500"
              >
                <span>Diskusikan Kebutuhan Anda</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-50 text-accent-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
              <p className="mt-2 text-xs text-primary-400">
                Hubungi kami untuk survey lokasi dan estimasi biaya tanpa komitmen.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN — ~60% (lg:col-span-7) */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Editorial Service List */}
            <div className="border-t border-surface-200 divide-y-0">
              {services.map((service) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isActive={activeServiceId === service.id}
                  onToggle={() => handleToggle(service.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
