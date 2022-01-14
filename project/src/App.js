import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from './components/Login';
//import WelcomePageNotRegistered from "./components/Welcome-page-not-registered"
//import WelcomePage from "./components/Welcome-page"
import Tokuda from './components/hospitals/Tokuda'
import WelcomePage from './components/Welcome-page';
import Hospitals from './components/Hospitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';


const RouterApp = () => {
  let routes = useRoutes([
  //{ path: "/", element: <WelcomePageNotRegistered /> },
  //{ path: "/welcome-page-registered", element: <WelcomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/registration", element: <Registration /> },
  ]);
  return routes;
};
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
    <Login/>
    <Registration/>
    </div>
  )}

export default App;