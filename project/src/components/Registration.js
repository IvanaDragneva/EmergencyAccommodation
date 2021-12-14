import React, {Component} from 'react'
import { Container, Row,Col, Form, Button} from 'react-bootstrap'
import './Registration.css'

class Registration extends Component{
    state={
        username: '',
        password: '',
        confirmedPassword: '',
        email: ''
    }
    
    render(){
        const {username, password, confirmedPassword, email} = this.state;
        return (
          <div>
          <Container>
          <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Create an account</h1>
          <Row className="mt-5">
              <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>First name</Form.Label>
                      <Form.Control type="name" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control type="name" placeholder="Enter last name" />
                    </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Confirm password</Form.Label>
                          <Form.Control type="password" placeholder="Confirm password" />
                      </Form.Group>

                      <Button variant="success btn-block" type="submit">
                          Submit
                      </Button>
                  </Form>
              </Col>
          </Row>
      </Container>
          </div>
        )
    }
}



export default Registration;