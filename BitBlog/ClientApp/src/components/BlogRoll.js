import React from "react";
import BlogPost from "./BlogPost";

const BlogRoll = props => {
  return (
    <div>
      <BlogPost
        title="test"
        imageurl="/default.gif"
        article="Lorem Ipsum dol ador..."
      />
      <BlogPost
        title="test"
        imageurl="/default.gif"
        article="Lorem Ipsum dol ador..."
      />
      <BlogPost
        title="test"
        imageurl="/default.gif"
        article="Lorem Ipsum dol ador..."
      />
    </div>
  );
};

export default BlogRoll;
