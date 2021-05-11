import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./components/Delivery";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  return (
      <Router>

    <div className="App">
      <Route path="/Delivery" exact component = {Delivery}/>
      <Route path="/Cart" exact component = {Cart}/>
      <Route path="/" exact component = {Login}/>

    </div>

      </Router>

  );
}

export default App;
