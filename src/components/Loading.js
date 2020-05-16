import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

const Loading = () => {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <Grid item alignItems="center">
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
