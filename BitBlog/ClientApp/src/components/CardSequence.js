import React from "react";
import HomeCard from "./HomeCard";

const CardSequence = props => {
  const { cards } = props;
  const disp = [];
  for (let i = 0; i < cards.length; i++) {
    if (i > 0) {
      disp.push(
        <div className="d-none d-lg-block" style={{ height: "20vh" }} />
      );
    }
    disp.push(cards[i]);
  }
  return <div>{disp}</div>;
};
export default CardSequence;
