import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | Printing, Xerox, Book Fairs & Library Setup — Innovation Edge" },
      {
        name: "description",
        content:
          "Innovation Edge services include printing, Xerox, book fairs, school exhibitions, library setup and broader education solutions for institutions.",
      },
      { property: "og:title", content: "Services | Innovation Edge" },
      {
        property: "og:description",
        content: "Printing, Xerox, book fairs, exhibitions, library setup and education solutions.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const services = [
  {
    title: "Printing",
    image: IMAGES.printing,
    alt: "Professional printing machines producing documents",
    text: "Printing support for academic material, school documentation and office requirements.",
    benefits: ["Academic & office documents", "Bulk requirements", "Consistent output quality"],
  },
  {
    title: "Xerox",
    image: IMAGES.printing,
    alt: "Photocopying machines in a print centre",
    text: "Photocopying and duplication for everyday school and office needs.",
    benefits: ["Everyday copying", "Volume duplication", "Quick turnaround"],
  },
  {
    title: "Book Fairs",
    image: IMAGES.bookfair,
    alt: "Students browsing books at a school book fair",
    text: "On-campus book fairs that put curated titles directly in front of students.",
    benefits: ["Curated title selection", "On-campus setup", "Encourages reading habits"],
  },
  {
    title: "School Exhibitions",
    image: IMAGES.exhibition,
    alt: "Students presenting projects at a school exhibition",
    text: "Support for school exhibitions with resources, displays and material.",
    benefits: ["Display support", "Educational material", "Event coordination"],
  },
  {
    title: "Library Setup",
    image: IMAGES.library,
    alt: "Modern school library with organised shelves",
    text: "Book selection, resources and organisation support for institutional libraries.",
    benefits: ["Title selection", "Resource planning", "Organisation guidance"],
  },
  {
    title: "Educational Solutions",
    image: IMAGES.steam,
    alt: "Students working with STEAM learning resources",
    text: "STEAM and activity resources plus broader learning support for institutions.",
    benefits: ["STEAM resources", "Activity material", "Requirement-based support"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Services That Support Every Learning Environment"
        description="Printing, Xerox, book fairs, exhibitions, library setup and education solutions delivered through a single, education-focused partner."
        image={IMAGES.printing}
        imageAlt="Printing and copying services centre"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-2xl shadow-lift">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div>
                  <span className="eyebrow">Service</span>
                  <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm font-medium text-primary">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <CtaLink to="/contact" variant="outline">
                      Enquire About {s.title}
                    </CtaLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            title="Have a specific requirement?"
            subtitle="Tell us what your institution needs and we will respond with a suitable proposal."
          />
          <Reveal className="mt-8 flex justify-center">
            <CtaLink to="/contact">Get in Touch</CtaLink>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
