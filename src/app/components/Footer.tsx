"use client";
import React, { useState } from "react";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("0740786670");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <footer className="bg-[#013220] text-[#F7D917] font-cinzel min-h-[37vh] relative overflow-hidden transition-colors duration-300 hover:bg-[#012218]">
      <div className="container mx-auto h-full py-6 px-4 relative">
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 h-full">
          <div className="flex justify-center items-center relative">
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-bold text-5xl text-center">
                Vrei să ne vizitezi?
              </h2>
              <button
                onClick={handleCopyNumber}
                className="bg-black text-[#F7D917] text-4xl px-8 py-4 relative overflow-hidden font-cinzel hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_5px_rgba(247,217,23,0.5)] transition-all duration-300 shadow-[0_0_10px_2px_rgba(247,217,23,0.3)]"
              >
                CONTACTEAZĂ-NE
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="flex flex-col items-center gap-4">
              <p className="text-3xl text-center">contact@dupaapalarazvan.ro</p>
              <p className="text-3xl text-center">
                Strada Lazu Baciului nr. 167, Sighetu Marmației 435502
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl text-center">© 2024 După Apă la Răzvan</p>
              <p className="text-4xl text-center">Cu dragoste și tradiție.</p>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col items-center gap-6 relative">
          <h2 className="font-bold text-2xl">Vrei să ne vizitezi?</h2>
          <button
            onClick={handleCopyNumber}
            className="bg-black text-[#F7D917] text-2xl px-6 py-3 relative overflow-hidden font-cinzel hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-[0_0_15px_5px_rgba(247,217,23,0.5)] transition-all duration-300 shadow-[0_0_10px_2px_rgba(247,217,23,0.3)]"
          >
            CONTACTEAZĂ-NE
          </button>
          <p className="text-2xl">contact@dupaapalarazvan.ro</p>
          <p className="text-lg text-center">
            Strada Lazu Baciului nr. 167, Sighetu Marmației 435502
          </p>
          <p className="text-lg">© 2024 După Apă la Răzvan</p>
          <p className="text-2xl">Cu dragoste și tradiție.</p>
        </div>
      </div>

      {showToast && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-black text-[#F7D917] rounded-md p-3 z-[1000] font-cinzel animate-slideDown"
          style={{ top: "20px" }}
        >
          Ai copiat numărul nostru. Dă-ne un telefon!
        </div>
      )}
    </footer>
  );
};

export default Footer;