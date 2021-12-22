import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Login extends Component {
    state={
        username: '',
        password: '',
    }
    render(){
        const {username, password} = this.state;
        return (
            <div>
                <Container>
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Log in</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="name" placeholder="Enter username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>

                                <Button variant="success btn-block" type="submit">
                                    Log in
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Login;