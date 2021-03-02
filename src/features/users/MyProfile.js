import React, { useEffect, useState } from "react";
import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
      margin: 10,
      padding: 5,
    },
  },
  standardPaper: {
    textAlign: "center",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  avatar: {
    width: '100px',
    height: '100px',
  }
}));

export const MyProfile = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);

  // when the page loads, grab the user's information
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedSayingUser");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON));
    }
  }, []);

  // grab the user's information
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedSayingUser");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      setUser(JSON.parse(loggedUserJSON));
    }
  }, []);
  
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} align="center">
          <Paper>
            <Avatar alt="A" className={classes.avatar}></Avatar>
            <div>@username</div>
            <div>Edit your biography here!</div>
            <div>Location: San Diego, CA Born: 09/09/1999 Joined: December 2020</div>
            <div>X Followers, Y Following</div>
          </Paper>
          <Paper>test</Paper>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
};
