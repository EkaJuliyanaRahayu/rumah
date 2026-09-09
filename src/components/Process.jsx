import {
  MessageSquare,
  ClipboardList,
  Hammer,
  CheckCircle,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Konsultasi",
    description: "Diskusikan kebutuhan dan konsep renovasi yang Anda inginkan bersama tim kami.",
    icon: MessageSquare,
  },
  {
    id: 2,
    number: "02",
    title: "Survey & Estimasi",
    description: "Tim melakukan survey lokasi dan memberikan estimasi biaya serta rencana pengerjaan.",
    icon: ClipboardList,
  },
  {
    id: 3,
    number: "03",
    title: "Pengerjaan",
    description: "Proses renovasi dilakukan secara profesional sesuai kesepakatan dan timeline.",
    icon: Hammer,
  },
  {
    id: 4,
    number: "04",
    title: "Serah Terima",
    description: "Proyek selesai dan dilakukan pengecekan bersama untuk memastikan kualitas hasil.",
    icon: CheckCircle,
  },
];

export default function Process() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="bg-surface-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-600 mb-4">
            Proses Kerja
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
            Bagaimana Proses Renovasi{" "}
            <span className="text-gradient">Kami?</span>
          </h2>
          <p className="mt-4 text-base text-primary-500 sm:text-lg">
            Proses yang transparan dan terorganisir untuk hasil terbaik.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-14 hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-surface-200" />
            <div
              className={`absolute top-12 left-0 h-0.5 bg-accent-500 transition-all duration-1000 delay-500 ${
                isInView ? "right-0" : "right-full"
              }`}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    {/* Circle */}
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-4 border-accent-500 bg-white shadow-lg">
                      <Icon className="h-10 w-10 text-accent-500" />
                    </div>

                    {/* Number */}
                    <span className="mt-5 text-sm font-bold text-accent-500">
                      Langkah {step.number}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2 text-lg font-bold text-primary-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-primary-500">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline */}
        <div className="mt-14 lg:hidden">
          <div className="relative pl-8 sm:pl-12">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-surface-200 sm:left-5" />

            <div className="space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className={`relative transition-all duration-700 ${
                      isInView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    {/* Circle on timeline */}
                    <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 shadow-md sm:-left-12 sm:h-10 sm:w-10">
                      <Icon className="h-3 w-3 text-white sm:h-5 sm:w-5" />
                    </div>

                    {/* Content */}
                    <div className="rounded-xl bg-white p-5 shadow-sm border border-surface-100">
                      <span className="text-xs font-bold text-accent-500">
                        Langkah {step.number}
                      </span>
                      <h3 className="mt-1 text-base font-bold text-primary-900 sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
