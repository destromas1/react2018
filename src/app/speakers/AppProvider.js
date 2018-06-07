import React, { Component } from "react";
import speakers from "./data";

export const AppContext = React.createContext();

class AppProvider extends Component {

  constructor() {
    super();
    this.state= {
      speakers: speakers
    };
    this.removeSpeaker = this.removeSpeaker.bind(this);
  }

  removeSpeaker(id) {
    const speakers = this.state.speakers.filter((speaker) => {
      return speaker.id !== id;
    });
    this.setState({speakers});
  }

  render() {
    return (
      <AppContext.Provider value={{state: this.state, removeSpeaker: this.removeSpeaker}}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
