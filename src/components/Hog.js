import React from "react";

class Hog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleClick = e => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.image_path} />
        </div>
        <div className="content">
          <a className="header">{this.props.name}</a>
          <div>
            <div className="ui styled accordion">
              <div className="active title" onClick={this.handleClick}>
                <i className="dropdown icon" />
                Find out more about this hog!
              </div>
              <div
                className={this.state.active ? "active content" : "content"}
                onClick={this.props.toggleHogDetails}
              >
                <div className="description">
                  Specialty: {this.props.specialty} <br />
                  Weight: {this.props.weight} <br />
                  Highest Medal Achieved: {this.props.medal}
                </div>
                <div className="extra content">
                  Greased: {this.props.greased ? "yes" : "no"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hog;
