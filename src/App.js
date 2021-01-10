import React from "react";
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CommentIcon from "@material-ui/icons/Comment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Home } from "./features/home/Home";
import { PostsList } from "./features/posts/PostsList";

function App() {
  const routes = ["/", "/sayings", "/myprofile"];
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
          <Route exact path="/" component={Home} />
          <Route exact path="/sayings" component={PostsList} />
          <Route
            exact
            path="/myprofile"
            render={() => <React.Fragment>Profile Tab</React.Fragment>}
          />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
