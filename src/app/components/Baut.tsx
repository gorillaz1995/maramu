"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Baut() {
  const [imageHeight, setImageHeight] = useState("300px");
  const [imageWidth, setImageWidth] = useState("200px");
  const sticla1Ref = useRef(null);
  const sticla2Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageHeight("200px");
        setImageWidth("150px");
      } else {
        setImageHeight("300px");
        setImageWidth("200px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause resume reset",
        },
        repeat: -1,
      });

      tl.to(sticla1Ref.current, {
        y: -20,
        x: 40,
        rotation: 5,
        duration: 1,
        ease: "power1.inOut",
      })
        .to(
          sticla2Ref.current,
          {
            y: -20,
            x: -40,
            rotation: -5,
            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(sticla1Ref.current, {
          y: 0,
          x: 80,
          rotation: 0,
          duration: 1,
          ease: "power1.inOut",
        })
        .to(
          sticla2Ref.current,
          {
            y: 0,
            x: -80,
            rotation: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          "<"
        )
        .to([sticla1Ref.current, sticla2Ref.current], {
          x: 0,
          duration: 1,
          ease: "power1.inOut",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center pb-10 px-4 md:px-8 lg:px-16 bg-[#E6BE8A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <div className="relative w-full h-[300px] md:h-[400px] max-w-[800px]">
            <div
              ref={sticla1Ref}
              className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2"
              style={{
                width: imageWidth,
                height: imageHeight,
              }}
            >
              <Image
                src="/sticla3.webp"
                alt="Sticlă tradițională stânga"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px"
                priority
              />
            </div>
            <div
              ref={sticla2Ref}
              className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2"
              style={{
                width: imageWidth,
                height: imageHeight,
              }}
            >
              <Image
                src="/sticla2.webp"
                alt="Sticlă tradițională dreapta"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 150px, 200px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left text-[#013220]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel mb-6">
            Gustă esența Maramuresului
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-fauna-one leading-relaxed mb-6">
            Băuturile tradiționale ale Maramureșului - horinca, pălinca și țuica
            - poartă arome autentice și sunt distilate cu grijă. Sticlele
            artizanale adaugă un farmec aparte fiecărei picături.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-cinzel">
            Vino să descoperi gusturile autentice ale Maramureșului!
          </p>
        </div>
      </div>
    </section>
  );
}
