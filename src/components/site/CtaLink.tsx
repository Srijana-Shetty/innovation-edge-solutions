import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const styles = {
  accent:
    "bg-accent text-accent-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105",
  navy: "bg-primary text-primary-foreground shadow-card hover:-translate-y-0.5 hover:shadow-lift",
  outline:
    "border border-primary/25 bg-background/70 text-primary hover:border-accent hover:text-accent",
  ghostLight:
    "border border-primary-foreground/30 text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground",
} as const;

export function CtaLink({
  to,
  children,
  variant = "accent",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(base, styles[variant], className)}>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export const ctaStyles = { base, styles };
