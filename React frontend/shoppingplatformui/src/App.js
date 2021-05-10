import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./components/Delivery";
import Test from "./components/Test";

function App() {
  return (
      <Router>

    <div className="App">
      <Route path="/" exact component = {Delivery}/>
      <Route path="/test" exact component = {Test}/>
    </div>

      </Router>

  );
}

export default App;
