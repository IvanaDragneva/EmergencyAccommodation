import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Hospitals.css'

class Hospitals extends Component {
    render() {
        return (
            <div className='listOfHospitals'>
                <h2>Here are all the partner hospitals we work with:</h2>
                <ol>
                    <li>
                        <Link to='Tokuda'>&#10146; Acibadem CityClinic Tokuda</Link>
                    </li>
                    <li>
                        <Link to='WtoraBolnica'>&#10146; Second Multiprofile Hospital for Active Treatment - EAD, Sofia</Link>
                    </li>
                    <li>
                        <Link to = 'Pirogov'>&#10146; UMBALSM Pirogov</Link>
                    </li>
                    <li>
                        <Link to='MBAL_Serdika'>&#10146; MULTIPROFILE HOSPITAL FOR ACTIVE TREATMENT "SERDIKA" Ltd.</Link>
                    </li>
                    <li>
                        <Link to='St.Sophia'>&#10146; St. Sophia Medical Center</Link>
                    </li>
                    <li>
                        <Link to='St.Ivan_Rilski'>&#10146; UMHAT "St. Ivan Rilski" EAD</Link>
                    </li>
                    <li>
                        <Link to='Military_Medical_Academy'>&#10146; Military Medical Academy</Link>
                    </li>
                    <li>
                        <Link to='Nadezhda'>&#10146; Hospital Nadezhda</Link>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Hospitals;