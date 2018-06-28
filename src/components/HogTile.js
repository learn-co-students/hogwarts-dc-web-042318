import React from "react";
import HogDetails from "./HogDetails";

class HogTile extends React.Component {
  constructor() {
    super();
    this.state = {
      details: false
    };
  }

  handleClick = () => {
    this.state.details
      ? this.setState({ details: false })
      : this.setState({ details: true });
  };

  render() {
    return (
      <div style={{ marginTop: 14 }} className="column ui card">
        <img
          src={`./hog-imgs/${this.props.hog.name.split(" ").join("_")}.jpg`}
          alt={this.props.hog.name}
        />
        <h3>{this.props.hog.name}</h3>
        <button onClick={this.handleClick}>Show Details</button>
        <div>
          {this.state.details ? <HogDetails hog={this.props.hog} /> : null}
        </div>
      </div>
    );
  }
}

export default HogTile;

// const HogTile = ({ hog }) => {
//   return (
//     <div style={{ marginTop: 14 }} className="column ui card">
//       <img
//         src={`./hog-imgs/${hog.name.split(" ").join("_")}.jpg`}
//         alt={hog.name}
//       />
//       <h3>{hog.name}</h3>
//       <button onClick={console.log(hog)}>Show Details</button>
//       <div>
//         <HogDetails hog={hog} />
//       </div>
//     </div>
//   );
// };
