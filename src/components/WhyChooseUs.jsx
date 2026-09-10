import { useInView } from "../hooks/useInView";

const advantages = [
  {
    id: 1,
    title: "Berpengalaman",
    description:
      "Tim dengan pengalaman luas dalam proyek rumah, kantor, dan ruko.",
    icon: "🎖️",
  },
  {
    id: 2,
    title: "Material berkualitas",
    description:
      "Material yang disesuaikan dengan kebutuhan dan anggaran Anda.",
    icon: "📦",
  },
  {
    id: 3,
    title: "Harga transparan",
    description:
      "Estimasi biaya dijelaskan detail sebelum pekerjaan dimulai.",
    icon: "💰",
  },
  {
    id: 4,
    title: "Tepat waktu",
    description:
      "Berkomitmen menyelesaikan pekerjaan sesuai timeline yang disepakati.",
    icon: "⏱️",
  },
  {
    id: 5,
    title: "Konsultasi gratis",
    description:
      "Dapatkan konsultasi rencana renovasi tanpa biaya di awal.",
    icon: "💬",
  },
  {
    id: 6,
    title: "Garansi pekerjaan",
    description:
      "Jaminan hasil pekerjaan sesuai kesepakatan yang berlaku.",
    icon: "🛡️",
  },
];

export default function WhyChooseUs() {
  const [ref, isInView] = useInView();

  return (
    <section id="keunggulan" ref={ref} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-full bg-[#faebe1] px-4 py-1 text-xs font-semibold text-[#b85a2e] mb-3">
            Keunggulan
          </span>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-slate-900 tracking-tight">
            Kenapa memilih kami?
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
            Kami berkomitmen memberikan layanan terbaik untuk setiap proyek renovasi Anda.
          </p>
        </div>

        {/* Grid of 6 Cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {advantages.map((item, index) => (
            <div
              key={item.id}
              className={`rounded-2xl bg-[#F6F4EE] p-6 sm:p-7 text-left transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(index + 1) * 60}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#faebe1] text-xl">
                <span>{item.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
