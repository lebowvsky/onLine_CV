import React from "react";

const ProjectCpnt = (props) => {
  const { title, imgsrc, imgalt, text } = props;
  return (
    <article>
      <img src={require(`./../images/${imgsrc}`)} alt={imgalt} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default ProjectCpnt;
