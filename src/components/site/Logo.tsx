import { Link } from "@tanstack/react-router";
import logo from "@/assets/innovation-edge-logo.jpeg";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
  compact = false,
}: {
  className?: string;
  invert?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="Innovation Edge — Empowering Education, home"
      className={cn("flex shrink-0 items-center gap-3", className)}
    >
      <img
        src={logo}
        alt="Innovation Edge logo"
        width={96}
        height={96}
        className={cn(
          "w-auto rounded-md object-contain transition-all duration-300",
          compact ? "h-10" : "h-12 sm:h-14",
          invert && "bg-background/95 p-1",
        )}
      />
      <span className="hidden min-w-0 flex-col leading-tight sm:flex">
        <span
          className={cn(
            "font-display text-[0.95rem] font-extrabold tracking-tight",
            invert ? "text-primary-foreground" : "text-primary",
          )}
        >
          INNOVATION<span className="text-accent">EDGE</span>
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-medium tracking-[0.22em]",
            invert ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          EMPOWERING EDUCATION
        </span>
      </span>
    </Link>
  );
}
