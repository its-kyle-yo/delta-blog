import React from "react";
import { AppBar, Typography } from "@material-ui/core";

import { Link } from "@reach/router";

const Overlay = ({ children }) => {
  return (
    <>
      <AppBar color="inherit">
        <Link to="/">
          <Typography variant="h6">Home</Typography>
        </Link>
      </AppBar>
      {children}
    </>
  );
};

export default Overlay;
