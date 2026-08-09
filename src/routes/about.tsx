import { createFileRoute } from "@tanstack/react-router";
import { Building2, GraduationCap, Library, Users } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Innovation Edge | Education Solutions Company" },
      {
        name: "description",
        content:
          "Learn about Innovation Edge — an education-focused company providing books, resources, supplies and services for schools, students and institutions.",
      },
      { property: "og:title", content: "About Innovation Edge" },
      {
        property: "og:description",
        content:
          "Our story, mission, vision and values as an education resources and solutions company.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  {
    title: "Quality",
    text: "Careful selection of books, products and materials.",
  },
  {
    title: "Integrity",
    text: "Straightforward, dependable dealings with every customer.",
  },
  {
    title: "Learning First",
    text: "Decisions guided by educational value.",
  },
  {
    title: "Service",
    text: "Responsive support for schools and institutions.",
  },
];

const serve = [
  { icon: GraduationCap, label: "Schools" },
  { icon: Users, label: "Students" },
  { icon: Users, label: "Parents" },
  { icon: GraduationCap, label: "Teachers" },
  { icon: Building2, label: "Educational Institutions" },
  { icon: Building2, label: "Organizations" },
  { icon: Building2, label: "Offices" },
  { icon: Library, label: "Libraries" },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="More Than a Bookstore — A Complete Education Resource Partner"
        description="Innovation Edge supports learning environments with books, educational resources, supplies and services for schools, students, educators and institutions."
        image={IMAGES.library}
        imageAlt="Modern school library interior"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={aboutImage}
                alt="Educator guiding students through books and worksheets"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Introduction"
              title="Our Story"
              subtitle="Innovation Edge was built with a simple vision — to make quality education resources more accessible and help create better learning experiences."
            />

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Innovation Edge is an education-focused company providing a
                wide range of resources and solutions that support students,
                educators, schools, institutions and organizations.
              </p>

              <p>
                From academic and story books to activity resources, STEAM
                materials, competitive books, school supplies, office
                supplies and stationery, we aim to bring essential educational
                resources together in one place.
              </p>

              <p>
                Our offerings also extend to printing, Xerox services, book
                fairs, school exhibitions and library setup solutions, helping
                create better learning environments and supporting educational
                institutions with practical and reliable resources.
              </p>

              <p>
                With a focus on quality, service and educational value,
                Innovation Edge aims to connect people with the resources they
                need to learn, grow and succeed.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Reveal
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <h3 className="text-base font-bold text-primary">
                  Our Mission
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To make quality educational resources, products and services
                  easily accessible to learners and institutions.
                </p>
              </Reveal>

              <Reveal
                delay={80}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <h3 className="text-base font-bold text-primary">
                  Our Vision
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be a trusted education solutions partner that helps
                  learning environments grow, improve and inspire.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Our Work"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-card">
                  <span className="text-sm font-bold text-accent">
                    0{i + 1}
                  </span>

                  <h3 className="mt-3 text-base font-bold text-primary">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Who We Serve"
            subtitle="Innovation Edge works with learners and the institutions that support them."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serve.map((item, i) => (
              <Reveal key={item.label} delay={i * 50}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-border bg-card px-5 py-5 shadow-card transition-colors hover:border-accent/50">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 text-sm font-semibold text-primary">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <CtaLink to="/contact">Talk to Our Team</CtaLink>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}