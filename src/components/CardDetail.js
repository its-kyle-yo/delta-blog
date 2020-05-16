import React, { useState, useEffect } from "react";
import { Link, Redirect, useParams } from "@reach/router";
import { Divider, Grid, Paper, List, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Comment from "./Comment";
import api from "../helpers/api";
import AuthorLink from "./AuthorLink";

const styles = makeStyles({
  container: {
    margin: "1rem",
    maxWidth: "100%",
  },
  post: {
    padding: "1rem",
    height: "100%",
  },
  button: {
    marginTop: 5,
    height: "5%",
    width: "100%",
  },
  content: {
    height: "100%",
    maxHeight: "100%",
    margin: ".25rem",
    padding: "1.5rem",
  },
  comments: {},
});

const PostDetail = ({ location }) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const classes = styles();
  const params = useParams();

  useEffect(() => {
    const initData = async () => {
      let foundComments;
      const postFromNav = location.state.post;
      if (localStorage.getItem(`comments-${postFromNav.id}`)) {
        foundComments = JSON.parse(
          localStorage.getItem(`comments-${postFromNav.id}`)
        );
      } else {
        foundComments = await api.get.comments(postFromNav.id);
        localStorage.setItem(
          `comments-${postFromNav.id}`,
          JSON.stringify(foundComments)
        );
      }
      setComments(foundComments);
    };

    if (location?.state?.post) {
      setPost(location.state.post);
      initData();
    } else {
      setShouldRedirect(true);
    }
  }, [setPost, location]);

  if (shouldRedirect || !params?.id) {
    return <Redirect to="/" noThrow />;
  }

  return (
    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={6}>
        <Paper className={classes.post}>
          <Grid container>
            <Grid item xs={12}>
              <h1>{post.title}</h1>
              <br />
              <h4>
                By: <AuthorLink author={post?.author} />
              </h4>
              <Divider variant="middle" />
            </Grid>
            <Grid item xs>
              <Paper className={classes.content}>
                <p>{post.body}</p>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.comments}>
          <List>
            {comments?.map((comment) => (
              <Comment
                comment={comment}
                key={`comment-${comment.id}-${comment.userId}`}
              />
            ))}
          </List>
        </Paper>
        <Link to="../">
          <Button variant="contained" className={classes.button}>
            Go Back
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default PostDetail;
