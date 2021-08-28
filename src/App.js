import logo from './logo.svg';
import React from "react";
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home/Home";
import Details from "./component/Countrydetails/details";
function App() {
  return (
    <div className="App">

      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/details/:DetailCountry">
            <Details></Details>

        </Route>

      </Switch>

      </Router>

    </div>
  );
}

export default App;
