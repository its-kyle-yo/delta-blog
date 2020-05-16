import React from "react";
import { Link } from "@reach/router";

const AuthorLink = ({ author }) => (
  <Link to={`/author/${author?.id}`} state={{ author }}>
    {author?.name}
  </Link>
);

export default AuthorLink;
