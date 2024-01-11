/* Questo componente è usato per ricreare la navbar */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavbarComp() {
  return (
    <>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className='text-danger fw-bold' href="#home">NETFLIX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='text-secondary fw-bold' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-light fw-bold' href="#link">Tv Shows</Nav.Link>
                    <Nav.Link className='text-secondary fw-bold' href="#link">Movies</Nav.Link>
                    <Nav.Link className='text-secondary fw-bold' href="#link">Recently Added</Nav.Link>
                    <Nav.Link className='text-secondary fw-bold' href="#link">My List</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
