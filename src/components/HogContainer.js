import React, { Component } from "react";
import HogTile from "./HogTile";
import FilterBar from "./FilterBar";
import hogs from "../porkers_data";

const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
class HogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogs: hogs,
      sortTerm: ""
    };

    this.handleSort = this.handleSort.bind(this);
  }

  handleSort = sortTerm => {
   let sortedHogs = sortHogs(sortTerm, this.state.hogs)
   this.setState({
     hogs: sortedHogs,
     sortTerm: sortTerm
   })
  };

  handleFilter = filterTerm => {
    let filteredHogs = filterHogs(filterTerm)
    filteredHogs = sortHogs(this.state.sortTerm, filteredHogs)
    this.setState({
      hogs: filteredHogs
    })
  };

  render() {
    return (
      <div>
        <FilterBar handleSort={this.handleSort} handleFilter={this.handleFilter}/>
        <h3>Hogs</h3>
        {this.state.hogs.map(hog => <HogTile key={hog.name} hog={hog} />)}
      </div>
    );
  }
}

function sortHogs (sortTerm, hogsState) {
  const newHogs = [...hogsState];
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
    
    } else if (sortTerm === weight) {
        newHogs.sort((a, b) => {
          if (a[weight] < b[weight]) {
            return -1;
          }
          if (a[weight] > b[weight]) {
            return 1;
          }
          return 0;
        });
      };
    return newHogs
}

function filterHogs (filterTerm) {
  const newHogs = [...hogs];

  if(filterTerm === 'greased'){
    return newHogs.filter(hog => hog.greased === true)
  } else if (filterTerm === 'both'){
    return newHogs
  } else {
    return newHogs.filter(hog => hog.greased === false)
  }
}

export default HogContainer;
