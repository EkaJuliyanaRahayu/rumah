import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { business, getWhatsAppUrl } from "../config/business";

/* Brand SVG Icons */
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.845L.057 23.448a.5.5 0 0 0 .611.611l5.603-1.475A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.946 0-3.77-.5-5.357-1.38l-.383-.214-3.974 1.046 1.046-3.974-.214-.383A9.93 9.93 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.93-1.956 1.887v2.278h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

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
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-primary-400 transition-all hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={business.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-800 text-primary-400 transition-all hover:bg-[#1877F2] hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
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
                  href={getWhatsAppUrl("Halo, saya ingin bertanya seputar jasa renovasi rumah.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-900 border border-primary-800 px-3.5 py-2 text-xs font-semibold text-primary-200 transition-all hover:bg-accent-500 hover:text-white hover:border-accent-500 hover:-translate-y-0.5"
                >
                  <MessageCircle size={15} />
                  <span>Chat WhatsApp</span>
                </a>
              </li>
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
