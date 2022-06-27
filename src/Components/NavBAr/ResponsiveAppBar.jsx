import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <Navbar bg="white" fixed="top" expand="lg">
      <Navbar.Brand href="/">
        <img className="website-image" src="" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/denunciar">Denunciar</Nav.Link>

          <Nav.Link href="/denuncias">Lista denuncias</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ResponsiveAppBar;
