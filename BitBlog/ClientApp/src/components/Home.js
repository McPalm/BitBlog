import React, { Component } from "react";
import HomeCard from "./HomeCard";
import CardSequence from "./CardSequence";

export class Home extends Component {
  static displayName = Home.name;

  state = {};
  constructor(props) {
    super(props);
    this.state = { cards: [], loading: true };
    fetch('api/Home/FrontpageEntries')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ cards: data, loading: false });
      });
  }

  render() {
    const cards = [];
    this.state.cards.map((entry, index) => {
      cards.push(
        <HomeCard
          name={entry.name}
          imagesrc={entry.imageSource}
          body={entry.body}
          inverse={index%2 === 1}
        />
      )
    });

    return (
      <div className="pb-5">
        <CardSequence cards={cards} />
      </div>
    );
  }
}
