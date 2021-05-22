import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Delivery from "./components/Delivery";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateCustomer from "./components/CreateCustomer";

function App() {
  return (
      <Router>

          <div className="App">
            <Route path="/Login/Cart/Delivery" exact component = {Delivery}/>
            <Route path="/Login/Cart" exact component = {Cart}/>
            <Route path="/Login" exact component = {Login}/>
            <Route path="/" exact component = {Register}/>
            <Route path = "/add-employee/:id" component = {CreateCustomer}></Route>
          </div>

      </Router>

  );
}

export default App;
