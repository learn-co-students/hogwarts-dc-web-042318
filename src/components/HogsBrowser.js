import React from "react";
import Hog from "./Hog.js";

class HogsBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui three column grid">
        <br />
        {this.props.hogs.map(hog => (
          <Hog
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog.medal}
            image_path={hog.image_path}
          />
        ))}
      </div>
    );
  }
}

export default HogsBrowser;
