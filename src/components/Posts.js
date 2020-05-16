import React from "react";
import { Grid } from "@material-ui/core";

const Posts = ({ cards }) => {
  return (
    <Grid container direction="row" justify="space-evenly">
      {cards}
    </Grid>
  );
};

export default Posts;
