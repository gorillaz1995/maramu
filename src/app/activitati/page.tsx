"use client";

import React from "react";
import Costumes from "../components/Costumes";
import Objectives from "../components/Objectives";
import Foct from "../components/Foct";
import Resta from "../components/Resta";
import LiveB from "../components/LiveB";

export default function ActivitatiPage() {
  return (
    <main className="flex-1 bg-[#013220] p-4">
      <h1 className="text-[#cca43b] font-cinzel text-3xl">Activitati</h1>

      <Resta />
      <Costumes />
      <LiveB />
      <Foct />
      <Objectives />
    </main>
  );
}
