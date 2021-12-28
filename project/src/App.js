import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from "./components/Login";
import WelcomePage from "./components/Welcome-page"
import './App.css';
import {Route, Routes, useRoutes, BrowserRouter as Router} from 'react-router-dom'

const RouterApp = () => {
  let routes = useRoutes([
   { path: "/", element: <WelcomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/registration", element: <Registration /> },
  ]);
  return routes;
};
function App() {
  return (
      <div className="App">
      <Router>
      <RouterApp />
    </Router>
  
    
      </div>
  );
}

export default App;