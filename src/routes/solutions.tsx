import { createFileRoute } from "@tanstack/react-router";
import { Building2, GraduationCap, Library, Users } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/solutions")({
  component: Solutions,
  head: () => ({
    meta: [
      { title: "Education Solutions for Schools & Institutions | Innovation Edge" },
      {
        name: "description",
        content:
          "Institutional education solutions from Innovation Edge: school supplies, stationery, office supplies, printing, Xerox, book fairs, exhibitions, library setup and STEAM resources.",
      },
      { property: "og:title", content: "Education Solutions | Innovation Edge" },
      {
        property: "og:description",
        content: "Complete resource and service support for schools, libraries and offices.",
      },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
});

const solutions = [
  "School Supplies",
  "Stationery",
  "Office Supplies",
  "Printing & Xerox",
  "Book Fairs",
  "School Exhibitions",
  "Library Setup",
  "STEAM & Activity Resources",
];

const audiences = [
  { icon: GraduationCap, label: "Schools & Academies" },
  { icon: Library, label: "Libraries" },
  { icon: Building2, label: "Institutions & Offices" },
  { icon: Users, label: "Educators & Coordinators" },
];

function Solutions() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Education Solutions"
        title="Complete Solutions for Schools & Institutions"
        description="Innovation Edge supports educational institutions with resources, supplies and services that keep classrooms, libraries and administrative offices well equipped."
        image={IMAGES.exhibition}
        imageAlt="School exhibition with student displays"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={IMAGES.library}
                alt="Students studying in a modern school library"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Institutional Support"
              title="One Partner, Many Requirements"
              subtitle="From classroom consumables to campus-wide events, Innovation Edge can support institutions across multiple requirements through a single point of contact."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {solutions.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50}>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3.5 text-sm font-semibold text-primary shadow-card">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-9">
              <CtaLink to="/contact">Discuss Your Requirements</CtaLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Who We Serve" title="Built Around Educational Institutions" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.label} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{a.label}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
