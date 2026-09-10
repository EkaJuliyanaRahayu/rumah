import {
  MapPin,
  Mail,
  Phone,
  AtSign,
  Globe,
  MessageCircle,
} from "lucide-react";
import { business, getWhatsAppUrl } from "../config/business";

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
];

const serviceLinks = [
  "Renovasi Rumah",
  "Renovasi Kos-kosan",
  "Renovasi Kantor / Ruko",
  "Bangun Rumah"
];


export default function Footer() {
  return (
    <footer className="bg-primary-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2">
              {business.logo ? (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white p-1 shadow-sm flex-shrink-0">
                  <img
                    src={business.logo}
                    alt={business.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500 text-white font-bold text-lg">
                  {business.shortName.charAt(0)}
                </div>
              )}
              <span className="text-xl font-bold text-white">
                {business.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-primary-400">
              {business.description}
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-primary-400 transition-all hover:bg-accent-500 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={business.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-primary-400 transition-all hover:bg-accent-500 hover:text-white"
                aria-label="Instagram"
              >
                <AtSign size={18} />
              </a>
              <a
                href={business.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-primary-400 transition-all hover:bg-accent-500 hover:text-white"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-400 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Layanan
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#layanan"
                    className="text-sm text-primary-400 transition-colors hover:text-accent-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Area */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Kontak
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-primary-400 transition-colors hover:text-accent-400"
                >
                  <Phone size={16} className="mt-0.5 flex-shrink-0" />
                  +{business.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                {business.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                {business.address}
              </li>
            </ul>

            {/* Area Layanan */}
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">
              Area Layanan
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {business.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-primary-800 px-3 py-1 text-xs text-primary-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-14 border-t border-primary-800 pt-8">
          <p className="text-center text-sm text-primary-500">
            © {business.copyrightYear} {business.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
