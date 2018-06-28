import React from "react";
import Hog from "./Hog.js";

const HogsBrowser = props => {
  return (
    <div className="ui three column grid">
      <br />
      {props.hogs.map(hog => (
        <div className="ui card" key={hog.name + hog.weight}>
          <Hog
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog.medal}
            image_path={hog.image_path}
          />
        </div>
      ))}
    </div>
  );
};

export default HogsBrowser;
