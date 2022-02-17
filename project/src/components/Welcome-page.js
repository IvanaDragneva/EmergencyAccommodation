import React, {Component} from 'react';
import BackgroundImage from './BackgroundImage';
import NavigationBar from './NavigationBar';
class WelcomePage extends Component {
    render() {
        return (
            <div>  
                <NavigationBar />  
                <BackgroundImage/>
            </div>
        );
    }
}

export default WelcomePage;