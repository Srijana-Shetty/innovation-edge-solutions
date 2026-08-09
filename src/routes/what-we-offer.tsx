import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { OfferingCard } from "@/components/site/OfferingCard";
import { CtaLink } from "@/components/site/CtaLink";
import { Reveal } from "@/components/site/Reveal";
import { IMAGES, OFFERINGS } from "@/lib/offerings";

export const Route = createFileRoute("/what-we-offer")({
  component: WhatWeOffer,
  head: () => ({
    meta: [
      { title: "What We Offer | Innovation Edge Education Solutions" },
      {
        name: "description",
        content:
          "Books, STEAM resources, school and office supplies, stationery, printing, Xerox, book fairs, exhibitions and library setup from Innovation Edge.",
      },
      { property: "og:title", content: "What We Offer | Innovation Edge" },
      {
        property: "og:description",
        content:
          "Comprehensive education products and services for schools, students and institutions.",
      },
      { property: "og:url", content: "/what-we-offer" },
    ],
    links: [{ rel: "canonical", href: "/what-we-offer" }],
  }),
});

const groups = ["Books & Resources", "Supplies", "Services", "Institutional"] as const;

function WhatWeOffer() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What We Offer"
        title="Comprehensive Solutions for Learning Environments"
        description="Products, resources and services designed to support learning, teaching and educational environments — from a single classroom to a full institution."
        image={IMAGES.academic}
        imageAlt="Academic books arranged on a desk"
      />

      {groups.map((group, gi) => (
        <section
          key={group}
          className={gi % 2 === 0 ? "bg-background py-20 sm:py-24" : "bg-surface py-20 sm:py-24"}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="left" eyebrow="Category" title={group} />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {OFFERINGS.filter((o) => o.group === group).map((item, i) => (
                <OfferingCard key={item.title} item={item} delay={i * 60} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Need a tailored combination of products and services?
            </h2>
            <p className="mt-3 text-primary-foreground/70">
              Share your requirements and we will put together a suitable proposal.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaLink to="/contact">Discuss Your Requirements</CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
