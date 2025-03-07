import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const CustomNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="primary" expand="lg" className=" bg-custom navbar">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", color: "white" }}
        >
          Mein Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/")}>Startseite</Nav.Link>
            <Nav.Link onClick={() => navigate("/projects")}>Projekte</Nav.Link>
            <NavDropdown title="Werdegang" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/workexperience")}>
                Erfahrungen
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/educations")}>Ausbildung</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/courses")}>
                Weiterbildung
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/Languages")}>Sprachen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/hobbies")}>Hobbies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
