import React from "react";
import { Avatar, Button, Grid, TextField } from "@material-ui/core";

export const AddNewSayingForm = () => {
  return (
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
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained">Post</Button>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};
