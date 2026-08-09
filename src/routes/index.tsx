import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  Handshake,
  Layers,
  Library,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/CtaLink";
import { OfferingCard } from "@/components/site/OfferingCard";
import { IMAGES, OFFERINGS } from "@/lib/offerings";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Innovation Edge | Empowering Education Solutions & Resources" },
      {
        name: "description",
        content:
          "Innovation Edge is an education solutions company offering books, STEAM resources, school and office supplies, printing, book fairs, exhibitions and library setup.",
      },
      { property: "og:title", content: "Innovation Edge | Empowering Education" },
      {
        property: "og:description",
        content:
          "Books, educational resources, supplies, printing, book fairs and library setup for schools, students and institutions.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const highlights = [
  {
    icon: BookOpen,
    title: "Educational Resources",
    text: "Books and learning material across academic, story, activity, STEAM and competitive categories.",
  },
  {
    icon: Layers,
    title: "Quality Products",
    text: "School supplies, office supplies and stationery selected for everyday classroom and office use.",
  },
  {
    icon: Building2,
    title: "Complete Solutions",
    text: "Printing, Xerox, book fairs, exhibitions and library setup support for institutions.",
  },
  {
    icon: Handshake,
    title: "Trusted Support",
    text: "A single point of contact for schools, educators and organisations sourcing education resources.",
  },
];

const bookCategories = [
  { title: "Academic Books", image: IMAGES.academic, alt: "Academic textbooks stacked on a desk" },
  { title: "Story Books", image: IMAGES.story, alt: "Children's story books open on a table" },
  { title: "Activity Books", image: IMAGES.activity, alt: "Children completing activity worksheets" },
  { title: "STEAM Books & Resources", image: IMAGES.steam, alt: "Students working with a STEAM learning kit" },
  { title: "Competitive Books", image: IMAGES.competitive, alt: "Student studying competitive exam books" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Quality & Reliability", text: "Careful selection of books, products and materials for consistent quality." },
  { icon: GraduationCap, title: "Education-Focused Solutions", text: "Every product and service is built around learning outcomes, not just retail." },
  { icon: Layers, title: "Wide Range of Resources", text: "Books, supplies, stationery and activity resources from a single partner." },
  { icon: Users, title: "Professional Support", text: "Responsive assistance for schools, educators, parents and organisations." },
  { icon: Building2, title: "Institutional Solutions", text: "Requirement-based support for schools, libraries and offices." },
  { icon: Sparkles, title: "Customer-Centric Approach", text: "Flexible support shaped around each institution's requirements." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-surface">
        <div
          aria-hidden
          className="absolute -left-40 -top-40 h-[26rem] w-[26rem] rounded-full bg-primary-soft blur-3xl"
        />
        <div
          aria-hidden
          className="absolute right-[-8rem] top-24 h-64 w-64 rounded-full bg-accent-soft blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <Reveal>
            <span className="eyebrow">Empowering Education</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[3.4rem]">
              Empowering Education Through{" "}
              <span className="relative inline-block">
                Knowledge
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded bg-accent/25"
                />
              </span>
              , Resources &amp; Innovation
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Innovation Edge provides comprehensive educational resources, books, school
              supplies, stationery, printing solutions and education-focused services designed
              to support schools, students, educators and institutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CtaLink to="/what-we-offer">Explore Our Solutions</CtaLink>
              <CtaLink to="/contact" variant="outline">
                Get in Touch
              </CtaLink>
            </div>
            <ul className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {["Books & Resources", "Supplies & Stationery", "Institutional Services"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-primary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lift">
              <img
                src={heroImage}
                alt="Students reading books in a bright modern classroom with their teacher"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-2xl border-4 border-accent/70 sm:block"
            />
            <div
              aria-hidden
              className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-2xl bg-primary sm:block"
            />
          </Reveal>
        </div>
      </section>

      {/* TRUST / INTRO */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Are"
            title="Building Better Learning Experiences"
            subtitle="Innovation Edge brings together educational products, resources and services to support schools, students, educators, institutions and businesses — from everyday classroom essentials to complete institutional solutions."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="What We Offer"
            subtitle="Comprehensive solutions designed to support learning, teaching and educational environments."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.slice(0, 6).map((item, i) => (
              <OfferingCard key={item.title} item={item} delay={i * 60} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CtaLink to="/what-we-offer" variant="navy">
              View All Solutions
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* BOOKS */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Books"
            title="Knowledge That Inspires"
            subtitle="A curated range of books spanning classroom learning, independent reading, creative activity and exam preparation."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
            {bookCategories.map((cat, i) => (
              <Reveal
                key={cat.title}
                delay={i * 70}
                className={
                  i === 0
                    ? "lg:col-span-3 lg:row-span-2"
                    : i === 1
                      ? "lg:col-span-3"
                      : "lg:col-span-2"
                }
              >
                <div className="group relative h-full min-h-[15rem] overflow-hidden rounded-xl">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-bold text-primary-foreground">{cat.title}</h3>
                    <span className="mt-2 block h-0.5 w-10 bg-accent transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CtaLink to="/products">Explore Our Books</CtaLink>
          </Reveal>
        </div>
      </section>

      {/* SCHOOL & EDUCATION SOLUTIONS */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={IMAGES.library}
                alt="Students studying in a modern school library"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div aria-hidden className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-2xl border-4 border-accent sm:block" />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              invert
              eyebrow="For Institutions"
              title="Complete Solutions for Schools & Institutions"
              subtitle="Innovation Edge supports educational institutions with resources, supplies and services that keep classrooms, libraries and offices running smoothly."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "School Supplies",
                "Stationery",
                "Office Supplies",
                "Printing & Xerox",
                "Book Fairs",
                "School Exhibitions",
                "Library Setup",
                "STEAM & Activity Resources",
              ].map((item, i) => (
                <Reveal as="li" key={item} delay={i * 50}>
                  <div className="flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm font-medium">
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

      {/* LIBRARY SETUP */}
      <section className="relative isolate overflow-hidden">
        <img
          src={IMAGES.library}
          alt="Bright modern school library with tall bookshelves"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/88" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="eyebrow">Library Setup</span>
            <h2 className="mt-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
              Building Inspiring Libraries
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              Innovation Edge can support institutions in setting up and strengthening their
              libraries — from selecting suitable titles to organising resources into a space
              that encourages reading.
            </p>
            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
              {["Book Selection", "Educational Resources", "Library Organization", "Learning Environment Support"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-sm font-semibold text-primary-foreground"
                  >
                    <Library className="mb-3 h-5 w-5 text-accent" />
                    {item}
                  </div>
                ),
              )}
            </div>
            <div className="mt-10 flex justify-center">
              <CtaLink to="/library-setup">Enquire About Library Setup</CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOK FAIRS */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Events"
            title="Bringing Learning to Life"
            subtitle="Book fairs, school exhibitions and educational events that bring resources directly to students and campuses."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Book Fairs", image: IMAGES.bookfair, alt: "Students browsing books at a school book fair" },
              { title: "School Exhibitions", image: IMAGES.exhibition, alt: "School exhibition with student project displays" },
              { title: "Educational Events", image: IMAGES.steam, alt: "Students taking part in an educational activity" },
              { title: "Learning Activities", image: IMAGES.activity, alt: "Children working on creative learning activities" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="group relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-5 text-base font-bold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CtaLink to="/book-fairs">Plan an Event With Us</CtaLink>
          </Reveal>
        </div>
      </section>

      {/* STEAM */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="STEAM & Activity"
              title="Learning Beyond the Classroom"
              subtitle="Activity-led resources that help students explore concepts through building, experimenting and creating."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Science", "Technology", "Engineering", "Arts", "Mathematics", "Creative Activities"].map(
                (item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className="rounded-lg border border-border bg-card px-4 py-3.5 text-sm font-semibold text-primary shadow-card transition-colors hover:border-accent/50">
                      {item}
                    </div>
                  </Reveal>
                ),
              )}
            </div>
          </div>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <img
                src={IMAGES.steam}
                alt="Students exploring a STEAM experiment with a robotics kit"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Innovation Edge"
            subtitle="A single, education-focused partner for resources, products and institutional services."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Company Video"
            title="See Innovation Edge in Action"
            subtitle="A company video can be added here once provided. This section is ready to host a hosted or embedded video."
          />
          <Reveal className="mt-12">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-dashed border-primary/25 bg-primary-soft">
              <div className="text-center">
                <PlayCircle className="mx-auto h-14 w-14 text-accent" />
                <p className="mt-4 text-sm font-semibold text-primary">
                  Video placeholder — client video to be added
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
              Let&apos;s support your learning environment.
            </h2>
            <p className="mt-2 text-primary-foreground/70">
              Share your requirements and our team will get back to you.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
