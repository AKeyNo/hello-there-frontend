import { AppBar, Tab, Tabs } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CommentIcon from "@material-ui/icons/Comment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import { Link, Route } from "react-router-dom";

export const NavigationBar = () => {
  const routes = ["/", "/sayings", "/myprofile"];
  return (
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
  );
};
