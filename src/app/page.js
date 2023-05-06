"use client";

import Footer from "@/components/Footer/footer";
import Section2 from "@/components/Section-2/Section-2";
import data from "../data.json";
import { useState } from "react";

export default function Home() {
  const [planetInfo, setPlanetInfo] = useState(data);
  const [planetName, setPlanetName] = useState("Mercury");
  return (
    <div>
      <Section2
        key={planetInfo[planetName]}
        info={planetInfo.find((planet) => planet.name === planetName)}
      />

      <Footer />
    </div>
  );
}
