// Every photo exists as -828.webp (mobile) and -1600.webp (desktop).
// Own photos live in /images/site (colour-graded by scripts/grade-images.py),
// Unsplash photos in /images/maramures.

export type Photo = {
  src: string;
  srcSet: string;
  alt: string;
};

const build = (base: string, alt: string): Photo => ({
  src: `${base}-1600.webp`,
  srcSet: `${base}-828.webp 828w, ${base}-1600.webp 1600w`,
  alt,
});

const own = (name: string, alt: string) => build(`/images/site/${name}`, alt);
const mm = (name: string, alt: string) => build(`/images/maramures/maramures-${name}-1`, alt);

export const photos = {
  houseSummer: own("house-summer", "Pensiunea După apă la Răzvan vara, sub cer senin"),
  houseWinter: own("house-winter", "Pensiunea După apă la Răzvan acoperită de zăpadă"),
  bonfire: own("bonfire", "Foc de tabără în noapte, la pensiune"),
  tableSpread: own("table-spread", "Masă festivă cu bucate tradiționale maramureșene"),
  food1: own("food-1", "Platouri cu preparate tradiționale"),
  food2: own("food-2", "Aperitive și friptură servite la restaurant"),
  food3: own("food-3", "Masă de sărbători lângă bradul de Crăciun"),
  restaurant: own("restaurant", "Salonul restaurantului pregătit pentru eveniment"),
  band: own("band", "Grup în costume populare maramureșene la un eveniment"),
  girlSummer: own("girl-summer", "Fată în port popular pe terasă, vara"),
  girlWinter: own("girl-winter", "Fată în port popular în peisaj de iarnă"),

  roomSingle: own("room-single", "Cameră single cu pat matrimonial"),
  roomDouble1: own("room-dubla-1", "Cameră dublă cu două paturi"),
  roomDouble2: own("room-dubla-2", "Baie proprie cu cabină de duș"),
  roomDouble3: own("room-dubla-3", "Cameră dublă luminoasă cu birou"),
  roomDoubleExtra: own("room-dubla-extra", "Cameră dublă cu pat suplimentar"),
  roomDD: own("room-dd", "Cameră dublă cu lumină caldă"),
  roomTriple1: own("room-tripla-1", "Cameră triplă la mansardă"),
  roomTriple2: own("room-tripla-2", "Baie proprie a camerei triple"),
  roomTriple3: own("room-tripla-3", "Cameră triplă cu fereastră de mansardă"),
  roomTriple4: own("room-tripla-4", "Cameră triplă spațioasă cu trei paturi"),

  attBorsa: own("att-borsa", "Drumeție de iarnă în Munții Rodnei, Borșa"),
  attCavnic: own("att-cavnic", "Pârtia de schi de la Cavnic"),
  attSapanta: own("att-sapanta", "Biserica de la Cimitirul Vesel din Săpânța"),
  attMocanita: own("att-mocanita", "Mocănița pe Valea Vaserului"),
  attMuzeu: own("att-muzeu", "Muzeul Satului Maramureșean din Sighet"),
  attVaduIzei: own("att-vadu-izei", "Valea Izei la apus"),

  barsana: mm("barsana-monastery", "Turlele de lemn ale Mănăstirii Bârsana"),
  churchGate: mm("church-through-gate", "Biserică de lemn văzută printr-o poartă sculptată"),
  folkCostume: mm("folk-costume", "Tânără în costum popular maramureșean"),
  haystacksSummer: mm("haystacks-summer", "Clăi de fân pe dealurile Maramureșului vara"),
  haystacksWinter: mm("haystacks-winter", "Clăi de fân sub zăpadă"),
  mocanitaCarriage: mm("mocanita-from-carriage", "Priveliște din vagonul Mocăniței"),
  mocanitaTrain: mm("mocanita-steam-train", "Locomotiva cu abur a Mocăniței"),
  firTrees: mm("mountain-fir-trees", "Munte și brazi în lumina după-amiezii"),
  flowers: mm("mountain-flowers", "Flori de munte cu vârfuri în fundal"),
  sapanta: mm("sapanta-merry-cemetery", "Cruci pictate în Cimitirul Vesel din Săpânța"),
  sheepChurch: mm("sheep-wooden-church", "Oaie pe pajiște lângă o biserică de lemn"),
  houseGarden: mm("traditional-house-garden", "Casă tradițională cu grădină înflorită"),
  interior: mm("traditional-interior", "Interior tradițional din lemn"),
  porch: mm("traditional-porch", "Târnaț tradițional cu vedere spre munte"),
  houseVines: mm("village-house-vines", "Casă de sat acoperită cu viță"),
  frostedRoad: mm("winter-frosted-road", "Drum de iarnă cu copaci înghețați"),
  steeple: mm("wooden-church-steeple", "Turla unei biserici de lemn"),
  woodenGate: mm("wooden-gate", "Poartă maramureșeană sculptată în lemn"),
  houseWell: mm("wooden-house-well", "Fântână și case de lemn"),
  pavilion: mm("wooden-pavilion-mountains", "Foișor de lemn cu munți în fundal"),
} satisfies Record<string, Photo>;

export const portrait = {
  woodenGate: "/images/maramures/maramures-wooden-gate-1-portrait-828.webp",
  houseGarden: "/images/maramures/maramures-traditional-house-garden-1-portrait-828.webp",
  barsana: "/images/maramures/maramures-barsana-monastery-1-portrait-828.webp",
};
