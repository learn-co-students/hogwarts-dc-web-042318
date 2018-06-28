import React, { Component } from "react";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form>
          Sort By:
          <select onChange={e => this.props.handleSort(e.target.value)} defaultValue="" >
            <option value="" disabled> </option>
            <option value="name">name</option>
            <option value="weight">weight</option>
          </select>
          <br />
          Filter:
          <select onChange={e => this.props.handleFilter(e.target.value)} defaultValue="both">
            <option value="both">both</option>
            <option value="greased">greased</option>
            <option value="not greased">not greased</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterBar;
