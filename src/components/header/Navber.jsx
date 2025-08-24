import React from "react";
import "./navber.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Image from "../../reuseable/Image";
import Logo from "../../assets/logo.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navber = () => {
  return (
    <section className='header-nav'>
      <Container>
        <Navbar expand='lg' className=''>
          <Navbar.Brand>
            {" "}
            <Image src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto nav-mid'>
              <Nav.Link className="mid-menu">Home</Nav.Link>
              <Nav.Link className="mid-menu">About</Nav.Link>
              <Nav.Link className="mid-menu">Service</Nav.Link>
              <Nav.Link className="mid-menu">Contact</Nav.Link>
            </Nav>
            <div className='nav-end'>
              <button className='end-btn'>
                <FaCloudDownloadAlt />
                Download
              </button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  );
};

export default Navber;
