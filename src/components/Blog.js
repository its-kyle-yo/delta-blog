import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "../css/index.css";
import Posts from "./Posts";
import Loading from "./Loading";
import PostDetail from "./CardDetail";
import PostCard from "./PostCard";
import api from "../helpers/api";
import AuthorDetail from "./AuthorDetail";
import Overlay from "./Overlay";

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const grabInitialData = async () => {
      setLoading(true);
      let localPosts;

      if (localStorage.getItem("posts")) {
        localPosts = JSON.parse(localStorage.getItem("posts"));
      } else {
        const users = await api.get.users();
        const foundPosts = await api.get.posts();
        localPosts = foundPosts.map((post) => ({
          ...post,
          author: users.find((user) => user.id === post.userId),
        }));

        localStorage.setItem("posts", JSON.stringify(localPosts));
      }

      const postNodes = localPosts.map((post) => (
        <PostCard post={post} key={`post-${post.id}-${post.userId}`} />
      ));

      setPosts(postNodes);
    };

    grabInitialData();
    setLoading(false);
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router height="100%">
      <Overlay path="/">
        <Posts cards={posts} path="/" default />
        <PostDetail path="/post/:id" />
        <AuthorDetail path="/author/:id" />
      </Overlay>
    </Router>
  );
};

export default Blog;
