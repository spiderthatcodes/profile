import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import 'materialize-css';

function Nav() {
  return (
    <Navbar
      fixed
      className="pink darken-3"
      centerLogo
      alignLinks="right"
      brand={(
        <a className="brand-logo" href="/">
          Jessica Dickerson
        </a>
            )}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <NavItem>
        <a href="mailto:jessicaldickerson@outlook.com"><Icon>email</Icon></a>
      </NavItem>
    </Navbar>
  );
}

export default Nav;
