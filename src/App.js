import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exactpath="/" render={() => <ul>test message</ul>}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
