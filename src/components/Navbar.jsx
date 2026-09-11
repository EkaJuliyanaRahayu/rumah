import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { business, getWhatsAppUrl } from "../config/business";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={handleNavClick}
          >
            {business.logo ? (
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white p-1 shadow-sm flex-shrink-0 transition-transform duration-200 hover:scale-105">
                <img
                  src={business.logo}
                  alt={business.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500 text-white font-bold text-base shadow-md">
                {business.shortName.charAt(0)}
              </div>
            )}
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-white sm:text-lg">
                {business.shortName}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-accent-400">
                Jasa Renovasi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                    isActive
                      ? "text-accent-400 font-semibold"
                      : isScrolled
                      ? "text-primary-200 hover:text-white"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Subtle active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent-500/20 transition-all duration-200 hover:bg-accent-600 hover:shadow-accent-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              <span>Konsultasi</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="rounded-lg p-2 lg:hidden text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-72 mobile-menu-panel shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col justify-between ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              {business.logo ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-0.5 shadow-sm flex-shrink-0">
                  <img
                    src={business.logo}
                    alt={business.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-500 text-white font-bold text-xs">
                  {business.shortName.charAt(0)}
                </div>
              )}
              <span className="text-sm font-bold text-white">
                {business.shortName}
              </span>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="rounded-lg p-1.5 text-primary-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Tutup menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent-500/15 text-accent-400 font-semibold border-l-2 border-accent-500"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-white/10">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600"
          >
            <MessageCircle size={16} />
            <span>Konsultasi</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
