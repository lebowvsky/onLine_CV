import React from "react";
import TitleSpeciality from "../components/TitleSpeciality";
import Projects from "./Projects";
import Technos from "./Technos";

const MainContent = () => {
  
  return (
    <main id="main">
      <TitleSpeciality />
      <Projects />
      <Technos />
    </main>
  );
};

export default MainContent;
