import React from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';


const TitleSpeciality = () => {
  const fontIcons = [
    <FontAwesomeIcon className="icons javascript" icon={faJs} />,
    <FontAwesomeIcon className="icons react" icon={faReact} />,
    <FontAwesomeIcon className="icons node" icon={faNodeJs} />
  ];
  const iconsStyle = useTrail(fontIcons.length, {
    transform: 'translateY(0)',
    from: { transform: 'translateY(-60vh)' },
    delay: 1300,
    config: config.wobbly
  });
  const titleStyle = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 900, config: config.slow });
  return (
    <div id="title-speciality" >
      <animated.h2 style={titleStyle}>
        Developpeur web & mobile<br/>
        Javascript - React / Node.js
      </animated.h2>
      <div className="icons-container">
        {
          iconsStyle.map(({...rest}, index) => (
            <animated.div style={{...rest}}>{fontIcons[index]}</animated.div>
          ))
        }
      </div>
    </div>
  );
}

export default TitleSpeciality;