import React, { useEffect } from "react";
import TitleSpeciality from "../components/TitleSpeciality";
import Projects from "./Projects";
import Technos from "./Technos";
import Hobbies from "./Hobbies";

const MainContent = () => {
  return (
    <main id="main">
      <TitleSpeciality />
      <Projects />
      <Technos />
      <Hobbies />
    </main>
  );
};

export default MainContent;
