import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import background from "../../res/backgrounds/space.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      flexGrow: 1,
      margin: 10,
      padding: 100,
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
}));

const ToLogin = React.forwardRef((props, ref) => (
  <Link ref={ref} to="/login" {...props} />
));

const ToSignUp = React.forwardRef((props, ref) => (
  <Link ref={ref} to="/signup" {...props} />
));

export const Home = () => {
  const classes = useStyles();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedSayingUser");
    console.log(loggedUserJSON);
    if (loggedUserJSON) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item spacing={2} alignItems="center" justify="center">
          <Grid item lg={6} xs={12}>
            <Paper className={classes.standardPaper}>
              <Typography>
                <h1>Hello There</h1>
                <p>
                  Connect with those from around the globe and post your own sayings.
                </p>
                {isLoggedIn === false ? (
                  <div>
                    <Button component={ToSignUp}>Sign Up</Button>
                    <Button component={ToLogin}>Log In</Button>
                  </div>
                ) : (
                  <div></div>
                )}
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={0}>
            <img className={classes.img} src={background} alt="space" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
