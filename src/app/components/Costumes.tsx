"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Costumes() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageHeight, setImageHeight] = useState("auto");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    {
      src: "/vara.webp",
      alt: "Costume populare vara",
    },
    {
      src: "/iarna.webp",
      alt: "Costume populare iarna",
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isVisible) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [images.length, isVisible]);

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
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8">
        <div
          className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-lg"
          style={{
            animation: isVisible ? "float 6s ease-in-out infinite" : "none",
            height: imageHeight,
            minHeight: "400px",
            position: "relative",
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

          {images.map((image, index) => (
            <div
              key={image.src}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentImage === index ? 1 : 0,
                height: "100%",
                width: "100%",
                position: "absolute",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover"
                priority={index === 0}
                loading="eager"
              />
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 text-center">
          <h2
            className="text-2xl md:text-5xl font-cinzel mb-6"
            style={{ color: "#F7D917" }}
          >
            Sedinta Foto <br />
            Costume Traditionale Morosene
          </h2>
          <p
            className="text-lg md:text-xl font-fauna-one leading-relaxed"
            style={{ color: "#D4AF37" }}
          >
            Fie ca esti mic sau mare, inalt sau scund, baiat sau fata vei gasi
            un costum popular sa-ti vina perfect! Cu ocazia evenimentelor
            speciale cum ar fi Craciunul, Pastele deschidem portile colectiei
            noastre vaste de costume traditionale morosene.<br></br> Te invitam
            la o sedinta foto de neuitat pe plaiurile noastre frumoase!
          </p>
        </div>
      </div>
    </section>
  );
}
