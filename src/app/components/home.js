import React, { Component } from 'react';
import {concatStr} from "../../core/utilities/utils";
// import {concatStr} from "Utilities/utils";

const str = "This is a string";

class Home extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>{concatStr("Yay")}</h1>
      </div>
    );
  }
}

export default Home;
