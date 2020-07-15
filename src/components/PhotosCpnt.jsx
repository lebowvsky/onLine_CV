import React from "react";

const Photo = ({ imgsrc, imgalt }) => {
  return (
    <img
      className="photoCard"
      src={require(`./../images/hobbies/desktop/${imgsrc}`)}
      alt={imgalt}
      style={{
        position: "absolute",
        top: `${
          Math.floor(Math.random() * 100) - 10
        }px`,
        zIndex: `${Math.floor(Math.random() * 40) + 10}`,
        transform: `rotate(${Math.floor(Math.random() * 60) - 30}deg)`,
      }}
    />
  );
};

export default Photo;
