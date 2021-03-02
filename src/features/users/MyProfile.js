import React, { useEffect, useState } from "react";
import { Avatar, Grid, makeStyles, Paper } from "@material-ui/core";
import { SingleSaying } from "../sayings/SayingsList";
import axios from "axios";

const baseUrl = "/api/users/info/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
      margin: 10,
      padding: 5,
    },
  },
  standardPaper: {
    padding: theme.spacing(10),
    textAlign: "center",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
}));

export const MyProfile = () => {
  const classes = useStyles();
  const [user, setUser] = useState({username: "", aboutMe: "", location: "", joined: null});

  // when the page loads, grab the user's token and username
  useEffect(() => {
    let username = "";

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(baseUrl + username);
        const userInfo = response.data;
        console.log(userInfo);
        setUser(userInfo);
      } catch (exception) {
        console.error(exception);
      }
    };
    const loggedUserJSON = window.localStorage.getItem("loggedSayingUser");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      username = JSON.parse(loggedUserJSON).username;
      console.log(username);
      fetchUserInfo();
    }
  }, [setUser]);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} align="center">
          <Paper>
            <Avatar alt="A" className={classes.avatar}></Avatar>
            <div>@{user.username}</div>
            <div>{user.aboutMe}</div>
            <div>Location: {user.location} Joined: {user.joined}</div>
            <div>X Followers, Y Following</div>
          </Paper>
          <SingleSaying
            author={"Angelo"}
            content={"This is a test saying."}
          ></SingleSaying>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
};
