"use client";

import Footer from "@/components/Footer/footer";
import MainInfo from "@/components/MainInfo/mainInfo";
import data from "../data.json";
import { useState } from "react";
import Header from "@/components/Header/Header";

export default function Home() {
  const [planetInfo] = useState(data);
  const [planetName, setPlanetName] = useState("Mercury");
  return (
    <div>
      <Header
        planetsNames={planetInfo.map((planet) => planet.name)}
        setPlanetName={setPlanetName}
      />
      <MainInfo
        key={planetInfo[planetName]}
        info={planetInfo.find((planet) => planet.name === planetName)}
      />
      <Footer />
    </div>
  );
}