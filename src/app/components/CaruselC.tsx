"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { DotButton } from "./EmblaCarouselDotButton";
import { default as Autoplay } from "embla-carousel-autoplay";

const images = [
  {
    src: "/camere/dd.jpg",
    alt: "Camera 1 - După Apă la Răzvan",
  },
  {
    src: "/camere/dubla1.jpg",
    alt: "Camera 2 - După Apă la Răzvan",
  },
  {
    src: "/camere/dubla2.jpg",
    alt: "Camera 3 - După Apă la Răzvan",
  },
  {
    src: "/camere/dubla3.jpg",
    alt: "Camera 4 - După Apă la Răzvan",
  },
  {
    src: "/camere/dublaextra.jpg",
    alt: "Camera 5 - După Apă la Răzvan",
  },
  {
    src: "/camere/signle.jpg",
    alt: "Camera 6 - După Apă la Răzvan",
  },
  {
    src: "/camere/tripla1.jpg",
    alt: "Camera 7 - După Apă la Răzvan",
  },
  {
    src: "/camere/tripla2.jpg",
    alt: "Camera 8 - După Apă la Răzvan",
  },
  {
    src: "/camere/tripla3.jpg",
    alt: "Camera 9 - După Apă la Răzvan",
  },
  {
    src: "/camere/tripla4.jpg",
    alt: "Camera 10 - După Apă la Răzvan",
  },
];

const CaruselC: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2100 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full max-w-7xl mx-auto py-10">
      <h2 className="text-center text-2xl mb-6 font-cinzel font-thin text-[#cca43b]">
        Galerie
      </h2>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-1">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-[95%] md:w-[33%] h-[378px] md:h-[600px] relative p-2 rounded-3xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
                quality={100}
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default CaruselC;
