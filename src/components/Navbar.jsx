import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import 'materialize-css';

function Nav() {
  return (
    <Navbar
      fixed
      className="black"
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
        Project One
      </NavItem>
      <NavItem>
        Project Two
      </NavItem>
      <NavItem>
        Project Three
      </NavItem>
    </Navbar>
  );
}

export default Nav;
