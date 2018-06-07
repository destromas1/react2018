import { SAVE_SPEAKERS } from "../action-types";

const API_SERVER = "http://localhost:9000";

export function saveSpeakers(speakers) {
  return {
    type: SAVE_SPEAKERS,
    payload: speakers
  };
}

export const getSpeakers = () => async (dispatch, getState) => {

  try {
    const response = await fetch(`${API_SERVER}/speakers`);
    const speakers = await response.json();
    console.log("speakers success", speakers);
    dispatch(saveSpeakers(speakers));
  } catch (error) {
    console.log("throwing Error", error);
    throw error;
  }

  // return fetch(`${API_SERVER}/speakers`)
  //   .then(
  //     response => response.json(),
  //     error => {
  //       console.log("No! error occured.", error);
  //       throw error;
  //     }
  //   )
  //   .then(speakers => {
  //     console.log("speakers success", speakers);
  //     dispatch(saveSpeakers(speakers));
  //   })
  //   .catch(error => {
  //     console.log("Return Error by throwing", error);
  //     throw error;
  //   });
};
