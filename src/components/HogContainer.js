import React, { Component } from "react";
import HogTile from "./HogTile";
import FilterBar from "./FilterBar";
import hogs from "../porkers_data";

class HogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogs: hogs
    };

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort = sortTerm => {
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    const newHogs = [...hogs];
    if (sortTerm === "name") {
      newHogs.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({
        hogs: newHogs
      });
    } else {
      newHogs.sort((a, b) => {
        return a[weight] - b[weight];
      });
    }
  };

  render() {
    return (
      <div>
        <FilterBar handleSort={this.handleSort} />
        <h3>Hogs</h3>
        {this.state.hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
      </div>
    );
  }
}

export default HogContainer;
