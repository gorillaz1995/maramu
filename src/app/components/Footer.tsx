"use client";
import React, { useState } from "react";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("0740786670");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@dupaapalarazvan.ro";
  };

  return (
    <footer className="bg-[#D4AF37] text-[#013220] font-cinzel min-h-[37vh] relative overflow-hidden">
      <div className="container mx-auto h-full py-6 px-4 relative">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 h-full">
          {/* First Column */}
          <div className="flex justify-center items-center relative">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-bold text-5xl text-center">
                Vrei să ne vizitezi?
              </h2>
              <button
                onClick={handleCopyNumber}
                className="bg-black text-[#F7D917] text-4xl px-8 py-4 relative overflow-hidden font-cinzel hover:bg-gray-800"
              >
                CONTACTEAZĂ-NE
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex justify-center items-center relative">
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleEmailClick}
                className="text-3xl text-center hover:underline cursor-pointer"
              >
                contact@dupaapalarazvan.ro
              </button>
              <p className="text-3xl text-center">
                Strada Lazu Baciului nr. 167, Sighetu Marmației 435502
              </p>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex justify-center items-center relative">
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl text-center">© 2024 După Apă la Răzvan</p>
              <p className="text-4xl text-center">Cu dragoste și tradiție.</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-6 relative">
          <h2 className="font-bold text-2xl">Vrei să ne vizitezi?</h2>
          <button
            onClick={handleCopyNumber}
            className="bg-black text-[#F7D917] text-2xl px-6 py-3 relative overflow-hidden font-cinzel hover:bg-gray-800"
          >
            CONTACTEAZĂ-NE
          </button>
          <button
            onClick={handleEmailClick}
            className="text-2xl hover:underline cursor-pointer"
          >
            contact@dupaapalarazvan.ro
          </button>
          <p className="text-lg text-center">
            Strada Lazu Baciului nr. 167, Sighetu Marmației 435502
          </p>
          <p className="text-lg">© 2024 După Apă la Răzvan</p>
          <p className="text-2xl">Cu dragoste și tradiție.</p>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-black text-[#F7D917] rounded-md p-3 z-[1000] font-cinzel"
          style={{ top: "20px" }}
        >
          Ai copiat numărul nostru. Dă-ne un telefon!
        </div>
      )}
    </footer>
  );
};

export default Footer;
