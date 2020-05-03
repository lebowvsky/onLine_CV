import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFreeCodeCamp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LateralLinkcontainer = () => {
  return (
    <ul>
      <li><a href="https://github.com/lebowvsky"><FontAwesomeIcon icon={faGithub} /> lebowvsky</a></li>
      <li><a href="https://www.freecodecamp.org/lebowvsky"><FontAwesomeIcon icon={faFreeCodeCamp} /> freeCodeCamp</a></li>
      <li><a href="https://www.linkedin.com/in/brice-le-gallo-tastet-74812715b/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>

    </ul>
  );
}

export default LateralLinkcontainer;