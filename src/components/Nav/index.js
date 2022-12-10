import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavPage(props) {
    const {
        navLinkSelected,
        setNavLinkSelected      
    } = props;
    
    return (
        <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Daniel Yeung</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#AboutMe" onClick={() => setNavLinkSelected('About')}>About Me</Nav.Link>
            <Nav.Link href="#Projects" onClick={() => setNavLinkSelected('Portfolio')}>Projects</Nav.Link>
            <Nav.Link href="#Resume" onClick={() => setNavLinkSelected('Resume')}>Resume</Nav.Link>
            <Nav.Link href="#Contact" onClick={() => setNavLinkSelected('Contact')}>Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>  
    )
}

export default NavPage;