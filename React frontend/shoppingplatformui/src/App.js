import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
      <Router>
    <div className="App">

      <Route path="/" exact component = {Home}/>

    </div>
      </Router>
  );
}

export default App;
