import React from "react";
import { useSpring, useTrail, animated, config } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";

const TitleSpeciality = () => {
  const fontIcons = [
    <FontAwesomeIcon className="icons javascript" icon={faJs} />,
    <FontAwesomeIcon className="icons react" icon={faReact} />,
    <FontAwesomeIcon className="icons node" icon={faNodeJs} />,
  ];
  const iconsStyle = useTrail(fontIcons.length, {
    transform: "translateY(0)",
    opacity: 1,
    from: { transform: "translateY(-5vh)", opacity: 0 },
    delay: 1300,
    config: config.wobbly,
  });
  const titleStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 900,
    config: config.slow,
  });

  const curlyLeftStyle = useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    delay: 1300,
    config: config.slow,
  });

  const curlyRightStyle = useSpring({
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(50px)" },
    delay: 1300,
    config: config.slow,
  });

  return (
    <div id="title-speciality">
      <div className="title-container">
        <animated.p style={curlyLeftStyle} className="curly-left">&#123;</animated.p>
        <animated.h2 style={titleStyle}>
          Developpeur web &#38; mobile
          <br />
          Javascript - React / Node.js
        </animated.h2>
        <div className="icons-container">
          {iconsStyle.map(({ ...rest }, index) => (
            <animated.div key={index} style={{ ...rest }}>{fontIcons[index]}</animated.div>
          ))}
        </div>
        <animated.p style={curlyRightStyle} className="curly-right">&#125;</animated.p>
      </div>
    </div>
  );
};

export default TitleSpeciality;
