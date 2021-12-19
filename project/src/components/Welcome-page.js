import React, {Component} from 'react';
import {Button, Col, Container, Row,Form} from "react-bootstrap";

class WelcomePage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>Welcome to the app!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant={"info"}>Log in</Button>
                        </Col>
                        <Col>
                            <Button variant={"info"}>Register</Button>
                            {/*blah blah blah*/}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default WelcomePage;