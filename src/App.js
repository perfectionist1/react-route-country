import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import './App.css';

import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/name/:countryName">
         <CountryDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
