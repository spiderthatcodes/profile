import React from 'react';
import { Footer, Icon } from 'react-materialize';
import 'materialize-css';

function FooterComponent() {
  return (
    <Footer
      className="black"
      copyrights="&copy; 2022"
      links={(
        <ul>
          <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/jessica.lynn.dickerson"><Icon>facebook</Icon></a></li>
          <li><a className="grey-text text-lighten-3" href="mailto:jessicaldickerson@outlook.com"><Icon>email</Icon></a></li>
        </ul>
)}
    >
      <h5 className="white-text">
        Jessica Dickerson, Software Developer &amp; PSM 1
      </h5>
      <p className="grey-text text-lighten-4">
        Look me up on
        {' '}
        <a className="blue-text" href="https://www.linkedin.com/in/jessica-lynn-dickerson/">LinkedIn</a>
      </p>
    </Footer>
  );
}

export default FooterComponent;
