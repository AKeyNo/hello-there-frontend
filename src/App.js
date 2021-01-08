import React from "react";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import CommentIcon from "@material-ui/icons/Comment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function App() {
  const routes = ["/", "/tab2", "/tab3"];
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar position="static">
              <Tabs
                value={
                  history.location.pathname !== "/"
                    ? history.location.pathname
                    : false
                }
                centered
              >
                {console.log(history.location.pathname)}
                <Tab
                  value={routes[0]}
                  label="Home"
                  icon={<HomeIcon />}
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  value={routes[1]}
                  label="Saying"
                  icon={<CommentIcon />}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  value={routes[2]}
                  label="Profile"
                  icon={<AccountCircleIcon />}
                  component={Link}
                  to={routes[2]}
                />
              </Tabs>
            </AppBar>
          )}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <React.Fragment>Home Tab</React.Fragment>}
          />
          <Route
            exact
            path="/tab2"
            render={() => <React.Fragment>Saying Tab</React.Fragment>}
          />
          <Route
            exact
            path="/tab3"
            render={() => <React.Fragment>Profile Tab</React.Fragment>}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
