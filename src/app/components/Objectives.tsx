"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Objectives() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const objectives = [
    {
      src: "/obiective/borsa.webp",
      alt: "Partia de ski Borsa",
      link: "https://skiborsa.eu/",
      aspectRatio: "3/4",
      title: "Partia Borsa",
    },
    {
      src: "/obiective/cavnic.jpg",
      alt: "Partia de ski Cavnic",
      link: "https://www.superskicavnic.ro/",
      aspectRatio: "3/4",
      title: "Partia Cavnic",
    },
    {
      src: "/obiective/cimitir_v.jpeg",
      alt: "Cimitirul Vesel",
      link: "https://cimitirulvesel-sapanta.com/",
      aspectRatio: "3/4",
      title: "Cimitirul Vesel",
    },
    {
      src: "/obiective/mocanitax.jpg",
      alt: "Mocanita",
      link: "https://mocanita-maramures.com/",
      aspectRatio: "3/4",
      title: "Mocanita",
    },
    {
      src: "/obiective/muzeu_sat_maramu.jpg",
      alt: "Muzeul Satului Maramuresean",
      link: "https://muzeulmaramuresului.ro/descopera/muzeul-satului-maramuresean/",
      aspectRatio: "3/4",
      title: "Muzeul Satului Maramuresean",
    },
    {
      src: "/obiective/vad_izei.jpg",
      alt: "Valea Izei",
      link: "https://www.infoviseu.ro/destinatii-turistice/valea-izei",
      aspectRatio: "3/4",
      title: "Valea Izei",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: "#013220" }}
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-5xl font-cinzel text-[#cca43b] text-center mb-12">
          Obiective Turistice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective) => (
            <a
              key={objective.src}
              href={objective.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden shadow-lg group"
              style={{
                animation: isVisible ? "float 6s ease-in-out infinite" : "none",
                aspectRatio: objective.aspectRatio || "4/3",
              }}
            >
              <style jsx>{`
                @keyframes float {
                  0% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-15px);
                  }
                  100% {
                    transform: translateY(0px);
                  }
                }
              `}</style>
              <div className="relative w-full h-full">
                <Image
                  src={objective.src}
                  alt={objective.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110 brightness-[0.85] blur-[0.5px]"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-cinzel text-center px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {objective.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
