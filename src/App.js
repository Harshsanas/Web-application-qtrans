import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={PageNotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
