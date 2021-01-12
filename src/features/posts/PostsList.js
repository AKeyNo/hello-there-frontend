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

import { fetchPosts } from "./postsSlice";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

let SinglePost = ({ author, content, time }) => {
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

export const Posts = () => {
  const dispatch = useDispatch();

  const postState = useSelector((state) => state.posts);
  const { postsList } = postState;
  console.log(postsList);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Grid item container>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} spacing={2}>
        {postsList &&
          postsList.map((post) => (
            <Grid item xs={12}><SinglePost
              author={post.user.name}
              content={post.content}
              time={post.time}
              key={post._id}
            ></SinglePost></Grid>
          ))}
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};