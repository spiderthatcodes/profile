import React, { useEffect } from 'react';
import M from 'materialize-css';

const chandelier = require('../images/chandelier.jpg');
const sunset = require('../images/sunset.jpg');
const stairs = require('../images/stairs.jpg');

function Slide() {
  useEffect(() => {
    const ele = document.querySelector('.slider');
    M.Slider.init(ele);
  }, []);

  return (
    <div className="slider">
      <ul className="slides">
        <li>
          <img src={chandelier} alt="chandelier" />
          <div className="caption center-align">
            <h3 className="red-text text-lighten-1">
              Photo of a chandelier by Juan Domenech
            </h3>
            <h4 className="red-text">Input Text Here</h4>
          </div>
        </li>
        <li>
          <img src={sunset} alt="sunset on glass buildings" />
          <div className="caption center-align">
            <h3 className="red-text text-lighten-1">
              Photo of a sunset by Timon Studler
            </h3>
            <h4 className="red-text">Input Text Here</h4>
          </div>
        </li>
        <li>
          <img src={stairs} alt="stairs" />
          <div className="caption center-align">
            <h3 className="red-text text-lighten-1">
              Photo of stairs by David Dvoracek
            </h3>
            <h4 className="red-text">Input Text Here</h4>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
