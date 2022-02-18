
import WelcomePageRegistered from "./components/Welcome-page-registered"
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Login from './components/Login';
import Tokuda from './components/hospitals/Tokuda';
import WtoraBolnica from './components/hospitals/WtoraBolnica';
import Pirogov from './components/hospitals/Pirogov';
import WelcomePage from './components/Welcome-page';
import Hospitals from './components/Hospitals';
import Serdika from './components/hospitals/Serdika';
import SvetaSofia from './components/hospitals/SvetaSofia';
import IvanRilski from './components/hospitals/IvanRilski';
import MilitaryMedicalAcademy from './components/hospitals/MilitaryMedicalAcademy';
import Nadezhda from './components/hospitals/Nadezhda';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChangePassword from "./components/ChangePassword";
import './App.css';
import News from './components/News'


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
        <Route path='/Hospitals/Tokuda' element={<Tokuda/>}/>
        <Route path='/Hospitals/WtoraBolnica' element={<WtoraBolnica/>}/>
        <Route path='/Hospitals/Pirogov' element={<Pirogov/>}/>
        <Route path='/Hospitals/MBAL_Serdika' element={<Serdika/>}/>
        <Route path='/Hospitals/St.Sophia' element={<SvetaSofia/>}/>
        <Route path='/Hospitals/St.Ivan_Rilski' element={<IvanRilski/>}/>
        <Route path='/Hospitals/Nadezhda' element={<Nadezhda/>}/>
        <Route path='/Hospitals/Military_Medical_Academy' element={<MilitaryMedicalAcademy/>}/>
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