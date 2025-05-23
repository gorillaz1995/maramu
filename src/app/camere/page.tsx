"use client";

import React from "react";

import CamereDescription from "../components/CamereD";

export default function CamerePage() {
  return (
    <main className="flex-1 bg-[#013220] p-4 overflow-hidden">
      <h1 className="text-[#cca43b] font-cinzel text-3xl">Camere</h1>

      <CamereDescription />
    </main>
  );
}
