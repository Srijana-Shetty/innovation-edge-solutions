import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/book-fairs")({
  component: BookFairs,
  head: () => ({
    meta: [
      { title: "Book Fairs & School Exhibitions | Innovation Edge" },
      {
        name: "description",
        content:
          "Innovation Edge organises on-campus book fairs, school exhibitions and educational events that bring books and learning resources directly to students.",
      },
      { property: "og:title", content: "Book Fairs & School Exhibitions | Innovation Edge" },
      {
        property: "og:description",
        content: "On-campus book fairs, exhibitions and educational events for schools.",
      },
      { property: "og:url", content: "/book-fairs" },
    ],
    links: [{ rel: "canonical", href: "/book-fairs" }],
  }),
});

const gallery = [
  { image: IMAGES.bookfair, alt: "Students browsing books at a school book fair", span: "lg:col-span-2 lg:row-span-2" },
  { image: IMAGES.exhibition, alt: "School exhibition with project displays", span: "" },
  { image: IMAGES.story, alt: "Story books displayed for young readers", span: "" },
  { image: IMAGES.activity, alt: "Children taking part in learning activities", span: "lg:col-span-2" },
];

const pillars = [
  { title: "Book Fairs", text: "Curated on-campus book displays that encourage students to browse and read." },
  { title: "School Exhibitions", text: "Support for exhibitions with resources, displays and material." },
  { title: "Educational Events", text: "Learning-focused events organised around your school calendar." },
  { title: "Learning Activities", text: "Activity-led sessions that complement classroom learning." },
];

function BookFairs() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events"
        title="Bringing Learning to Life"
        description="Book fairs, exhibitions and educational events that bring resources directly to students, teachers and parents on campus."
        image={IMAGES.bookfair}
        imageAlt="School book fair with students browsing books"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Organise"
            title="Events That Put Books in Students' Hands"
            subtitle="Event scope, formats and inclusions can be tailored to each campus and confirmed during planning."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="text-sm font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-base font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Gallery" title="Moments From Educational Events" />
          <div className="mt-14 grid auto-rows-[13rem] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 70} className={g.span}>
                <div className="group h-full overflow-hidden rounded-xl">
                  <img
                    src={g.image}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CtaLink to="/contact">Plan an Event With Us</CtaLink>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
