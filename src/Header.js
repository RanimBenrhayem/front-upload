import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
class SideBar extends Component {
  render() {
    return (
      <Navbar variant="dark" className="navv">
        <img src="Logo.png" alt="" className="logoheader" />

        <Navbar.Brand href="#home" className="titreheader">
          Dashboard
        </Navbar.Brand>
        <Container className="navv">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default SideBar;
