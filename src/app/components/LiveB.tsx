"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LiveB() {
  const [imageHeight, setImageHeight] = useState("auto");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    {
      src: "/trupa.jpg",
      alt: "Formatie Live Duparaz",
    },
  ];

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
                opacity: 1,
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
            Formatii Live <br></br> Traditii si Voie Buna
          </h2>
          <p
            className="text-lg md:text-xl font-fauna-one leading-relaxed"
            style={{ color: "#D4AF37" }}
          >
            Descopera magia muzicii autentice romanesti alaturi de artistii
            nostri locali! De la colinde traditionale in perioada sarbatorilor
            de iarna pana la melodii populare si moderne care te ridica la dans,
            formatia noastra aduce bucurie si energie pozitiva in fiecare
            eveniment. Te invitam sa te bucuri de un spectacol live exceptional,
            unde vocile melodioase si instrumentele traditionale se imbina
            perfect pentru a crea o atmosfera de neuitat. Repertoriul bogat
            include atat cantece populare indragite din toate zonele tarii, cat
            si melodii contemporane, toate interpretate cu pasiune si
            autenticitate. Lasa-te purtat de ritmurile antrenante si traieste
            experienta unui show muzical nemaipomenit care pastreaza vie
            traditia si cultura noastra romaneasca.
          </p>
        </div>
      </div>
    </section>
  );
}
