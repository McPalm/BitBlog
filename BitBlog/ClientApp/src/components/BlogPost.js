import React from "react";

const BlogPost = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.imageurl} alt="header" />
      <div>{props.article}</div>
    </div>
  );
};

export default BlogPost;
