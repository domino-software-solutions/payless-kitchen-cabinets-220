import React from "react";
import { Hero } from "./components/Hero";
import Featured from "./components/Featured";

import Footer from "./components/Footer";
import RemodelServices from "./components/RemodelServices";
import ProductCollection from "./components/ProductCollection";
import VisualizerTool from "./components/VisualizerTool";
import Experience from "./components/Experience";
import Values from "./components/Values";
import Bottom from "./components/Bottom";

function Splash() {
  return (
    <>
      <Hero />
      <Featured />
      <RemodelServices />
      <ProductCollection />
      <VisualizerTool />
      <Experience />
      <Values />
      <Bottom />
      <Footer />
    </>
  );
}

export default Splash;
