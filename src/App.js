import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exactpath="/" render={() => <h2>hello world</h2>}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
