"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Seasons() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageHeight, setImageHeight] = useState("auto");

  const images = [
    {
      src: "/iar1.webp",
      alt: "Iarna la Duparaz",
    },
    {
      src: "/var1.webp",
      alt: "Vara la Duparaz",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => {
      setImageHeight(
        window.innerWidth < 1000 ? "calc(56.25vw * 1.25)" : "auto"
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="w-full min-h-screen py-8 px-4 md:px-8 lg:px-16 lg:flex lg:items-center overflow-hidden"
      style={{ backgroundColor: "#013220" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6">
        <div
          className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden max-w-[800px] max-h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-shadow duration-300"
          style={{
            height: imageHeight,
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.src}
              className="absolute inset-0 transition-opacity duration-2200"
              style={{ opacity: currentImage === index ? 1 : 0 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left pt-10">
          <h2
            className="text-4xl md:text-4xl lg:text-4xl font-cinzel mb-6"
            style={{ color: "#F7D917" }}
          >
            Refugiul tau în orice anotimp
          </h2>
          <p
            className="text-lg md:text-lg lg:text-lg font-fauna-one leading-relaxed"
            style={{
              color: "#D4AF37",
              textShadow: "0 0 3px #F7D91733",
            }}
          >
            Timpul trece, dar frumusetea este vesnic prezenta aici. Verdele crud
            al primaverii sau albul pur al iernii te va fermeca indiferent de
            anotimp.
          </p>
        </div>
      </div>
    </section>
  );
}
