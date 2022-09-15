/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import M from 'materialize-css';
import { SkillContainer } from './style';

const chandelier = require('../images/chandelier.jpg');
const spiral = require('../images/spiral.jpg');
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
          <img src={spiral} alt="sunset on glass" />
        </div>
        <div className="section white center-align">
          <h3>Software Developer</h3>
          <p>
            I got my start by completing a <strong>MERN</strong> developer bootcamp, so I guess
            that makes <strong>JavaScript</strong> my native language. However, since then I have
            branched out and gained experience in <strong>Python</strong> and <strong>Java</strong>. My current
            position is a full stack developer role with <strong>Java/SpringBoot</strong> on the
            backend and <strong>TypeScript/React</strong> on the frontend. You can check out my some of my work in the project links above. Enjoy!
          </p>
          <h4>Languages, Frameworks, and other Tech Skills</h4>
          <SkillContainer>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </SkillContainer>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src={chandelier} alt="chandelier" />
        </div>
        <div className="section white center-align">
          <h3>Professional Scrum Master</h3>
          <p>
            In addition to my role of software developer, I am the Scrum Master for my team of 8. I earned my PSM 1 certification in April, 2021.
          </p>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a
            target="_blank"
            href="https://www.credly.com/badges/019e5ddf-eb1d-4287-a123-856bac6a13f2/public_url"
          >
            <img src={certification} alt="PSM1" />
          </a>
        </div>
      </div>

      <div className="parallax-container">
        <div className="parallax">
          <img src={stairs} alt="stairs" />
        </div>
        <div className="section white center-align">
          <h3>Other Education</h3>
          <p>I have a <strong>B.A. in Psychology</strong>. Although this does not directly apply to my work today, I use the knowledge I gained far more often than one would think. At the very least, it taught me critical thinking, statistics, and how to Google effectively.</p>
        </div>
      </div>
      <div className="section white" />
    </div>
  );
}

export default Sections;
