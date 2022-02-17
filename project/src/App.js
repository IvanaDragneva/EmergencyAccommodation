import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from './components/Login';
import Tokuda from './components/hospitals/Tokuda'
import WelcomePage from './components/Welcome-page';
import Hospitals from './components/Hospitals';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import './App.css';


// const RouterApp = () => {
//   let routes = useRoutes([
//   //{ path: "/", element: <WelcomePageNotRegistered /> },
//   //{ path: "/welcome-page-registered", element: <WelcomePage /> },
//     { path: "/login", element: <Login /> },
//     { path: "/registration", element: <Registration /> },
//   ]);
//   return routes;
// };
function App() {
  return (
    <div className="App">
      <Router>
      <WelcomePage/>
      <Routes>
        <Route path='/Home' element={<WelcomePage/>}/>
        <Route path='/Hospitals' element={<Hospitals/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Hospitals/Tokuda' element={<Tokuda/>}/>
      </Routes>
      </Router>
    </div>
  )}

export default App;