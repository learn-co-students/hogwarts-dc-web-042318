import React from "react";

const Hog = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.image_path} />
      </div>
      <div className="content">
        <a className="header">{props.name}</a>
        <div className="meta">
          <span className="date">{props.specialty}</span>
        </div>
        <div className="description">
          Weight: {props.weight} <br />
          Highest Medal Achieved: {props.medal}
        </div>
      </div>
      <div className="extra content">
        Greased: {props.greased ? "yes" : "no"}
      </div>
    </div>
  );
};

export default Hog;
