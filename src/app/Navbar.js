import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
//import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          hello world
        </Typography>
      </Toolbar>
    </AppBar>
  )
};