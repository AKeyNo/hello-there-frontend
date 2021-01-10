import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, CardHeader, Grid, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

let SinglePost = ({ author, content }) => {
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
        subheader="Date and Time"
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

export const PostsList = () => {
  return (
    <Grid item container>
      <Grid item xs={false} sm={2} />
      <Grid item container xs={12} sm={8} spacing={2}>
        <Grid item xs={12}>
          <SinglePost
            author="Test User 1"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></SinglePost>
        </Grid>
        <Grid item xs={12}>
          <SinglePost
            author="Test User 2"
            content="Sed id lorem tellus. Duis vel nisi quis ante ullamcorper feugiat."
          ></SinglePost>
        </Grid>
        <Grid item xs={12}>
          <SinglePost
            author="Test User 3"
            content="Morbi ac neque eu arcu fermentum luctus."
          ></SinglePost>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};
