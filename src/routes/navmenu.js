import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router';

export function NavMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>The Music Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="../">Home</Nav.Link>
                    <Nav.Link as={Link} to="../music-groups">Music Groups</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}