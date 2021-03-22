import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Avatar,
  CardHeader,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { fetchSayings } from "./sayingsSlice";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import { useHistory } from "react-router";

const sayingUrl = "/api/sayings";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export const SingleSaying = ({ author, content, time }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="user">{author[0]}</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={time}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Saying</Button>
      </CardActions>
    </Card>
  );
};

export const AddNewSayingForm = ({ token }) => {
  const [sayingMessage, setSayingMessage] = useState("");
  let history = useHistory();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const submitSaying = async (event) => {
    event.preventDefault();

    try {
      const request = await axios.post(
        sayingUrl,
        { content: sayingMessage },
        config
      );
      const saying = request.data;
      console.log(saying);

      setSayingMessage("");
      history.pushState("/sayings");
    } catch (exception) {
      console.log("something went wrong...");
      setSayingMessage("");
    }
  };

  return (
    <form onSubmit={submitSaying}>
      <Grid item container spacing={0} justify="center" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <Avatar></Avatar>
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="standard-multiline-static"
            label="What do you have to say?"
            multiline
            rows={4}
            fullWidth={true}
            onChange={({ target }) => setSayingMessage(target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Button type="submit" variant="contained">
            Post
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </form>
  );
};

export const Sayings = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [token, setToken] = useState("");
  const sayingState = useSelector((state) => state.sayings);
  const { sayingsList, status, error } = sayingState;
  console.log(sayingsList);

  useEffect(() => {
    dispatch(fetchSayings());
    const loggedUserJSON = window.localStorage.getItem("loggedSayingUser");
    console.log(loggedUserJSON);
    const parsedUser = JSON.parse(loggedUserJSON);
    if (loggedUserJSON) {
      setToken(parsedUser.token);
    }
  }, [dispatch]);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid item container>
      <Grid item xs={false} sm={3} />
      {error && (
        <Grid item sm={10} style={{ textAlign: "center" }}>
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Failed to load sayings.
            </Alert>
          </Snackbar>
        </Grid>
      )}
      {status === "pending" ? (
        <Grid item xs={false} sm={10} style={{ textAlign: "center" }}>
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info">
              Loading messages...
            </Alert>
          </Snackbar>
        </Grid>
      ) : (
        <>
          <Grid
            item
            container
            xs={10}
            sm={6}
            spacing={2}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              {!error ? (
                <AddNewSayingForm token={token}></AddNewSayingForm>
              ) : (
                <div></div>
              )}
            </Grid>
            {sayingsList &&
              sayingsList.map((saying) => (
                <Grid item xs={12}>
                  <SingleSaying
                    author={saying.user.firstName}
                    content={saying.content}
                    time={saying.time}
                    key={saying._id}
                  ></SingleSaying>
                </Grid>
              ))}
          </Grid>
        </>
      )}
      <Grid item xs={false} sm={3} />
    </Grid>
  );
};
