import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Registration from './components/Registration'
import Questionnaire from './containers/Questionnaire';
import Login from './components/Login';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
    <Login/>
    <Registration/>
    </div>
  );
}

export default App;