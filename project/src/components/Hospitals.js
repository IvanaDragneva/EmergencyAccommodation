import React, {Component} from 'react';
import { Link , Route} from 'react-router-dom';
import './Hospitals.css'
import Hospital from './Hospital';

class Hospitals extends Component {
    render() {
        return (
            <div className='listOfHospitals'>
                <h2 className="shadow-sm text-success mt-5 p-3 text-center rounded">Here are all the partner hospitals we work with:</h2>
                <div lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <ol>
                    <li>
                        <Link to='/Hospitals/1'>&#10146; Acibadem CityClinic Tokuda</Link>
                    </li>
                    <li>
                        <Link to='/Hospitals/6'>&#10146; Second Multiprofile Hospital for Active Treatment - EAD, Sofia</Link>
                    </li>
                    <li>
                        <Link to = '/Hospitals/9'>&#10146; UMBALSM Pirogov</Link>
                    </li>
                    <li>
                        <Link to='/Hospitals/10'>&#10146; MULTIPROFILE HOSPITAL FOR ACTIVE TREATMENT "SERDIKA" Ltd.</Link>
                    </li>
                    <li>
                        <Link to='/Hospitals/11'>&#10146; St. Sophia Medical Center</Link>
                    </li>
                    <li>
                        <Link to='/Hospitals/7'>&#10146; UMHAT "St. Ivan Rilski" EAD</Link>
                    </li>
                    <li>
                        <Link to='/Hospitals/8'>&#10146; Military Medical Academy</Link>
                    </li>
                    <li>
                        <Link to='/Hospitals/5'>&#10146; Hospital Nadezhda</Link>
                    </li>
                </ol>
                </div>
            </div>
        );
    }
}

export default Hospitals;