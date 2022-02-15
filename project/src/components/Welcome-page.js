import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import BackgroundImage from './BackgroundImage';

class WelcomePage extends Component {
    render() {
        return (
            <div>
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
                                <Nav.Link>About</Nav.Link>
                            </Nav>
                            <Nav className={"justify-content-end"}>
                                <Nav.Link href="/login">Log in</Nav.Link>
                                <Nav.Link href="/registration">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <BackgroundImage/>
            </div>
        );
    }
}

export default WelcomePage;