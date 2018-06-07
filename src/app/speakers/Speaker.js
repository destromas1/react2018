import React, { Component } from "react";

class Speaker extends Component {

  render() {
    // return <div>{this.props.data.name}</div>;
    return <React.Fragment>{this.props.data.name}</React.Fragment>
  }
}

export default Speaker;
