"use client";

import Image from "next/image";

export default function Baut() {
  return (
    <section className="w-full min-h-screen pb-10 px-4 md:px-8 lg:px-16 bg-[#E6BE8A] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <div className="relative w-full h-[400px] max-w-[800px]">
            <div className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 w-[200px] h-[300px]">
              <Image
                src="/sticla3.webp"
                alt="Sticlă tradițională stânga"
                fill
                className="object-contain"
                sizes="200px"
                priority
              />
            </div>
            <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-[200px] h-[300px]">
              <Image
                src="/sticla2.webp"
                alt="Sticlă tradițională dreapta"
                fill
                className="object-contain"
                sizes="200px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left text-[#013220]">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-6">
            Gustă esența Maramuresului
          </h2>
          <p className="text-lg md:text-xl font-fauna-one leading-relaxed mb-6">
            Băuturile tradiționale ale Maramureșului - horinca, pălinca și țuica
            - poartă arome autentice și sunt distilate cu grijă. Sticlele
            artizanale adaugă un farmec aparte fiecărei picături.
          </p>
          <p className="text-xl md:text-2xl font-cinzel">
            Vino să descoperi gusturile autentice ale Maramureșului!
          </p>
        </div>
      </div>
    </section>
  );
}
