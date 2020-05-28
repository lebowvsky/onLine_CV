import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCpnt = (props) => {
  AOS.init({
    duration: 1200,
  });
  const { title, imgsrc, imgalt, text, link, index } = props;
  return (
    <article data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
      <img src={require(`./../images/${imgsrc}`)} alt={imgalt} />
      <div className="text-project">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link} target="_blank">
          GO
        </a>
      </div>
    </article>
  );
};

export default ProjectCpnt;
