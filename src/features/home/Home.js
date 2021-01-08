import React from "react";
import { makeStyles, } from "@material-ui/core/styles";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import background from "../../res/backgrounds/space.jpg";

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

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item spacing={2} alignItems="center" justify="center">
          <Grid item lg={6} xs={12}>
            <Paper className={classes.standardPaper} >
              <Typography>
                <h1>Hello There</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod interdum dictum. Nam molestie nisl eget quam gravida,
                  in molestie elit sodales. Phasellus massa mi, posuere quis
                  mauris non, commodo cursus eros. Nullam vehicula non est eu
                  sollicitudin. Fusce sodales feugiat tempor. Sed elit velit,
                  condimentum vitae blandit ac, luctus et justo. Nulla lacinia
                  pulvinar euismod. Suspendisse vitae porta lorem. Curabitur
                  vitae sapien erat. Donec pharetra sed metus non euismod.
                </p>
                <Button>Sign Up</Button>
                <Button>Log In</Button>
              </Typography>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={0}>
            <img className={classes.img} src={background} alt="space"/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
