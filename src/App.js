import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { Home } from "./features/home/Home";
import { Sayings } from "./features/sayings/SayingsList";
import { SignInPage } from "./features/login/SignInPage";
import { SignUpPage } from "./features/login/SignUpPage";
import { MyProfile } from "./features/users/MyProfile";
import { NavigationBar } from "./features/bars/NavigationBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sayings" component={Sayings} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/login" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
