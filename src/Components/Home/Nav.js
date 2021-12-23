import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
const Navv = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand style={{ fontWeight: "bolder" }} href="/">
          Assignment
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Assignment
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navv;
