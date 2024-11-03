// Standard1.tsx

"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface Standard1Props {
  title: string;
  text: string;
  images: { src: string; alt: string }[];
  bgColor: string;
  titleColor: string;
  textColor: string;
}

export default function Standard1({
  title,
  text,
  images,
  bgColor,
  titleColor,
  textColor,
}: Standard1Props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageHeight, setImageHeight] = useState("auto");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Image Container */}
        <div
          className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-lg"
          style={{
            animation: isVisible ? "float 6s ease-in-out infinite" : "none",
            height: imageHeight,
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

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center">
          <h2
            className="text-4xl md:text-5xl font-cinzel mb-6"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          <p
            className="text-lg md:text-xl font-fauna-one leading-relaxed"
            style={{ color: textColor }}
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
