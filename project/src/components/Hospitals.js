import React, {Component} from 'react';
import {Container, Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Hospitals.css'
import Tokuda from './hospitals/Tokuda';

class Hospitals extends Component {
    render() {
        return (
            <div className='listOfHospitals'>
                <h2>Here are all the partner hospitals we work with:</h2>
                <ol>
                    <li>
                        <Link to='Tokuda'>Acibadem CityClinic Tokuda</Link>
                    </li>
                    <li>
                        <a href="https://www.vtorambal.com/">Vtora MBAL - Sofia EAD - Sofia</a>
                    </li>
                    <li>
                        <a href="https://www.pirogov.eu/bg/">UMBALSM Pirogov</a>
                    </li>
                    <li>
                        <a href="https://mbalserdika.com/">MBAL Serdika EOOD - Sofia</a>
                    </li>
                    <li>
                        <a href="https://mbal-sofia.com/">MBAL - Sveta Sofia EOOD - Sofia</a>
                    </li>
                    <li>
                        <a href="https://acibademcityclinic.bg/tokuda">Acibadem CityClinic Tokuda</a>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Hospitals;