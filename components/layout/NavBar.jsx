import Link from "next/link";

import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

// component
import SocialMediaIcons from "./SocialMediaIcons";

// data
import navItems from "@config/navItems";
import greet from "@config/greet";
// https://brittanychiang.com/
export default function NavBar({ children }) {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">{greet.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navItems.map((item) => (
                <Nav.Link key={item[0]} href={item[1]}>
                  {item[0]}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="contents">
        <Container>
          <Row className="contents-row">
            <Col xs={11}>{children}</Col>
            <Col xs={1}>
              <SocialMediaIcons />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
