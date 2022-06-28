import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";  

function ResponsiveAppBar() {
  return (
    <Navbar className="NavBar" fixed="top" expand="lg">
      <Navbar.Brand href="/">
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/denunciar">User</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ResponsiveAppBar;
