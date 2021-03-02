import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader, Grid, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AddNewSayingForm } from "./AddNewSayingForm";
import { fetchSayings } from "./sayingsSlice";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

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

export const Sayings = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const sayingState = useSelector((state) => state.sayings);
  const { sayingsList, status, error } = sayingState;
  console.log(sayingsList);
  useEffect(() => {
    dispatch(fetchSayings());
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
      <Grid item xs={false} sm={2} />
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
            xs={12}
            sm={8}
            spacing={2}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              {!error ? <AddNewSayingForm></AddNewSayingForm> : <div></div>}
            </Grid>
            {sayingsList &&
              sayingsList.map((saying) => (
                <Grid item xs={12}>
                  <SingleSaying
                    author={saying.user.name}
                    content={saying.content}
                    time={saying.time}
                    key={saying._id}
                  ></SingleSaying>
                </Grid>
              ))}
          </Grid>
        </>
      )}
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};
