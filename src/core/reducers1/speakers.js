import { SAVE_SPEAKERS } from "../action-types";

const initialState = {
  list: []
};

function loadSpeakers(state, data) {
  return {
    ...state,
    list: [...data]
  };
}

function speakers(state = initialState, action) {
  switch (action.type) {
    case SAVE_SPEAKERS:
      return loadSpeakers(state, action.payload);
    default: {
      return state;
    }
  }
}

export default speakers;
