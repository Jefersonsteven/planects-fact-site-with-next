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
      {/*       {planetsInfo.map((planet) => {
        return <Section2 key={planet.name} info={planet} />;
      })} */}
      <h1>Home</h1>
      <MainInfo
        key={planetInfo[planetName]}
        info={planetInfo.find((planet) => planet.name === planetName)}
      />
      <Footer />
    </div>
  );
}
