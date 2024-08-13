import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootsrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Jinghan Yang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href='#'><img src={} alt="" /></a>
                <a href='#'><img src={} alt="" /></a>
                <a href='#'><img src={} alt="" /></a>
            </div>
            <button className="vvd" onClick={() =>console.log('connect')}><span>Lets's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
