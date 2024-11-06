"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Baut() {
  const [imageHeight, setImageHeight] = useState("300px");
  const [imageWidth, setImageWidth] = useState("200px");

  useEffect(() => {
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

  return (
    <section className="w-full h-screen flex items-center pb-10 px-4 md:px-8 lg:px-16 bg-[#D4AF37] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <div className="relative w-full h-[300px] md:h-[400px] max-w-[800px]">
            <div
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
            Tarie de la Maramu&apos;
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-fauna-one leading-relaxed mb-6">
            Bauturile noastre emblematice - horinca si palinca - poarta arome
            autentice, recunoscute pe plan mondial si sunt distilate cu grija.
            <br></br> Sticlele artizanale adauga un farmec aparte fiecarei
            picaturi.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-cinzel">
            Vino să descoperi gusturile autentice ale Maramuresului!
          </p>
        </div>
      </div>
    </section>
  );
}
