import './Welcome-page.css';
import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import Login from './Login';
import Registration from './Registration';
import { Link } from "react-router-dom"

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
                                <Nav.Link>
                                    <Link to="WelcomePage">Home</Link>
                                </Nav.Link>
                                <Nav.Link>News</Nav.Link>
                                <Nav.Link>About</Nav.Link>
                                <Nav.Link>
                                    <Link to="Hospitals">Hospitals</Link>
                                </Nav.Link>

                            </Nav>
                            <Nav className={"justify-content-end"}>
                                <Nav.Link>
                                    <Link to="Login">Log in</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="Registration">Register</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default WelcomePage;