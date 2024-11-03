"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";
import Seasons from "./Seasons";
import Food from "./Food";

gsap.registerPlugin(ScrollTrigger);

export default function Merged() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const seasonsRef = useRef<HTMLDivElement>(null);
  const foodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const seasons = seasonsRef.current;
    const food = foodRef.current;

    if (!container || !hero || !seasons || !food) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=360%",
        pin: true,
        scrub: 1,
      },
    });

    // Initial states
    gsap.set(seasons, { yPercent: 100 });
    gsap.set(food, { yPercent: 100 });

    // Animation sequence
    tl.to(
      hero,
      {
        opacity: 0,
        duration: 0.5,
        className: "bg-[#013220]",
        ease: "none",
      },
      0
    )
      .to(
        seasons,
        {
          yPercent: 0,
          duration: 1,
          ease: "none",
        },
        0
      )
      .to(
        seasons,
        {
          opacity: 0,
          duration: 0.5,
          className: "bg-[#013220]",
          ease: "none",
        },
        1
      )
      .to(
        food,
        {
          yPercent: 0,
          duration: 1,
          ease: "none",
        },
        1
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#013220]"
    >
      <div ref={heroRef} className="absolute inset-0 z-[1]">
        <Hero />
      </div>

      <div ref={seasonsRef} className="absolute inset-0 z-[2]">
        <Seasons />
      </div>

      <div ref={foodRef} className="absolute inset-0 z-[3]">
        <Food />
      </div>
    </div>
  );
}
