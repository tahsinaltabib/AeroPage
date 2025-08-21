import React from "react";
import "./navber.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from '../../reuseable/Image'
import Logo from '../../assets/logo.png'

const Navber = () => {
  return (
    <section className="header-nav">
      <Container>
        <Navbar expand='lg' className=''>
          <Navbar.Brand> <Image src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Service</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
            <nav><button>Download</button></nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Navber;
