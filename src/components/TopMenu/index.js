import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "gatsby";
import { Colors } from "../../colors";

const TopMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Nav.Link as={Link} to="/" style={{ color: Colors.White }}>
          Muscle Builders
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <NavDropdown title="Models" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/models/item-1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/models/item-2">
              Another
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/models/item-3">
              Something
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Brands" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/brands/brand-1">
              Go
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands/brand-2">
              To
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/brands/brand-3">
              Brand
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopMenu;
