import React, { Component } from "react";
import BlogPost from "./BlogPost";
import "./BlogRoll.css";
export default class BlogRoll extends Component {

  state = {};

  constructor(props) {
    super(props);
    this.state = { posts: [] }
    fetch('api/Home/BlogPosts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      });
  }

  render() {
    const entries = [];
    this.state.posts.map(post => {
      entries.push(
        <BlogPost
          title={post.title}
          imageurl={post.imageUrl}
          article={post.article}
        />
      )
    });

    return (
      <div className="blog-roll p-5">
        {entries}
      </div>
    );
  }
}
