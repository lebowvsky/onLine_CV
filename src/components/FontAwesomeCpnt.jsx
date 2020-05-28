import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFreeCodeCamp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FontAwesomeCpnt = () => {
  return (
    <ul>
      <li>
        <a href="https://github.com/lebowvsky">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.freecodecamp.org/lebowvsky">
          <FontAwesomeIcon icon={faFreeCodeCamp} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/brice-le-gallo-tastet-74812715b/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
    </ul>
  );
};

export default FontAwesomeCpnt;
