import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import LateralLinkcontainer from '../container/LateralLinkContainer';

const LateralMenu = () => {
  const props = useSpring({ transform: 'translateX(0px)', from: { transform: 'translateX(-400px)' }, delay: 700, config: config.slow })
  return (
    <animated.header id='lateral-menu' style={props}>
      <animated.img style={props} id='header-img' src='https://media-exp1.licdn.com/dms/image/C5603AQGUnA3evMrdrw/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=0iBWyoQyHC2TX0SLhfw8Ip4dFSATgI26-6T3ECe-BxI' alt='moi' />
      <animated.h1 style={props}>Brice<br /> Le Gallo-Tastet</animated.h1>
      <animated.div style={props}>
        <LateralLinkcontainer />
      </animated.div>
    </animated.header>
  );
};

export default LateralMenu;
