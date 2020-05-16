import React from "react";
import {
  Divider,
  Grid,
  Paper,
  ListItem,
  Typography,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize } from "../helpers/capitalize";

const styles = makeStyles({
  comments: {
    padding: "1rem",
    maxHeight: "95%",
    overflow: "auto",
  },
});

const Comment = ({ comment }) => {
  const classes = styles();

  return (
    <ListItem>
      <Paper className={classes.comments}>
        <Grid container>
          <Grid item xs={3} className={classes.user}>
            <Avatar />
            <Typography variant="overline">{comment.email}</Typography>
          </Grid>
          <Grid item xs align="right">
            <h4>{capitalize(comment.name)}</h4>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
            <p>{capitalize(comment.body)}</p>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
};

export default Comment;
