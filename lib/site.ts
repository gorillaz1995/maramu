// Single source of truth for business details.
// TODO(owner): fill in every value marked "DE COMPLETAT" before going live.

export const site = {
  name: "După Apă la Răzvan",
  shortName: "După Apă la Răzvan",
  url: "https://dupaapalarazvan.ro",
  description:
    "Pensiune de familie în inima Maramureșului, la Sighetu Marmației. Camere cu baie și balcon, bucate tradiționale, horincă de casă, formații live și foc de tabără — aproape de Săpânța, Valea Izei și Mocănița.",
  address: {
    street: "Str. Lazu Baciului nr. 167",
    city: "Sighetu Marmației",
    county: "Maramureș",
    postalCode: "435502",
    country: "România",
  },
  phone: "0740 786 670",
  email: "contact@dupaapalarazvan.ro",
  prices: {
    breakfast: 40,
    meal: 60,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Str.+Lazu+Baciului+167+Sighetu+Marmatiei",
  mapsEmbed:
    "https://www.google.com/maps?q=Str.+Lazu+Baciului+167,+Sighetu+Marma%C8%9Biei&output=embed",
  social: {
    facebook: "https://www.facebook.com/", // DE COMPLETAT
    instagram: "https://www.instagram.com/", // DE COMPLETAT
  },
  reviewUrl: "https://www.google.com/maps/search/?api=1&query=Dupa+apa+la+Razvan+Sighetu+Marmatiei",
  legal: {
    company: "DE COMPLETAT S.R.L.", // denumirea operatorului economic
    cui: "RO00000000", // DE COMPLETAT
    regCom: "J24/0000/0000", // DE COMPLETAT
    lastUpdated: "20 noiembrie 2026",
  },
} as const;

export const nav = [
  { href: "/", label: "Acasă" },
  { href: "/camere", label: "Camere" },
  { href: "/activitati", label: "Activități" },
  { href: "/contact", label: "Contact & rezervări" },
] as const;

export const legalNav = [
  { href: "/politica-de-confidentialitate", label: "Politica de confidențialitate" },
  { href: "/politica-cookies", label: "Politica de cookie-uri" },
  { href: "/termeni-si-conditii", label: "Termeni și condiții" },
] as const;

export const phoneHref = `tel:+4${site.phone.replace(/\s/g, "")}`;
export const mailHref = `mailto:${site.email}`;
