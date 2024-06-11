import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HedNavbar.css"


function HedNavbar() {
    return (
        
        <div>
            <Navbar sticky="top" className='bg_mainNav' bg="" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='https://www.sharewolves.com/images/logo-black.png' className='img-fluid'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="aboutus">About</Nav.Link>
                            <Nav.Link href="marketingPage">Market</Nav.Link>
                            <Nav.Link href="featuresPage">Features</Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown">
                                <NavDropdown.Item href="Services">Service Main</NavDropdown.Item>
                                <NavDropdown.Item href="ServicePage1">Service 1</NavDropdown.Item>
                                <NavDropdown.Item href="ServicePage2">Service 2</NavDropdown.Item>
                                <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="contactus">Contact</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>
                            <Nav.Link href="register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HedNavbar