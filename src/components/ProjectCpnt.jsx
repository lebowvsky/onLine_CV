import React from "react";

const ProjectCpnt = (props) => {
  const { title, imgsrc, imgalt, text, link } = props;
  return (
    <article>
      <img src={require(`./../images/${imgsrc}`)} alt={imgalt} />
      <div className="text-project">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link} target="_blank">GO</a>
      </div>
    </article>
  );
};

export default ProjectCpnt;
