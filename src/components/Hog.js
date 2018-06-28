import React from "react";

class Hog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    		<div className="ui card">
  <div className="content">
    <a className="header">{this.props.name}</a>
    <div className="meta">
      <span className="date">Specialty: {this.props.specialty}</span>
    </div>
    <div className="description">Greased: {this.props.greased ? "yes": "no"}
    		Weight: {this.props.weight}
    		Highest Medal Achieved: {this.props.medal}
    </div>
  </div>
  <div className="extra content">
    <a>
      <i className="user icon"></i>
    </a>
  </div>
</div>
 	);
 	 }
}

export default Hog;
