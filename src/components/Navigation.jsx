import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ margin: "auto" }}>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Academics" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Academic Calender
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Result</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Syllabus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Timetable</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Admission Fee
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing">Teacher</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-success" style={{ margin: "5px 0" }}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
