import { client } from "./client";
import { capitalize } from "./capitalize";

class Api {
  get = {
    async posts() {
      const posts = await client(`posts`);
      const formattedPosts = posts.map((post) => ({
        ...post,
        title: capitalize(post.title),
        body: capitalize(post.body),
      }));

      console.log({ formattedPosts });
      return formattedPosts;
    },

    async users() {
      const users = await client(`users`);
      return users;
    },

    async comments(postID) {
      const postComments = await client(`posts/${postID}/comments`);
      return postComments;
    },
  };
}

export default new Api();
