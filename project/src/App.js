// import 'bootstrap/dist/css/bootstrap.min.css'
// import Registration from './components/Registration'
// import Questionnaire from './containers/Questionnaire';
// import Login from './components/Login';
// //import Login from "./components/Login";
// import WelcomePageNotRegistered from "./components/Welcome-page-not-registered"
// import WelcomePage from "./components/Welcome-page"
// import {useRoutes} from 'react-router'
// import {Router} from 'react-router-dom'
// import Tokuda from './components/hospitals/Tokuda'
// import './App.css';


// const RouterApp = () => {
//   let routes = useRoutes([
//   { path: "/", element: <WelcomePageNotRegistered /> },
//   { path: "/welcome-page-registered", element: <WelcomePage /> },
//     { path: "/login", element: <Login /> },
//     { path: "/registration", element: <Registration /> },
//   ]);
//   return routes;
// };
// function App() {
//   return (
//       <div className="App">
//       <Router>
//       <RouterApp />
//       </Router>
  
//       </div>
//   )}

// export default App;
import WelcomePageRegistered from "./components/Welcome-page-registered"
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from './components/Login';
import WelcomePage from './components/Welcome-page';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/welcome-page-registered' element={<WelcomePageRegistered/>}/>
      </Routes>
      </Router>
  
    </div>
  );
}

export default App;