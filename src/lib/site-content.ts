/**
 * Central, easily editable content for the Innovation Edge website.
 * Replace the CONTACT placeholders with the client's confirmed details.
 */

export const CONTACT = {
  company: "Innovation Edge",
  tagline: "Empowering Education",
  /* PLACEHOLDER — replace with the client's confirmed business email */
  email: "info@example.com",
  /* PLACEHOLDER — replace with the client's confirmed phone number */
  phone: "+00 00000 00000",
  /* PLACEHOLDER — replace with the client's confirmed WhatsApp number (digits only) */
  whatsapp: "0000000000",
  /* PLACEHOLDER — replace with the client's confirmed address */
  address: "Address to be provided by Innovation Edge",
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
