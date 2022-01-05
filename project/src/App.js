import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from "./components/Login";
import WelcomePage from './components/Welcome-page';
import Hospitals from './components/Hospitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <WelcomePage/>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/Hospitals' element={<Hospitals/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;