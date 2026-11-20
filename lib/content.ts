import { photos, type Photo } from "./images";

// ---------------------------------------------------------------- Camere

export type Room = {
  slug: string;
  name: string;
  price: number | null; // RON / noapte; null = la cerere
  tagline: string;
  summary: string;
  cover: Photo;
  gallery: Photo[];
};

export const rooms: Room[] = [
  {
    slug: "dubla",
    name: "Camera dublă",
    price: 180,
    tagline: "Pat matrimonial sau twin, la alegere",
    summary:
      "Camera în care se întorc cei mai mulți oaspeți: lumină caldă seara, liniște dimineața și un balcon numai al vostru pentru cafeaua de la prima oră.",
    cover: photos.roomDouble3,
    gallery: [photos.roomDouble3, photos.roomDouble1, photos.roomDD, photos.roomDoubleExtra, photos.roomDouble2],
  },
  {
    slug: "tripla",
    name: "Camera triplă",
    price: null,
    tagline: "Ideală pentru familii",
    summary:
      "La mansardă, sub ferestre prin care se văd stelele. Loc pentru toată familia, cu baie proprie și spațiu de joacă pentru cei mici.",
    cover: photos.roomTriple3,
    gallery: [photos.roomTriple3, photos.roomTriple1, photos.roomTriple4, photos.roomTriple2],
  },
  {
    slug: "single",
    name: "Camera single",
    price: 150,
    tagline: "Confort pentru călătorii individuali",
    summary:
      "Un colț liniștit pentru drumuri de lucru sau pentru o pauză doar a ta. Pat larg, birou și fereastră spre grădină.",
    cover: photos.roomSingle,
    gallery: [photos.roomSingle, photos.roomDouble2],
  },
];

export const roomFacilities = [
  "Baie proprie complet echipată",
  "Balcon privat",
  "Sistem modern de încălzire și răcire",
  "Mobilier elegant și confortabil",
  "Lenjerie premium",
];

export const roomGallery: Photo[] = [
  photos.roomDD,
  photos.roomDouble1,
  photos.roomDouble2,
  photos.roomDouble3,
  photos.roomDoubleExtra,
  photos.roomSingle,
  photos.roomTriple1,
  photos.roomTriple2,
  photos.roomTriple3,
  photos.roomTriple4,
];

export const formatPrice = (price: number | null) => (price ? `${price} RON` : "Preț la cerere");

// ---------------------------------------------------------------- Activități

export type Activity = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  photos: Photo[];
};

export const activities: Activity[] = [
  {
    id: "restaurant",
    eyebrow: "Restaurant & Lounge",
    title: "O sală pentru zilele care contează",
    text: "Sala noastră de evenimente e luminoasă, aerisită și gândită pentru mese festive sau petreceri private. Decorul îngrijit și atenția la detalii fac din ea locul potrivit pentru orice ocazie. Am găzduit chiar și cereri în căsătorie — iar orice ar fi evenimentul tău, îl pregătim împreună, pe gustul și nevoile tale.",
    photos: [photos.restaurant, photos.tableSpread],
  },
  {
    id: "costume",
    eyebrow: "Ședință foto",
    title: "Costume tradiționale moroșene",
    text: "Fie că ești mic sau mare, înalt sau scund, băiat sau fată, găsești la noi un costum popular care să-ți vină perfect. De Crăciun, de Paști și la evenimente speciale deschidem porțile colecției noastre de costume tradiționale moroșene. Te invităm la o ședință foto de neuitat, pe plaiurile noastre.",
    photos: [photos.girlSummer, photos.girlWinter],
  },
  {
    id: "formatii",
    eyebrow: "Formații live",
    title: "Tradiții și voie bună",
    text: "De la colindele de iarnă până la cântecele populare și melodiile moderne care te ridică la dans, artiștii noștri locali aduc bucurie în fiecare seară de petrecere. Voci frumoase, instrumente tradiționale și un repertoriu din toate zonele țării — muzică cântată cu suflet, care ține vie tradiția.",
    photos: [photos.band],
  },
  {
    id: "foc",
    eyebrow: "Seri la foc de tabără",
    title: "Sub cerul cu stele",
    text: "Seara aprindem focul, iar atmosfera devine magică. Muzică bună, prieteni și familie în jur, natura la doi pași. Un moment simplu, din cele care rămân cel mai mult în amintire.",
    photos: [photos.bonfire],
  },
];

// ---------------------------------------------------------------- Obiective

export type Attraction = {
  name: string;
  distance: string;
  text: string;
  photo: Photo;
  href: string;
  season: "vara" | "iarna" | "tot anul";
};

// Distanțe rutiere aproximative de la pensiune.
export const attractions: Attraction[] = [
  {
    name: "Muzeul Satului Maramureșean",
    distance: "≈ 4 km",
    text: "Case, porți și biserici de lemn aduse din toată țara Maramureșului, pe un deal deasupra Sighetului.",
    photo: photos.attMuzeu,
    href: "https://muzeulmaramuresului.ro/descopera/muzeul-satului-maramuresean/",
    season: "tot anul",
  },
  {
    name: "Valea Izei",
    distance: "≈ 6 km",
    text: "Sate cu porți sculptate, clăi de fân și biserici de lemn. Vadu Izei e la câteva minute de noi.",
    photo: photos.attVaduIzei,
    href: "https://www.infoviseu.ro/destinatii-turistice/valea-izei",
    season: "tot anul",
  },
  {
    name: "Cimitirul Vesel",
    distance: "≈ 18 km",
    text: "Crucile albastre din Săpânța, pictate cu povești pline de umor. Un loc unic în lume.",
    photo: photos.attSapanta,
    href: "https://cimitirulvesel-sapanta.com/",
    season: "tot anul",
  },
  {
    name: "Mocănița",
    distance: "≈ 65 km",
    text: "Trenul forestier cu abur de pe Valea Vaserului: o zi întreagă de munte, fum și popas la iarbă verde.",
    photo: photos.attMocanita,
    href: "https://mocanita-maramures.com/",
    season: "vara",
  },
  {
    name: "Pârtia Cavnic",
    distance: "≈ 60 km",
    text: "Pârtii pentru toate nivelurile. Pleci dimineața, te întorci seara la o cină caldă.",
    photo: photos.attCavnic,
    href: "https://www.superskicavnic.ro/",
    season: "iarna",
  },
  {
    name: "Pârtia Borșa",
    distance: "≈ 80 km",
    text: "Zăpadă bună până primăvara, la poalele Munților Rodnei.",
    photo: photos.attBorsa,
    href: "https://skiborsa.eu/",
    season: "iarna",
  },
];

// ---------------------------------------------------------------- Anotimpuri

export const seasons = {
  vara: {
    label: "Vară",
    title: "Verdele crud al verii",
    text: "Zile lungi pe Valea Izei, drumuri cu Mocănița și cine pe terasă. Seara, focul de tabără și cerul plin de stele.",
    list: ["Drumeții pe Valea Izei", "Mocănița pe Valea Vaserului", "Cimitirul Vesel din Săpânța", "Foc de tabără sub stele"],
    house: photos.houseSummer,
    portrait: photos.girlSummer,
    inset: photos.haystacksSummer,
  },
  iarna: {
    label: "Iarnă",
    title: "Albul pur al iernii",
    text: "Colinde, obiceiuri de Crăciun și mese de sărbătoare. Ziua pe pârtie la Cavnic sau Borșa, seara la căldură, cu o horincă fiartă.",
    list: ["Schi la Cavnic și Borșa", "Colindători și obiceiuri", "Mese festive de sărbători", "Ședințe foto în port popular"],
    house: photos.houseWinter,
    portrait: photos.girlWinter,
    inset: photos.haystacksWinter,
  },
} as const;

export type Season = keyof typeof seasons;
