import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/70 bg-background/85 shadow-nav backdrop-blur-xl"
          : "border-transparent bg-background",
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled ? "py-2" : "py-3.5",
        )}
      >
        <Logo compact={scrolled} className="min-w-0" />

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.slice(1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-accent" }}
              className="rounded-md px-3 py-2 text-[0.82rem] font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:border-accent hover:text-accent xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/60 py-3.5 text-base font-medium text-foreground/85 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
