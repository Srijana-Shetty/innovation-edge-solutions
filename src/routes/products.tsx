import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Products | Books, Supplies & Stationery — Innovation Edge" },
      {
        name: "description",
        content:
          "Browse Innovation Edge product categories: academic books, story books, activity books, STEAM, competitive books, school supplies, office supplies and stationery.",
      },
      { property: "og:title", content: "Products | Innovation Edge" },
      {
        property: "og:description",
        content:
          "A catalogue of education product categories from Innovation Edge.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const categories = [
  {
    title: "Academic Books",
    image: IMAGES.academic,
    alt: "Academic textbooks stacked on a study desk",
    text: "Curriculum-aligned textbooks and reference titles across school stages.",
  },
  {
    title: "Story Books",
    image: IMAGES.story,
    alt: "Children's story books open on a table",
    text: "Reading titles selected by age group and reading level.",
  },
  {
    title: "Activity Books",
    image: IMAGES.activity,
    alt: "Children completing activity worksheets",
    text: "Workbooks and activity material for practice and creative learning.",
  },
  {
    title: "STEAM",
    image: IMAGES.steam,
    alt: "Students using a STEAM learning kit",
    text: "Science, technology, engineering, arts and mathematics resources.",
  },
  {
    title: "Competitive Books",
    image: IMAGES.competitive,
    alt: "Student studying competitive exam preparation books",
    text: "Preparation and reference material for competitive examinations.",
  },
  {
    title: "Office Supplies",
    image: IMAGES.stationery,
    alt: "Office stationery items on a desk",
    text: "Everyday office consumables and administrative essentials.",
  },
  {
    title: "School Supplies",
    image: IMAGES.schoolSupplies,
    alt: "Shelves of school supplies in a store",
    text: "Classroom and student essentials for individual or bulk requirements.",
  },
  {
    title: "Stationery",
    image: IMAGES.stationery,
    alt: "Writing and drawing stationery arranged neatly",
    text: "Writing, drawing and paper stationery for schools and offices.",
  },
];

function Products() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title="Our Product Categories"
        description="A catalogue-style overview of the product categories Innovation Edge supplies. Detailed product listings can be added as product information is confirmed."
        image={IMAGES.schoolSupplies}
        imageAlt="School supplies on retail shelves"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Catalogue"
            title="Browse by Category"
            subtitle="Product names, specifications and pricing will be published once confirmed by Innovation Edge."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 60}>
                <article className="group h-full overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-primary">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 rounded-xl border border-dashed border-primary/25 bg-primary-soft p-6 text-center">
            <p className="text-sm font-medium text-primary">
              Product listings placeholder — titles, specifications and pricing will be added
              once the product data is supplied. This structure can be extended into a full
              online catalogue later.
            </p>
          </Reveal>
          <Reveal className="mt-10 text-center">
            <CtaLink to="/contact">Request Product Details</CtaLink>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
