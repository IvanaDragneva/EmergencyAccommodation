import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function Login(){
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const login = (event) => {
        event.preventDefault();
         axios({
             method: "POST",
             data: {
                 firstName: firstName,
                 password: password,
             },
             withCredentials: true,
             url: "http://localhost:3001/api/users/login"
         })
         .then((res) => {
             console.log(res);
            if (res.status === 201) {
                setIsLogged(true); 
              }
            const token = res.data;
            localStorage.setItem('auth-token', token);
         })

        
     }
     if(isLogged){
         return <Navigate to="/welcome-page-registered"/>
     }
        return (
            <div>
                <Container>
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Log in</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <Form>
                                <Form.Group controlId="formBasicEmail">

                                    <Form.Label>First name</Form.Label>
                                    <Form.Control 
                                    type="name" 
                                    placeholder="Enter username"
                                    onChange={(e) => {setFirstName(e.target.value)}}  />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Enter password"
                                    onChange={(e) => {setPassword(e.target.value)}} />
                                </Form.Group>

                                <Button variant="success btn-block" type="submit" onClick={login}>
                                    Log in
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
}

export default Login;

