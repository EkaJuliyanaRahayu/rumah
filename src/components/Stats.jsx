import { useInView } from "../hooks/useInView";
import { business } from "../config/business";

export default function Stats() {
  const [ref, isInView] = useInView();
  const stats = business.stats || [];

  return (
    <section
      id="stats"
      ref={ref}
      className="relative -mt-1 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block">
                <span className="text-4xl font-extrabold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                <div className="absolute -bottom-1 left-0 h-1 w-0 rounded-full bg-accent-500 transition-all duration-500 group-hover:w-full" />
              </div>
              <p className="mt-3 text-sm font-medium text-primary-500 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent-300 to-transparent" />
    </section>
  );
}
