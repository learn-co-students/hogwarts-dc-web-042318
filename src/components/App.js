import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogsBrowser from "./HogsBrowser";
import hogs from "../porkers_data";
import Sort from "./Sort";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Sort />
        <HogsBrowser hogs={hogs} />
        {/*<img src="images/Mudblood.jpg" />*/}
      </div>
    );
  }
}

export default App;
