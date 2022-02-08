import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/" className="mr-auto">
          Aaron Gee
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/SIR">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Download Resume</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavMenu;
