/* Questo componente è usato per ricreare la navbar */
import React, { useState } from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import GestisciProfili from './GestisciProfili';

export default function NavbarComp() {

  const [mostraGestisciProfili, setMostraGestisciProfili] = useState(false);

  const viewProfile = () => {
    setMostraGestisciProfili(true);
  }

  const nascondiComponenti = () => {
    setMostraGestisciProfili(false);
    
  }

  return (
    <>
        <Navbar expand="lg ms-2">
            <Container fluid>
                <Navbar.Brand onClick={nascondiComponenti} className='text-danger fw-bold' href="#home">NETFLIX</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='text-secondary fw-bold' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-light fw-bold' href="#link">Tv Shows</Nav.Link>
                    <Nav.Link className='text-secondary fw-bold' href="#link">Movies</Nav.Link>
                    <Nav.Link className='text-secondary fw-bold' href="#link">Recently Added</Nav.Link>
                    <Nav.Link className='text-secondary fw-bold' href="#link">My List</Nav.Link>
                    <Nav.Link className='text-info fw-bold' href="#link"><i className="fa fa-search icons"></i></Nav.Link>
                    <Nav.Link className='text-info fw-bold' href="#link">KIDS</Nav.Link>
                    <Nav.Link className='text-info fw-bold' href="#link"><i className="fa fa-bell icons"></i></Nav.Link>

                    <Dropdown>
                      <Dropdown.Toggle variant="bg-netflix" id="dropdown-basic">
                      <i className="fa fa-user icons"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='bg-dark'>
                        <Dropdown.Item onClick={viewProfile} className='bg-dark text-light' href="#/action-1">Gestisci i profili</Dropdown.Item>
                        <Dropdown.Item className='bg-dark text-light' href="#/action-2">Account</Dropdown.Item>
                        <Dropdown.Divider className='bg-light' />
                        <Dropdown.Item className='bg-dark text-light' href="#/action-3">Impostazioni</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {mostraGestisciProfili && <GestisciProfili />}
    </>
  )
}
