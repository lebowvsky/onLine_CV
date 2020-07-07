import React from "react";
import dataPhotos from "../data/dataPhotos.json";
import PhotoCpnt from "../components/PhotosCpnt";
import Ligthroom from "../images/icons/lightroom.jpg";
import Illustrator from "../images/icons/illustrator.jpg";
import Photoshop from "../images/icons/photoshop.jpg";

const Hobbies = () => {
  return (
    <div id="hobbies">
      <div id="icon-adobe">
        <img src={Ligthroom} alt="Ligthroom icon" />
        <img src={Illustrator} alt="Illustrator icon" style={{top: "20px"}} />
        <img src={Photoshop} alt="Photoshop icon" />
      </div>
      <div id="photo">
        {dataPhotos.map((photo, index) => (
          <PhotoCpnt
            key={photo.imgsrc}
            imgsrc={photo.imgsrc}
            imgalt={photo.imgAlt}
            angle={index * 10}
          />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
