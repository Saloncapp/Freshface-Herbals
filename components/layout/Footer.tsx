import Link from "next/link";
import { Camera, MessageCircle, BookOpen } from "lucide-react";

const storyLinks = [
  { href: "/our-story", label: "Our Heritage" },
  { href: "/our-story#generations", label: "Three Generations" },
  { href: "/our-story#philosophy", label: "Philosophy" },
];

const serviceLinks = [
  { href: "/services", label: "Facial Treatments" },
  { href: "/services", label: "Massage Therapy" },
  { href: "/services", label: "Hair Color" },
  { href: "/services", label: "Pedicure" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-semibold text-gold">
              Fresh Face Herbals
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Premium herbal skincare rooted in the Kavery Delta, Tamil Nadu.
              Three generations of ancestral formulas — 100% natural, zero
              synthetics.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Our Story
            </h4>
            <ul className="space-y-2">
              {storyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <Camera size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  <BookOpen size={16} />
                  Journal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 text-center">
        <p className="font-serif text-sm italic text-cream/50">
          ஆற்று மண்ணில் வளர்ந்த அழகு
        </p>
        <p className="mt-2 text-xs text-cream/30">
          © {new Date().getFullYear()} Fresh Face Herbals. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
