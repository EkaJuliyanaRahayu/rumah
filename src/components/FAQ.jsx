import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqData from "../data/faq";
import { useInView } from "../hooks/useInView";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-surface-200 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-accent-600"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-primary-900 pr-4 sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-primary-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent-500" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-primary-500 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const [ref, isInView] = useInView();

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-600 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary-900 sm:text-4xl lg:text-5xl">
            Pertanyaan yang Sering{" "}
            <span className="text-gradient">Ditanyakan</span>
          </h2>
          <p className="mt-4 text-base text-primary-500 sm:text-lg">
            Temukan jawaban atas pertanyaan umum seputar layanan renovasi kami.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`mt-12 rounded-2xl border border-surface-200 bg-surface-50 px-6 sm:px-8 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
