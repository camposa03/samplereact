import React, { Fragment } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Sidebar = (props) => {
  return (
    <Fragment>
      <Nav vertical>
        <NavItem>
          <NavLink disabled href="#">Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </Fragment>
  );
}

export default Sidebar;