import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dataPhotos from "../data/dataPhotos.json";
import PhotoCpnt from "../components/PhotosCpnt";
import Ligthroom from "../images/icons/lightroom.jpg";
import Illustrator from "../images/icons/illustrator.jpg";
import Photoshop from "../images/icons/photoshop.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hobbies = () => {
  const ltr = React.createRef();
  const iltor = React.createRef();
  const psd = React.createRef();

  useEffect(() => {
    gsap
      .from(".icons-adobe", {
        scrollTrigger: {
          trigger: "#hobbies",
          start: "top center",
          toggleActions: "restart none none none",
        },
        duration: 0.5,
        y: -100,
        opacity: 0,
        stagger: 0.2,
      })
      .delay(1);
  });

  useEffect(() => {
    gsap.from(".photoCard", {
      scrollTrigger: {
        trigger: "#hobbies",
        start: "top 80%",
        toggleActions: "restart none none none",
      },
      duration: 0.75,
      x: -1500,
      stagger: 0.2,
    });
  });

  return (
    <div id="hobbies">
      <div id="icon-adobe">
        <img
          className="icons-adobe"
          ref={ltr}
          src={Ligthroom}
          alt="Ligthroom icon"
        />
        <img className="icons-adobe" src={Illustrator} alt="Illustrator icon" />
        <img className="icons-adobe" src={Photoshop} alt="Photoshop icon" />
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
