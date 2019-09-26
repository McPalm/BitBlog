import React from "react";
import "./HomeCard.css";

const HomeCard = props => {
  let layoutClass = "home-card justify-content-around d-lg-flex";
  if (props.inverse) {
    layoutClass += " d-lg-flex flex-row-reverse";
  }

  return (
    <div className={layoutClass}>
      <div className="text-center">
        <img
          className="card-image col-12 col-sm-8 col-md-6 col-lg-12 img-responsive"
          src={props.imagesrc}
          alt={props.name}
        />
      </div>
      <div className="card-body col-lg-4">
        <h3 className="card-title">{props.name}</h3>
        <p className="card-text">{props.body}</p>
        <div className="text-center">
          <p className="fake-link">read more →</p>
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
