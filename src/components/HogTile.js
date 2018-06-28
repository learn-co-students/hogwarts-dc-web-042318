import React from "react";

const HogTile = ({ hog }) => {
  return <div>{hog.name}, {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}, {hog.greased ? "greased" : "not greased"}</div>;
};

export default HogTile;
