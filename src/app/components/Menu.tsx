"use client";

import React, { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const Menux: React.FC = () => {
  const router = useRouter();
  const overlayTopRef = useRef<HTMLDivElement>(null);
  const overlayBottomRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (overlayTopRef.current && overlayBottomRef.current) {
        gsap.set(overlayTopRef.current, { xPercent: -100 });
        gsap.set(overlayBottomRef.current, { xPercent: 100 });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleNavigation = (path: string) => {
    if (overlayTopRef.current && overlayBottomRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.to([overlayTopRef.current, overlayBottomRef.current], {
          xPercent: 0,
          duration: 0.25,
          ease: "sine.out",
          onComplete: () => {
            router.push(path);
            setIsOpen(false);
            gsap.to(overlayTopRef.current, {
              xPercent: 100,
              duration: 0.35,
              ease: "sine.out",
              delay: 0.1,
            });
            gsap.to(overlayBottomRef.current, {
              xPercent: -100,
              duration: 0.35,
              ease: "sine.out",
              delay: 0.1,
            });
          },
        });
      });

      return () => ctx.revert();
    } else {
      router.push(path);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-4 right-6 z-[1000]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-[30%] bg-[#F7D917] transition-all duration-300 scale-90"
          aria-label="Menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-14 right-0 w-[220px] p-2 rounded-[15px] bg-gradient-to-br from-[#F7D917] to-[#e6c915] shadow-lg">
            <nav className="flex flex-col gap-2">
              {[
                { path: "/", label: "Home" },
                { path: "/camere", label: "Camere" },
                { path: "/despre-noi", label: "Despre noi" },
                { path: "/activitati", label: "Activitati" },
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="w-full p-3 text-center text-lg font-rufina bg-gradient-to-r from-[#F7D917] to-[#e6c915] hover:from-[#e6c915] hover:to-[#F7D917] rounded-[10px] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
      <div
        ref={overlayTopRef}
        className="fixed top-0 left-0 right-0 h-[50vh] bg-[#013220] z-[999] pointer-events-none"
      />
      <div
        ref={overlayBottomRef}
        className="fixed bottom-0 left-0 right-0 h-[50vh] bg-[#013220] z-[999] pointer-events-none"
      />
    </>
  );
};

export default Menux;
