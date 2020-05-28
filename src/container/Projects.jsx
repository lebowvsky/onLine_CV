import React from "react";
import dataProjects from "./../data/dataProjects.json";
import ProjectCpnt from "../components/ProjectCpnt";

const Projects = () => {
  
  return (
    <div id="projects">
      {dataProjects.map((elt, index) => (
        <ProjectCpnt
          key={elt.title}
          title={elt.title}
          imgsrc={elt.imgsrc}
          imgalt={elt.imgalt}
          text={elt.text}
          link={elt.link}
          index={index}
        />
      ))}
    </div>
  );
};

export default Projects;
