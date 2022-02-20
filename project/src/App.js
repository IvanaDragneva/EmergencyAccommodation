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
        <Route path='/Hospitals/Tokuda' element={<Hospital id="1"/>}/>
        <Route path='/Hospitals/WtoraBolnica' element={<Hospital id="6"/>}/>
        <Route path='/Hospitals/Pirogov' element={<Hospital id="9"/>}/>
        <Route path='/Hospitals/MBAL_Serdika' element={<Hospital id="10"/>}/>
        <Route path='/Hospitals/St.Sophia' element={<Hospital id="11"/>}/>
        <Route path='/Hospitals/St.Ivan_Rilski' element={<Hospital id="7"/>}/>
        <Route path='/Hospitals/Nadezhda' element={<Hospital id="5"/>}/>
        <Route path='/Hospitals/Military_Medical_Academy' element={<Hospital id="8"/>}/>
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