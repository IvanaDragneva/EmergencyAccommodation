import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from "./components/Login";
//import WelcomePageNotRegistered from "./components/Welcome-page-not-registered"
//import WelcomePage from "./components/Welcome-page"
import Tokuda from './components/hospitals/Tokuda'
import './App.css';
import {Route, Routes, useRoutes, BrowserRouter as Router} from 'react-router-dom'

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
      {/*<Router>
      <RouterApp />
      </Router>*/}
      <Tokuda></Tokuda>
      </div>
  );
}

export default App;