import React, {useState} from 'react'
import { Container, Row,Col, Form, Button} from 'react-bootstrap'
// import './Registration.css'
import axios from 'axios'
import validation from './registerValidation'
import { Navigate } from 'react-router-dom'

function Registration() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);

   const register = (event) => {
       event.preventDefault();
       setErrors(validation(firstName, secondName, password, confirmedPassword, email));
        axios({
            method: "POST",
            data: {
                firstName: firstName,
                secondName: secondName,
                email: email,
                password: password,
                confirmedPassword: confirmedPassword
            },
            withCredentials: true,
            url: "http://localhost:3001/api/users/registration"
        })
        .then((res) => {
            if (res.status === 201) {
                setIsRegistered(true); 
              }
         })
    }
    if(isRegistered){
        return <Navigate to="/login"/>
    }

        return (
          <div>
          <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Create an account</h1>
          <Row className="mt-5">
              <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>First name</Form.Label>
                      <Form.Control 
                      type="name" 
                      placeholder="Enter first name" 
                      onChange={(e) => {setFirstName(e.target.value)}} />
                      {errors.firstName && <p className='error'>{errors.firstName}</p>}
                    </Form.Group>
                   
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control 
                      type="name" 
                      placeholder="Enter last name"
                      onChange={(e) => {setSecondName(e.target.value)}}  />
                      {errors.secondName && <p className='error'>{errors.secondName}</p>}
                    </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control 
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => {setEmail(e.target.value)}}  />
                          {errors.email && <p className='error'>{errors.email}</p>}
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control 
                          type="password" 
                          placeholder="Password"
                          onChange={(e) => {setPassword(e.target.value)}}  />
                          {errors.password && <p className='error'>{errors.password}</p>}
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Confirm password</Form.Label>
                          <Form.Control 
                          type="password" 
                          placeholder="Confirm password"
                          onChange={(e) => {setConfirmedPassword(e.target.value)}}  />
                          {errors.confirmedPassword && <p className='error'>{errors.confirmedPassword}</p>}
                      </Form.Group>

                      <Button variant="success btn-block" type="submit" onClick={register}>
                          Submit
                      </Button>
                  </Form>
              </Col>
          </Row>
      </Container>
          </div>
        )
    
}



export default Registration;