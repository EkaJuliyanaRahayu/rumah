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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        isScrolled
          ? "glass-nav shadow-lg border-b border-surface-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2"
            onClick={handleNavClick}
          >
            {business.logo ? (
              <img
                src={business.logo}
                alt={business.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500 text-white font-bold text-lg">
                {business.shortName.charAt(0)}
              </div>
            )}
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-primary-900" : "text-white"
              }`}
            >
              {business.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary-900/10 ${
                  isScrolled
                    ? "text-primary-700 hover:text-primary-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`rounded-lg p-2 lg:hidden transition-colors ${
              isScrolled
                ? "text-primary-900 hover:bg-primary-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="rounded-lg px-4 py-3 text-base font-medium text-primary-700 transition-colors hover:bg-primary-50 hover:text-primary-900"
            >
              {link.label}
            </a>
          ))}
          <hr className="my-2 border-surface-200" />
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600">
          </a>
        </div>
      </div>
    </nav>
  );
}
