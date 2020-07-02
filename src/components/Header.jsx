import React from "react";
import { useSpring, animated, config } from "react-spring";
import FontAwesomeCpnt from "./FontAwesomeCpnt";
import myImage from '../images/perso_low_res_square.jpg';

const Header = () => {
  const props = useSpring({
    transform: "translateX(0px)",
    opacity: 1,
    from: { transform: "translateX(-30px)", opacity: 0 },
    delay: 700,
    config: config.slow,
  });

  const animationImage = useSpring({
    transform: "translate(-50%, 0px)",
    opacity: 1,
    from: { transform: "translate(-50%, -30px)", opacity: 0 },
    delay: 950,
    config: config.slow,
  });
  return (
    <animated.header id="header" style={props}>
      <animated.img
        style={animationImage}
        id="header-img"
        src={myImage}
        alt="moi"
      />
      <animated.div id="my-name" style={props}>
        <h1>
          Brice
          <br /> Le Gallo-Tastet
        </h1>
      </animated.div>
      <FontAwesomeCpnt />
    </animated.header>
  );
};

export default Header;
