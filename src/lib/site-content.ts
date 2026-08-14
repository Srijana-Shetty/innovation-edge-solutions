/**
 * Central, easily editable content for the Innovation Edge website.
 * Replace the CONTACT placeholders with the client's confirmed details.
 */

export const CONTACT = {
  company: "Innovation Edge",
  tagline: "Empowering Education",

  /* PLACEHOLDER — replace with the client's confirmed business email */
  email: "info@innovationedges.org",

  /* PLACEHOLDER — replace with the client's confirmed phone number */
  phone: "+966 58 177 7125",

  /* PLACEHOLDER — replace with the client's confirmed WhatsApp number */
  whatsapp: "+966 58 177 7125",

  /* PLACEHOLDER — replace with the client's confirmed address */
  address: "Innovation Edges, Building No 2990, Al Radha, Al Fayah Dist. Kingdom of Saudi Arabia",

  /* Google Maps location */
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Innovation+Edges,+Building+No+2990,+Al+Radha,+Al+Fayah+Dist,+Kingdom+of+Saudi+Arabia",

  hours: "Business hours to be confirmed",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "What We Offer", to: "/what-we-offer" },
  { label: "Products", to: "/products" },
  { label: "Education Solutions", to: "/solutions" },
  { label: "Book Fairs & Exhibitions", to: "/book-fairs" },
  { label: "Library Setup", to: "/library-setup" },
  { label: "Contact Us", to: "/contact" },
] as const;

export type OfferingKey =
  | "academic"
  | "story"
  | "activity"
  | "steam"
  | "competitive"
  | "office"
  | "school"
  | "stationery"
  | "printing"
  | "xerox"
  | "fairs"
  | "exhibitions"
  | "library";
