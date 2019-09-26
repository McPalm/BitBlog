import React from "react";

const CardSequence = props => {
  const { cards } = props;
  const withBreaks = [];
  if (cards) {
    for (let i = 0; i < cards.length; i++) {
      if (i > 0) {
        withBreaks.push(
          <div className="d-none d-lg-block" style={{ height: "20vh" }} />
        );
      }
      withBreaks.push(cards[i]);
    }
  }
  const disp = withBreaks.map((item, index) => <div key={index}>{item}</div>);
  return <div>{disp}</div>;
};
export default CardSequence;
