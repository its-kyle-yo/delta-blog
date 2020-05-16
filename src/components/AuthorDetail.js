import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    height: 1200,
    margin: "auto",
    padding: "1rem",
  },
});

const AuthorDetail = ({ location }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [author, setAuthor] = useState({});
  const [address, setAddress] = useState({});
  const [company, setCompany] = useState({});

  const params = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (location.state.author) {
      setAuthor(location.state.author);
      setAddress(location.state.author.address);
      setCompany(location.state.author.company);
    } else {
      setShouldRedirect(true);
    }
  }, [setAuthor, setAddress, setCompany, location]);

  if (shouldRedirect || !params?.id) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        component="img"
        alt="Contemplative Reptile"
        height="600"
        image="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {author.name}
        </Typography>
        <Paper>
          <Grid container>
            <Grid item xs={12} align="center">
              <Typography>{author.username}</Typography>
              <Typography>{author.email}</Typography>
              <Typography>{author.phone}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" />
              <Grid container align="center">
                <Grid item xs={12}>
                  <h2>Address</h2>
                </Grid>
                <Grid item xs={6}>
                  Street: <Typography>{address?.street}</Typography>
                </Grid>
                <Grid item xs={6}>
                  Suite: <Typography>{address?.suite}</Typography>
                </Grid>
                <Grid item xs={6}>
                  City: <Typography>{address?.city}</Typography>
                </Grid>
                <Grid item xs={6}>
                  Zip: <Typography>{address?.zipcode}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider variant="middle" />
              <Grid container align="center">
                <Grid item xs={12}>
                  <h2>Company</h2>
                </Grid>
                <Grid item xs={6}>
                  Name: <Typography>{company.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  Catch Phrase: <Typography>{company.catchPhrase}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default AuthorDetail;
