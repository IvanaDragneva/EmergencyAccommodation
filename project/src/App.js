import WelcomePageRegistered from "./components/Welcome-page-registered"
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Login from './components/Login';
import WelcomePage from './components/Welcome-page';
import Hospitals from './components/Hospitals';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChangePassword from "./components/ChangePassword";
import './App.css';
import News from './components/News'
import Hospital from "./components/Hospital";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/Hospitals' element={<Hospitals/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Hospitals/:id' element={<Hospital/>}/>
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