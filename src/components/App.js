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
      hogList: hogs,
      greased: null
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

  greased = e =>{
  	if (e.target.value === "true"){
  		console.log(e)
  		this.setState({ 
  			hogList: hogs.filter(hog=>{
  			return hog.greased.toString() === "true"	
  		}),
  			greased: e.target.value })
  	} else if (e.target.value === "false"){
  		this.setState({ 
  			hogList: hogs.filter(hog =>{
  			return hog.greased.toString() === "false"	
  		}),
  			greased: e.target.value })
  	} else {
  		this.setState({greased: null})
  	}
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Sort sortFunc={this.sortPigs} greased={this.greased}/>
        <HogsBrowser hogs={this.state.hogList} />
        {/*<img src="images/Mudblood.jpg" />*/}
      </div>
    );
  }
}

export default App;
