import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid, CardActionArea, Divider } from "@material-ui/core";
import { Link } from "@reach/router";
import { capitalize } from "../helpers/capitalize";
import Loading from "./Loading";
import AuthorLink from "./AuthorLink";

const styles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 300,
    height: 350,
    width: 300,
    margin: ".5rem",
  },
  title: {
    fontSize: 24,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  content: {
    marginTop: 10,
    fontSize: 14,
  },
  author: {
    marginTop: 10,
    marginBottom: 5,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostCard = ({ post, loading }) => {
  const classes = styles();
  const { title, body, id, author } = post;

  return (
    <Grid item>
      <CardActionArea>
        <Card className={classes.root}>
          <CardContent>
            {loading ? (
              <Loading />
            ) : (
              <>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    className={classes.title}
                    variant="h6"
                  >
                    {title}
                  </Typography>
                  <Divider variant="middle" />
                </Grid>
                <Grid item xs>
                  <Grid item xs>
                    <Avatar
                      className={classes.author}
                      src="https://api.adorable.io/avatars/220/abott@adorable.png"
                    />
                  </Grid>
                  <Grid item xs>
                    By: <AuthorLink author={author} />
                  </Grid>
                </Grid>
                <Link to={`/post/${id}`} state={{ post }}>
                  <Grid item xs>
                    <Typography className={classes.content}>
                      {capitalize(body)}
                    </Typography>
                  </Grid>
                </Link>
              </>
            )}
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
