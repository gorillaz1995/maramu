"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MdBathtub,
  MdBalcony,
  MdThermostat,
  MdChair,
  MdBed,
  MdHotel,
  MdFamilyRestroom,
  MdPerson,
} from "react-icons/md";
import CaruselC from "./CaruselC";

const CamereDescription = () => {
  const sectionRef = useRef(null);
  const facilitiesRef = useRef(null);
  const roomTypesRef = useRef(null);
  const bathTextRef = useRef(null);
  const outroTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      // Facilities section from left
      tl.from(
        facilitiesRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1.75,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Room types section from right
      tl.from(
        roomTypesRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1.75,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Bath text from left
      tl.from(
        bathTextRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 1.75,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Outro text from right
      tl.from(
        outroTextRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1.75,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-4 md:px-8 lg:px-16 bg-[#013220] text-[#cca43b]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8 font-fauna-one text-lg md:text-xl leading-relaxed text-center md:text-left">
          <p className="text-2xl pb-6">
            Va invitam sa descoperiti camerele noastre elegante, create cu
            dragoste si pasiune. Fiecare camera are personalitatea ei unica si
            este dotata cu tot confortul modern de care aveti nevoie pentru o
            sedere perfecta.
          </p>

          <CaruselC />

          <div className="grid md:grid-cols-2 gap-12 ">
            <div ref={facilitiesRef} className="space-y-4">
              <h3 className="text-2xl font-cinzel">Facilitati in Camera</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdBathtub className="text-xl" />
                  Baie proprie complet echipata
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdBalcony className="text-xl" />
                  Balcon privat
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdThermostat className="text-xl" />
                  Sistem modern de incalzire si racire
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdChair className="text-xl" />
                  Mobilier elegant si confortabil
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdBed className="text-xl" />
                  Lenjerie premium
                </li>
              </ul>
            </div>

            <div ref={roomTypesRef} className="space-y-4">
              <h3 className="text-2xl font-cinzel">Tipuri de Camere</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdHotel className="text-xl" />
                  Camera Dubla - 180RON <br></br> pat matrimonial sau twin (la
                  alegere)
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdFamilyRestroom className="text-xl" />
                  Camera Tripla <br></br> ideala pentru familii
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <MdPerson className="text-xl" />
                  Camera Single - 150RON <br></br> confort pentru calatorii
                  individuali
                </li>
              </ul>
            </div>
          </div>

          <p ref={bathTextRef}>
            La noi, confortul dumneavoastra este prioritatea noastra. Fiecare
            baie este dotata cu apa calda la temperatura perfecta si presiune
            excelenta, prosoape curate, produse de igiena si toate accesoriile
            necesare. Tot ce trebuie sa faceti este sa va bucurati de sederea
            dumneavoastra.
          </p>

          <p
            ref={outroTextRef}
            className="text-center font-cinzel text-2xl mt-12"
          >
            Rezervati acum pentru o experienta autentica in inima Maramuresului!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CamereDescription;
