import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Seasons } from "@/components/home/Seasons";
import { WordBand } from "@/components/home/WordBand";
import { Table } from "@/components/home/Table";
import { Spirits } from "@/components/home/Spirits";
import { RoomsPreview } from "@/components/home/RoomsPreview";
import { Moments } from "@/components/home/Moments";
import { Region } from "@/components/home/Region";
import { StayCTA } from "@/components/home/StayCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Seasons />
      <WordBand top="liniște · bucate alese ·" bottom="și voie bună" />
      <Table />
      <Spirits />
      <RoomsPreview />
      <Moments />
      <Region />
      <StayCTA />
    </>
  );
}
