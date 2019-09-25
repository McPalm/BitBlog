import React from "react";
import "./HomeCard.css";

const HomeCard = props => {
  let layoutClass = "home-card my-5 justify-content-around d-lg-flex";
  if (props.inverse) {
    layoutClass += " d-lg-flex flex-row-reverse";
  }

  return (
    <div className={layoutClass}>
      <div class="text-center">
        <img
          class="card-image col-12 col-sm-8 col-md-6 col-lg-12 img-responsive"
          src={props.imagesrc}
          alt={props.name}
        />
      </div>
      <div class="card-body col-lg-4">
        <h3 class="card-title">{props.name}</h3>
        <p class="card-text">{props.body}</p>
        <div class="text-center">
          <p class="fake-link">read more →</p>
        </div>
      </div>
    </div>
  );
};
export default HomeCard;
