import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import type { Offering } from "@/lib/offerings";
import { Reveal } from "./Reveal";

export function OfferingCard({ item, delay = 0 }: { item: Offering; delay?: number }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.BookOpen;

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <Link
        to={item.to}
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-400 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/5 to-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/95 text-accent shadow-card">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Learn More
            <Icons.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
