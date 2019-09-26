import React, { Component } from "react";
import HomeCard from "./HomeCard";
import CardSequence from "./CardSequence";

export class Home extends Component {
  static displayName = Home.name;

  state = {};
  render() {
    const cards = [];
    cards.push(
      <HomeCard
        name="Card 1"
        imagesrc="/default.gif"
        body="Remove rows or columns by specifying label names and corresponding axis, or by specifying directly index or column names. When using a multi-index, labels on different levels can be removed by specifying the level."
      />
    );
    cards.push(
      <HomeCard
        name="Card 2"
        imagesrc="/default.gif"
        body="here is some text for you"
        inverse="true"
      />
    );
    cards.push(
      <HomeCard
        name="Card 3"
        imagesrc="/default.gif"
        body="here is some text for you"
      />
    );
    cards.push(
      <HomeCard
        name="Card 4"
        imagesrc="/default.gif"
        body="here is some text for you"
        inverse="true"
      />
    );

    return (
      <div>
        <CardSequence cards={cards} />
      </div>
    );
  }
}
