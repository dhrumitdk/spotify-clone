import React from "react";
import "./Album.css";

function Albums({ image, title, artist }) {
  return (
    <div className="album">
      <img className="album__image" src={image} alt="" />
      <h4> {title} </h4>
      <p> {artist} </p>
    </div>
  );
}

export default Albums;
