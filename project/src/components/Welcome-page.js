import './Welcome-page.css';
import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";

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
                                <Nav.Link>News</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>Hospitals</Nav.Link> {/make dropdown/}

                            </Nav>
                            <Nav className={"justify-content-end"}>
                                <Nav.Link>Log in</Nav.Link>
                                <Nav.Link>Register</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default WelcomePage;