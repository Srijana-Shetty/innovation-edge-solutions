import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, LayoutGrid, Library, Sparkles } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/library-setup")({
  component: LibrarySetup,
  head: () => ({
    meta: [
      { title: "Library Setup Solutions for Schools | Innovation Edge" },
      {
        name: "description",
        content:
          "Innovation Edge supports institutions with library setup — book selection, educational resources, organisation and creating an inspiring reading environment.",
      },
      { property: "og:title", content: "Library Setup | Innovation Edge" },
      {
        property: "og:description",
        content: "Book selection, resources and organisation support for school libraries.",
      },
      { property: "og:url", content: "/library-setup" },
    ],
    links: [{ rel: "canonical", href: "/library-setup" }],
  }),
});

const pillars = [
  { icon: BookOpen, title: "Book Selection", text: "Support in choosing titles suited to age groups, curriculum and reading levels." },
  { icon: Library, title: "Educational Resources", text: "Reference material and learning resources to complement the collection." },
  { icon: LayoutGrid, title: "Library Organization", text: "Guidance on arranging and categorising books for easy access." },
  { icon: Sparkles, title: "Learning Environment Support", text: "Ideas and resources that make the library a space students want to use." },
];

function LibrarySetup() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Library Setup"
        title="Building Inspiring Libraries"
        description="Innovation Edge can help institutions set up and strengthen their libraries with suitable titles, educational resources and organisation support."
        image={IMAGES.library}
        imageAlt="Modern school library with tall bookshelves"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={IMAGES.library}
                alt="Students reading in a bright, well-organised school library"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="How We Help"
              title="A Library Built Around Its Readers"
              subtitle="Scope of work is agreed with each institution. The details below are indicative and can be adjusted to your requirements."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 70}>
                  <div className="h-full rounded-xl border border-border bg-card p-6 shadow-card">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-primary">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-9">
              <CtaLink to="/contact">Enquire About Library Setup</CtaLink>
            </Reveal>
          </div>
        </div>
      </section>

    {/**<section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal className="rounded-xl border border-dashed border-primary/25 bg-card p-6 text-center">
           <p className="text-sm text-muted-foreground">
              Content placeholder — specific library setup capabilities, timelines and
              deliverables will be published once confirmed by Innovation Edge.
            </p>  
          </Reveal>
        </div>
      </section> */}  
    </SiteLayout>
  );
}
