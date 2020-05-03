import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const TitleSpeciality = () => {
  return (
    <div id="title-speciality" >
      <h2>
        Developpeur web & mobile<br/>
        Javascript - React / Node.js
      </h2>
      <div>
        <FontAwesomeIcon className="icons" icon={faReact} />
        <FontAwesomeIcon className="icons" icon={faNodeJs} />
      </div>
    </div>
  );
}

export default TitleSpeciality;