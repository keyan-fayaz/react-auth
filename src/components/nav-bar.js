import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthNav from "./auth-nav";
import ProfileHelper from "./ProfileHelper";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Welcome to ERA
    </Nav.Link>
    {/* <ProfileHelper /> */}
  </Nav>
);

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        {/* <Navbar.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
