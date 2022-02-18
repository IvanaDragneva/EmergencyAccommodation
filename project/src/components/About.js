import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <div>
                <h2 className="shadow-sm text-success mt-5 p-3 text-center rounded">Hi, there! Welcome to our app!</h2>
                <div className='inlineDisplay'>
                <div lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <h4>Who are we?</h4>
                    <p>&#10146; We are a couple of students, currently studying at university.</p>
                    <p>&#10146; With the knowledge, gained from our education, we have managed to create an application that could help modern hospitals' accommodation.</p>
                </div>
                <span className='offset'/>
                <div lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <h4>What is this app about?</h4>
                    <p>&#10146; The idea behind this app is to make the accommodation at hospitals a lot easier.</p>
                    <p>&#10146; Here you can save beds at certain hospitals, see how many free spots are left, and leave a review for your visit there.</p>
                </div>
                </div>
                <br/>
                <div lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    <h4>How does the app work?</h4>
                    <p>&#10146; First, log in to your account. If you don't have an account, register first.</p>
                    <p>&#10146; To see the list of hospitals that are registered in the app, click on "Hospitals" on the navigation bar above.</p>
                    <p>&#10146; To see information about a certain hospital click on it.</p>
                    <p>&#10146; More information about the hospital appears.</p>
                    <p>&#10146; In order to save a bed in the hospital, click on the button that says so.</p>
                    <p>&#10146; A questionnaire, that you should fill, appears.</p>
                    <p>&#10146; Submit the questionnaire and you are ready! You have saved your spot at the hospital!</p>
                </div>
                
            </div>
            );
    } 
}

export default About;