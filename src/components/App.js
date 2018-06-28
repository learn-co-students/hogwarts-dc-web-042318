import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsBrowser from "./HogsBrowser";
import hogs from "../porkers_data";
import Sort from "./Sort";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOption: "",
      hogList: hogs
    };
  }

  sortPigs = e => {
    if (e.target.value === "name") {
      this.setState({
        sortOption: e.target.value,
        hogList: hogs.sort(function(a, b) {
          return a.name.localeCompare(b.name);
        })
      });
    } else {
      this.setState({
        sortOption: e.target.value,
        hogList: hogs.sort(function(a, b) {
          return b.weight - a.weight;
        })
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Sort sortFunc={this.sortPigs} />
        <HogsBrowser hogs={this.state.hogList} />
        {/*<img src="images/Mudblood.jpg" />*/}
      </div>
    );
  }
}

export default App;
