import { useInView } from "../hooks/useInView";
import { business } from "../config/business";

export default function Stats() {
  const [ref, isInView] = useInView();
  const items = business.trustHighlights || business.stats || [];

  return (
    <section
      id="stats"
      ref={ref}
      aria-label="Trust Highlights"
      className="relative z-10 bg-white border-y border-surface-200/80 py-12 sm:py-16 lg:py-18"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 lg:gap-y-0 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {items.map((item, index) => {
            const primaryText = item.primary || item.value;
            const isNumeric = item.isNumeric ?? primaryText === "15+";

            return (
              <div
                key={item.label}
                className="group relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 cursor-default transition-transform duration-300 ease-out hover:-translate-y-0.5"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Primary Anchor / Title */}
                <div className="flex h-12 sm:h-14 items-center justify-center">
                  {isNumeric ? (
                    <span className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-primary-900 transition-colors duration-300 group-hover:text-primary-950 font-sans">
                      {primaryText}
                    </span>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-900 transition-colors duration-300 group-hover:text-primary-950">
                      {primaryText}
                    </span>
                  )}
                </div>

                {/* Small Uppercase Label */}
                <p className="mt-2 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-primary-500 transition-colors duration-300 group-hover:text-accent-600">
                  {item.label}
                </p>

                {/* Subtle Accent Line on Hover */}
                <div
                  className="mt-2.5 h-0.5 w-0 rounded-full bg-accent-500 opacity-0 transition-all duration-300 ease-out group-hover:w-8 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Vertical Thin Divider for Desktop */}
                {index < items.length - 1 && (
                  <div
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-surface-200"
                    aria-hidden="true"
                  />
                )}

                {/* Vertical Thin Divider for Tablet (2-column layout) */}
                {index % 2 === 0 && index < items.length - 1 && (
                  <div
                    className="hidden min-[480px]:block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-surface-200"
                    aria-hidden="true"
                  />
                )}

                {/* Subtle Horizontal Divider for Mobile (1-column layout below 480px) */}
                {index < items.length - 1 && (
                  <div
                    className="min-[480px]:hidden w-12 h-px bg-surface-200/80 mx-auto mt-6"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle bottom edge gradient divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-accent-400/50 to-transparent" />
    </section>
  );
}
