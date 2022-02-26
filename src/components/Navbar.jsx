import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import 'materialize-css';

function Nav() {
  return (
    <Navbar
      fixed
      className="green darken-1"
      alignLinks="right"
      brand={(
        <a className="brand-logo" href="/">
          Logo
        </a>
            )}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <NavItem>Item 1</NavItem>
      <NavItem>Item 2</NavItem>
    </Navbar>
  );
}

export default Nav;
