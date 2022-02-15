//import WelcomePageRegistered from "./components/Welcome-page-registered"
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from './components/Login';
import WelcomePage from './components/Welcome-page';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChangePassword from "./components/ChangePassword";
import './App.css';
import Tokuda from './components/hospitals/Tokuda'
import News from './components/News'

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
       <Route path='/welcome-page-registered' element={<WelcomePageRegistered/>}/>
        <Route path='/update' element={<ChangePassword/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;