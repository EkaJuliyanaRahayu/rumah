import {
  Award,
  Package,
  DollarSign,
  Clock,
  MessageCircle,
  Shield,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

// TODO: Sesuaikan keunggulan di bawah ini dengan kebijakan bisnis Anda
const advantages = [
  {
    id: 1,
    number: "01",
    title: "Berpengalaman",
    description:
      "Tim dengan pengalaman dalam berbagai proyek renovasi rumah, kantor, dan ruko.",
    icon: Award,
  },
  {
    id: 2,
    number: "02",
    title: "Material Berkualitas",
    description:
      "Menggunakan material yang disesuaikan dengan kebutuhan dan anggaran proyek Anda.",
    icon: Package,
  },
  {
    id: 3,
    number: "03",
    title: "Harga Transparan",
    description:
      "Estimasi biaya dijelaskan secara jelas dan detail sebelum pekerjaan dimulai.",
    icon: DollarSign,
  },
  {
    id: 4,
    number: "04",
    title: "Tepat Waktu",
    description:
      "Berkomitmen menyelesaikan pekerjaan sesuai timeline yang telah disepakati bersama.",
    icon: Clock,
  },
  {
    id: 5,
    number: "05",
    title: "Konsultasi Gratis",
    description:
      "Diskusikan kebutuhan renovasi Anda tanpa biaya konsultasi awal.",
    icon: MessageCircle,
  },
  {
    id: 6,
    number: "06",
    // TODO: Sesuaikan dengan kebijakan garansi bisnis Anda
    title: "Garansi Pekerjaan",
    description:
      "Kami memberikan jaminan terhadap hasil pekerjaan sesuai kebijakan yang berlaku.",
    icon: Shield,
  },
];

export default function WhyChooseUs() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="bg-primary-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-sm font-semibold text-accent-400 mb-4">
            Keunggulan
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Kenapa Memilih{" "}
            <span className="text-accent-400">Kami?</span>
          </h2>
          <p className="mt-4 text-base text-primary-300 sm:text-lg">
            Kami berkomitmen memberikan layanan terbaik untuk setiap proyek renovasi.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl border border-primary-800 bg-primary-900/50 p-8 transition-all duration-700 hover:border-accent-500/50 hover:bg-primary-900 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-primary-800/50 transition-colors group-hover:text-accent-500/20">
                  {item.number}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 transition-colors group-hover:bg-accent-500/20">
                  <Icon className="h-6 w-6 text-accent-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-primary-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
