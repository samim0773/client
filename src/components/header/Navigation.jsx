import './Navigation.css'
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import "./Navigation.css";
import Modal from "react-bootstrap/Modal";
import SignUpLogin from "../login-btn/SignUpLogin";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please Login To Continue
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center">
        <div className="sing-up-form-outer">
          <div className="sing-up-form-innter">
          <SignUpLogin />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary navbar"
      sticky="top"
    >
      <Container>
        <LinkContainer to="">
          <Navbar.Brand>ABC Institute of Technology</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ margin: "auto" }}>
            <LinkContainer to="">
              <Nav.Link to="">Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
              <LinkContainer to="about/institute">
                <NavDropdown.Item>About Institute</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="about/management">
                <NavDropdown.Item>Management</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="about/vision-mission">
                <NavDropdown.Item>Vision-Mission</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Academics" id="collapsible-nav-dropdown">
              <LinkContainer to="academics/result">
                <NavDropdown.Item>Result</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="academics/syllabus">
                <NavDropdown.Item>Syllabus</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="academics/timetable">
                <NavDropdown.Item>Timetable</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="academics/academic-calender">
                <NavDropdown.Item>Academic Calender</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="academics/new-admission">
                <NavDropdown.Item> New Admission</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="teacher">
              <Nav.Link>Teacher</Nav.Link>
            </LinkContainer>
            <LinkContainer to="gallery">
              <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Button
              variant="outline-success"
              style={{ margin: "5px 0" }}
              onClick={() => setModalShow(true)}
            >
              Login
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
