import React, { useEffect } from 'react';
import M from 'materialize-css';

const chandelier = require('../images/chandelier.jpg');
const sunset = require('../images/sunset.jpg');
const stairs = require('../images/stairs.jpg');
const certification = require('../images/professional-scrum-master-i-psm-i.png');

function Sections() {
  useEffect(() => {
    const element = document.querySelectorAll('.parallax');
    M.Parallax.init(element);
  }, []);

  return (
    <div className="container">
      <div className="parallax-container">
        <div className="parallax">
          <img src={sunset} alt="sunset on glass" />
        </div>
        <div className="section white center-align">
          <h3>Software Developer</h3>
          <p>Project details</p>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src={chandelier} alt="chandelier" />
        </div>
        <div className="section white center-align">
          <h3>Professional Scrum Master</h3>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a target="_blank" href="https://www.credly.com/badges/019e5ddf-eb1d-4287-a123-856bac6a13f2/public_url">
            <img src={certification} alt="PSM1" />
          </a>
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
