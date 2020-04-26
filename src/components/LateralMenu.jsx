import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const LateralMenu = () => {
  const props = useSpring({ transform: 'translateX(0px)', from: { transform: 'translateX(-300px)' }, delay: 500, config: config.wobbly })
  return (
    <animated.header style={props}>
      <animated.img style={props} id='header-img' src='https://media-exp1.licdn.com/dms/image/C5603AQGUnA3evMrdrw/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=0iBWyoQyHC2TX0SLhfw8Ip4dFSATgI26-6T3ECe-BxI' alt='moi' />
      <h1>Brice<br /> Le Gallo</h1>
    </animated.header>
  );
};

export default LateralMenu;
