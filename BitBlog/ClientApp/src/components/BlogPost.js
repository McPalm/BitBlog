import React from "react";

const BlogPost = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <span>2019-11-43</span>
      <div
        style={{
          backgroundImage: "url(" + props.imageurl + ")",
          height: "20vh",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      />
      <div className="mt-5">{props.article}</div>
    </div>
  );
};

export default BlogPost;
