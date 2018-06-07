import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header";
import Speaker from "./Speaker";
import { AppContext } from "./AppProvider";

class SpeakerList extends Component {

  render() {
    return (
      <div>
        <AppContext.Consumer>
          {(context) => {
            const elements =
              context.state.speakers.map((speaker, i) => {
                return (
                  <div key={speaker.id}>
                    <Speaker data={speaker} />
                    <button onClick={()=> context.removeSpeaker(speaker.id)} >Delete me!</button> 
                  </div>
                );
              });

             return elements;
            }
          }
        </AppContext.Consumer>
      </div>
    );
  }
}

export default SpeakerList;
