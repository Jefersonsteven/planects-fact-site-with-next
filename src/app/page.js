"use client";

import Footer from "@/components/Footer/footer";
import MainInfo from "@/components/MainInfo/mainInfo";
import data from "../data.json";
import { useState } from "react";

export default function Home() {
  const [planetInfo] = useState(data);
  const [planetName] = useState("Mercury");
  return (
    <div>
      <MainInfo
        key={planetInfo[planetName]}
        info={planetInfo.find((planet) => planet.name === planetName)}
      />
      <Footer />
    </div>
  );
}
