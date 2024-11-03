"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";
import Seasons from "./Seasons";
import Food from "./Food";
import Baut from "./Baut";

export default function HailMary() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform values for sections
  const seasonsY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.35, 0.4, 0.5],
    ["100vh", "75vh", "50vh", "25vh", "10vh", "0vh"]
  );
  const seasonsOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  const foodY = useTransform(
    scrollYProgress,
    [0.5, 0.65, 0.75],
    ["100vh", "0vh", "0vh"]
  );
  const foodOpacity = useTransform(scrollYProgress, [0.5, 0.65], [1, 1]);

  const bautY = useTransform(
    scrollYProgress,
    [0.75, 0.9, 1],
    ["100vh", "0vh", "0vh"]
  );
  const bautOpacity = useTransform(scrollYProgress, [0.75, 0.9], [1, 1]);

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh]" // 4x viewport height for full scroll
    >
      {/* Hero Section - Initially pinned */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-10 bg-[#013220]"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 1]),
          }}
        >
          <Hero />
        </motion.div>

        {/* Seasons Section */}
        <motion.div
          className="absolute inset-0 z-20 bg-[#013220]"
          style={{
            y: seasonsY,
            opacity: seasonsOpacity,
          }}
        >
          <Seasons />
        </motion.div>

        {/* Food Section */}
        <motion.div
          className="absolute inset-0 z-30 bg-[#013220]"
          style={{
            y: foodY,
            opacity: foodOpacity,
          }}
        >
          <Food />
        </motion.div>

        {/* Baut Section */}
        <motion.div
          className="absolute inset-0 z-40 bg-[#013220]"
          style={{
            y: bautY,
            opacity: bautOpacity,
          }}
        >
          <Baut />
        </motion.div>
      </div>
    </div>
  );
}
