//import './Welcome-page-registered.css';
import React, {Component} from 'react';
import {Container, Navbar, Nav, Image, Button, NavDropdown} from "react-bootstrap";
import {logout} from './logout'


class WelcomePage extends Component {
    render() {
        return (
            <div style={{ 
                backgroundImage: `url("../pictures/main-page.png")` 
              }}>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link href="/news">News</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>Hospitals</Nav.Link>
                            </Nav>
                            <Nav className={"justify-content-end"}>
                                <Nav.Link  href="/" onClick={logout}>Logout</Nav.Link>
                                <Nav.Link href="/update">Change password</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default WelcomePage;