import React, { Component } from "react";
import SpeakerList from "./SpeakerList";
import Header from "../components/header";
import ErrorBoundary from "../ErrorBoundary";
import Speaker from "./Speaker";
import AppProvider from "./AppProvider";

class SpeakerPage extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <Header />
          <h1>Today's Speakers</h1>
          <ErrorBoundary>
            <SpeakerList />
          </ErrorBoundary>
        </div>
      </AppProvider>
    );
  }
}



export default SpeakerPage;
