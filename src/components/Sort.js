import React from "react";

class Sort extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui borderless main menu">
        <div className="field item">
          <select className="ui fluid dropdown" onChange={this.props.sortFunc}>
            <option value="" disabled selected>
              Sort Pigs!
            </option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div className="inline field item">
          <div className="ui toggle checkbox">
            <label>Greased?</label>
            <input type="checkbox" tabindex="0" class="hidden" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
