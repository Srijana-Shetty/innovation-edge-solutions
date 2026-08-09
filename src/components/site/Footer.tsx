import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logo from "@/assets/innovation-edge-logo.jpeg";
import { CONTACT } from "@/lib/site-content";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "What We Offer", to: "/what-we-offer" },
      { label: "Products", to: "/products" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "School Solutions", to: "/solutions" },
      { label: "Library Setup", to: "/library-setup" },
      { label: "Book Fairs", to: "/book-fairs" },
      { label: "Services", to: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img
              src={logo}
              alt="Innovation Edge logo"
              width={140}
              height={140}
              loading="lazy"
              className="h-20 w-auto rounded-lg bg-background p-1.5"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Innovation Edge brings together educational products, resources and services
              for schools, students, educators and institutions.
            </p>
            <p className="mt-4 text-xs font-semibold tracking-[0.22em] text-accent">
              EMPOWERING EDUCATION
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold tracking-[0.14em] text-primary-foreground">
                {col.title.toUpperCase()}
              </h3>
              <span className="mt-3 block h-0.5 w-8 bg-accent" />
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold tracking-[0.14em]">CONTACT</h3>
            <span className="mt-3 block h-0.5 w-8 bg-accent" />
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-primary-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/55">
            © {new Date().getFullYear()} Innovation Edge. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Innovation Edge social profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
