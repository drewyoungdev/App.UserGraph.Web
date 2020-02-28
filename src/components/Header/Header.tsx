import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <>
            <Navbar
                className="justify-content-center"
            >
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header;
