import { ArrowRight, Check, MessageCircle, ChevronDown } from "lucide-react";
import { business, getWhatsAppUrl } from "../config/business";

export default function ServiceItem({ service, isActive, onToggle }) {
  const isExpanded = isActive;

  return (
    <div className="border-b border-surface-200 transition-colors duration-300">
      {/* Clickable Header Row */}
      <button
        type="button"
        onClick={onToggle}
        className={`group relative flex w-full items-start justify-between py-6 sm:py-8 text-left transition-all duration-300 select-none min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg px-2 sm:px-4 ${
          isExpanded ? "bg-surface-100/70" : "hover:bg-surface-50/80"
        }`}
        aria-expanded={isExpanded}
      >
        {/* Left Orange Accent Indicator Bar */}
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full bg-accent-500 transition-all duration-300 ${
            isExpanded ? "h-3/4 opacity-100" : "h-0 opacity-0 group-hover:h-1/2 group-hover:opacity-100"
          }`}
        />

        <div className="flex items-start gap-4 sm:gap-8 flex-1 pr-4">
          {/* Numbering */}
          <span
            className={`text-xl sm:text-2xl font-bold font-mono tracking-tight transition-colors duration-300 pt-0.5 ${
              isExpanded
                ? "text-accent-500"
                : "text-primary-300 group-hover:text-accent-500"
            }`}
          >
            {service.number}
          </span>

          {/* Title & Short Description */}
          <div className="flex-1">
            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300 ${
                isExpanded
                  ? "text-primary-950"
                  : "text-primary-900 group-hover:text-primary-950"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`mt-1.5 text-sm sm:text-base leading-relaxed transition-colors duration-300 ${
                isExpanded
                  ? "text-primary-700"
                  : "text-primary-500 group-hover:text-primary-700"
              }`}
            >
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Action Icon / Arrow */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-primary-600 transition-all duration-300 group-hover:bg-accent-50 group-hover:text-accent-600 shrink-0 mt-1">
          <ArrowRight
            className={`h-5 w-5 transition-transform duration-300 ${
              isExpanded
                ? "rotate-90 text-accent-500 scale-110"
                : "group-hover:translate-x-1"
            }`}
          />
        </div>
      </button>

      {/* Expanded Detail Panel */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100 pb-8 pt-2 px-2 sm:px-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-10 sm:pl-16 pr-2 sm:pr-8">
          <div className="rounded-2xl bg-surface-50 border border-surface-200/80 p-5 sm:p-7">
            {/* Detailed Description */}
            <p className="text-base text-primary-700 leading-relaxed sm:text-lg">
              {service.detailedDescription}
            </p>

            {/* Bullets */}
            {service.bullets && service.bullets.length > 0 && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-primary-800">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* WhatsApp Action CTA */}
            <div className="mt-6 pt-5 border-t border-surface-200/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-primary-500 font-medium">
                Konsultasikan rencana {service.title.toLowerCase()} Anda bersama {business.shortName}.
              </span>
              <a
                href={getWhatsAppUrl(
                  `Halo ${business.shortName}, saya ingin berkonsultasi mengenai ${service.title}. Mohon informasi lebih lanjut.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-500/20 transition-all duration-200 hover:bg-accent-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi Renovasi →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
