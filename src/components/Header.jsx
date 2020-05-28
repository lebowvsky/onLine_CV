import React from "react";
import { useSpring, animated, config } from "react-spring";
import FontAwesomeCpnt from "./FontAwesomeCpnt";

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
        src="https://media-exp1.licdn.com/dms/image/C5603AQGUnA3evMrdrw/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=0iBWyoQyHC2TX0SLhfw8Ip4dFSATgI26-6T3ECe-BxI"
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
