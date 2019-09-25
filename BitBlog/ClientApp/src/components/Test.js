import React, { Component } from "react";
import HomeCard from "./HomeCard";

export class Test extends Component {
  state = {};
  render() {
    const bawx = <div class="d-none d-lg-block" style={{ height: "20vh" }} />;
    return (
      <div>
        <HomeCard
          name="Card 1"
          imagesrc="/default.gif"
          body="Remove rows or columns by specifying label names and corresponding axis, or by specifying directly index or column names. When using a multi-index, labels on different levels can be removed by specifying the level."
        />
        {bawx}
        <HomeCard
          name="Card 2"
          imagesrc="/default.gif"
          body="here is some text for you"
          inverse="true"
        />
        {bawx}
        <HomeCard
          name="Card 3"
          imagesrc="/default.gif"
          body="here is some text for you"
        />
        {bawx}
        <HomeCard
          name="Card 4"
          imagesrc="/default.gif"
          body="here is some text for you"
          inverse="true"
        />
      </div>
    );
  }
}
