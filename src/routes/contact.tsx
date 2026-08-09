import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/site-content";
import { IMAGES } from "@/lib/offerings";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Innovation Edge | Empowering Education" },
      {
        name: "description",
        content:
          "Contact Innovation Edge for books, educational resources, school and office supplies, printing, book fairs, exhibitions and library setup enquiries.",
      },
      { property: "og:title", content: "Contact Innovation Edge" },
      {
        property: "og:description",
        content: "Send an enquiry to Innovation Edge — Empowering Education.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Innovation Edge",
          slogan: "Empowering Education",
          email: CONTACT.email,
          telephone: CONTACT.phone,
          address: { "@type": "PostalAddress", streetAddress: CONTACT.address },
        }),
      },
    ],
  }),
});

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "organization", label: "Organization", type: "text", required: false },
  { name: "subject", label: "Subject", type: "text", required: true },
] as const;

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder submit — connect to email/CRM once the client confirms the destination.
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you — your enquiry has been noted.", {
        description: "Form delivery will be connected once the business email is confirmed.",
      });
    }, 600);
  };

  return (
    <SiteLayout>
      <Toaster />
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Requirements"
        description="Share your books, supplies, printing, event or library requirements and the Innovation Edge team will get back to you."
        image={IMAGES.academic}
        imageAlt="Books and study material on a desk"
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">
          <Reveal>
            <span className="eyebrow">Innovation Edge</span>
            <h2 className="mt-3 text-3xl font-bold text-primary">Empowering Education</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Contact details below are placeholders and will be updated with Innovation
              Edge&apos;s confirmed business information.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
                { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: `https://wa.me/${CONTACT.whatsapp}` },
               {
  icon: MapPin,
  label: "Address",
  value: CONTACT.address,
  href: CONTACT.mapUrl,
},
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-colors hover:border-accent/50"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-words text-sm font-semibold text-primary hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="break-words text-sm font-semibold text-primary">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

           <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-card">
  <iframe
    title="Innovation Edge location"
    src="https://www.google.com/maps?q=Innovation%20Edges%2C%20Building%20No%202990%2C%20Al%20Radha%2C%20Al%20Fayah%20Dist%2C%20Saudi%20Arabia&output=embed"
    loading="lazy"
    className="h-64 w-full border-0"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


            <p className="mt-2 text-xs text-muted-foreground">
              Map placeholder — will be centred on the confirmed business address.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-7 shadow-lift sm:p-9"
            >
              <h2 className="text-xl font-bold text-primary">Send an Enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we will respond as soon as possible.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <div key={f.name} className={f.name === "subject" ? "sm:col-span-2" : ""}>
                    <label
                      htmlFor={f.name}
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      {f.label}
                      {f.required ? <span className="text-accent"> *</span> : null}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required={f.required}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                  >
                    Message<span className="text-accent"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-ring/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-70"
              >
                {submitting ? "Sending…" : "Send Enquiry"}
              </button>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  Email Us
                </a>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="rounded-lg border border-border px-4 py-2.5 text-center text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  Call Us
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            title="Prefer to speak directly?"
            subtitle="Reach out on WhatsApp or call us during business hours."
          />
        </div>
      </section>
    </SiteLayout>
  );
}
