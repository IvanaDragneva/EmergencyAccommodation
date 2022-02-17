import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function ChangePassword(){
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);

    
    const changePassword = (event) => {
        event.preventDefault();
         axios({
             method: "PUT",
             data: {
                 email: email,
                 newPassword: newPassword,
             },
             withCredentials: true,
             url: "http://localhost:3001/api/users/update"
         })
         .then((res) => {
             console.log(res.status);
           if (res.status === 201) {
               setIsPasswordChanged(true);
             }
        })
        }
        if(isPasswordChanged){
            return <Navigate to="/welcome-page-registered"/>
        }
        return (
            <div>
                <Container>
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Change password</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                    type="email" 
                                    placeholder="Enter email"
                                    onChange={(e) => {setEmail(e.target.value)}}  />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>New password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Enter your new password"
                                    onChange={(e) => {setNewPassword(e.target.value)}} />
                                </Form.Group>

                                <Button variant="success btn-block" type="submit" onClick={changePassword}>
                                    Change password
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
        
}

export default ChangePassword;
