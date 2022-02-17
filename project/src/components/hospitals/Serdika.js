import React, { useEffect, useState} from 'react';
import {Button, Modal, Container, Row, Col, Form} from "react-bootstrap";
import './HospitalsStyle.css'
import picture from '../../pictures/serdika.png'
import Image from 'react-bootstrap/Image'
import axios from 'axios';
import CommentForm from '../CommentForm'

function Serdika(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [freeBeds, setFreeBeds] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
 

    const getBeds = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/api/bookings/serdika"
        })
        .then((res) =>setFreeBeds(res.data[0].freeBeds));
    }
    const updateBeds = () => {
        axios({
            method: "PUT",
            withCredentials: true,
            url: "http://localhost:3001/api/bookings/serdika"
        });
    }

    function update(){
        updateBeds();
        return setFreeBeds(freeBeds - 1)
    }
     const bookBed = (event) => {
          axios({
              method: "POST",
              data: {
                  firstName: firstName,
                  email: email,
                  date: date,
              },
              withCredentials: true,
              url: "http://localhost:3001/api/bookings/serdika"
          }).then((res) => console.log(res))
      }
  
        return (
            <div>
            <Container>
            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">MULTIPROFILE HOSPITAL FOR ACTIVE TREATMENT "SERDIKA" Ltd.</h1>
            <Row>
            <Col>   
                <ul>
                    <li><b>Description:</b> MULTIPROFILE HOSPITAL FOR ACTIVE TREATMENT "SERDIKA" Ltd. for more than a decade is a leading medical institution in the group of Medical Complex "Serdika", including Multidisciplinary Hospital for long-term treatment and rehabilitation, Hospice, Medical Practice, Nursing Center and Residence doctors. Their model of comprehensive medical care is followed and copied by other medical institutions, but the constant efforts to develop and improve our medical skills, combined with a Christian attitude towards patients makes us leaders in the field of practical medicine.</li>
                    <li><b>Number of free beds in the hospital:</b> {getBeds()}{freeBeds}</li>
                    <Image src={picture} rounded="false"/>
                    <Button variant="success btn-block" type="submit" onClick={handleShow}>
                        Save a bed
                    </Button>
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>Book a bed</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
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
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="success" onClick={() => {bookBed(); update(); handleClose();}}>Save Changes</Button>
                    </Modal.Footer>
                    </Modal>
                </ul>
                </Col>
                <Col>
                <CommentForm></CommentForm>
                </Col>
                </Row>
                </Container>
            </div>
        );
}

export default Serdika;