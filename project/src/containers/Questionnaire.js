import React,  {useState} from 'react';
import { Container, Row,Col, Form, Button} from 'react-bootstrap'
import './Questionnaire.css'

const Questionnaire = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
    return(
        <div>
            <Container>
                {/*<h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Questionnaire</h1>*/}
                <Row className="mt-5">
                <Col lg={5} md={6} sm={12} className="p-5 m-auto">
                <Form>
                <Form.Label>Enter your name</Form.Label>
                <Form.Control 
                      type="name" 
                      placeholder="Enter username"
                      onChange={(e) => {setFirstName(e.target.value)}}  />
                <Form.Label>Enter email</Form.Label>
                <Form.Control 
                            type="email" 
                            placeholder="Enter email"
                            onChange={(e) => {setEmail(e.target.value)}}  />
                <Form.Label>Enter date</Form.Label>
                      <Form.Control 
                            type="date" 
                            placeholder="Enter date"
                            onChange={(e) => {setDate(e.target.value)}}  />
                <Form.Label>Have you had any of these symptoms?</Form.Label>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check type={type} id={'temperature'} label={'temperature over 38°C'}/>
                      <Form.Check type={type} id={'loss-taste-smell'} label={'loss of taste/smell'}/>
                      <Form.Check type={type} id={'headache'} label={'headache'}/>
                      <Form.Check type={type} id={'nothing'} label={'I have not experienced any of the above'}/>
                    </div>
                  ))}
                  <Form.Label>Do you suffer from any of the following diseases?</Form.Label>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check type={type} id={'asthma'} label={'asthma'}/>
                      <Form.Check type={type} id={'diabetes'} label={'diabetes'}/>
                      <Form.Check type={type} id={'heart-disease'} label={'heart disease'}/>
                      <Form.Check type={type} id={'copd'} label={'COPD - chronic obstructive pulmonary disease'}/>
                    </div>
                  ))}
                  <Form.Label>Do you have allergies?</Form.Label>
                  {['checkbox'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check type={type} id={'yes'} label={'yes'}/>
                        <Form.Check type={type} id={'no'} label={'no'}/>
                      </div>
                    ))}
                    <Form.Label>Did you have close contact with a sick person from COVID-19?</Form.Label>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type={type} id={'yes'} label={'yes'}/>
                          <Form.Check type={type} id={'no'} label={'no'}/>
                        </div>
                      ))}
                </Form>
            </Col>
        </Row>
    </Container>
        </div>
    )     
}



export default Questionnaire;