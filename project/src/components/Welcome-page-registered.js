import React, {Component} from 'react';
import BackgroundImage from './BackgroundImage';
import NavigationBarLogged from './NavigationBar-logged';

class WelcomePage extends Component {
    render() {
        return (
            <div style={{ 
                backgroundImage: `url("../pictures/main-page.png")` 
              }}>
               <NavigationBarLogged/>
                <BackgroundImage/>
            </div>
        );
    }
}

export default WelcomePage;