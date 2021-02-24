import React, { useEffect } from "react";
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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

let SingleSaying = ({ author, content, time }) => {
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

  const sayingState = useSelector((state) => state.sayings);
  const { sayingsList, status, error } = sayingState;
  console.log(sayingsList);
  useEffect(() => {
    dispatch(fetchSayings());
  }, [dispatch]);

  return (
    <Grid item container>
      <Grid item xs={false} sm={2} />
      {error && <div>ERROR: could not fetch sayings</div>}
      {status === "pending" ? (
        <div>Loading...</div>
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
              <AddNewSayingForm></AddNewSayingForm>
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
