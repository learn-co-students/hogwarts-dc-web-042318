import React from "react";

class Hog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="ui card">
    <div class="image">
       <img src="{this.props.image}" />
      </div>
  <div className="content"><a className="header">{this.props.name}</a>
    <div className="meta">
      <span className="date">{this.props.specialty}</span>
    </div>
    <div className="description">
    		Weight: {this.props.weight}	<br />
    		Highest Medal Achieved: {this.props.medal}
    </div>
  </div>
  <div className="extra content">
  Greased: {this.props.greased ? "yes": "no"}
  </div>
</div>
 	);
 	 }
}

export default Hog;
