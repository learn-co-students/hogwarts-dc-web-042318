import React from "react";
import Hog from "./Hog.js";

class HogsBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {console.log(this.props.hogs)}
        {this.props.hogs.map(hog => <Hog name={hog.name} />)}
      </div>
    );
  }
}

export default HogsBrowser;
