import React, { useEffect } from 'react';
import M from 'materialize-css';

const chandelier = require('../images/chandelier.jpg');
const sunset = require('../images/sunset.jpg');
const stairs = require('../images/stairs.jpg');

function Sections() {
  useEffect(() => {
    const element = document.querySelectorAll('.parallax');
    M.Parallax.init(element);
  }, []);

  return (
    <div className="container">
      <div className="parallax-container">
        <div className="parallax">
          <img src={chandelier} alt="chandelier" />
        </div>
        <div className="section white center-align">
          <h3>Project one name and link will go here</h3>
          <p>Project details</p>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src={sunset} alt="sunset on glass" />
        </div>
        <div className="section white center-align">
          <h3>Project two name and link will go here</h3>
          <p>Project details</p>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src={stairs} alt="stairs" />
        </div>
        <div className="section white center-align">
          <h3>Project three name and link will go here</h3>
          <p>Project details</p>
        </div>
      </div>

    </div>
  );
}

export default Sections;
