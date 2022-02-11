const stateObj = { altitude:0, minimumLength:0 };

const filterReducer = (state = stateObj, action) => {
  switch (action.type) {
  case 'CHANGE_ALTITUDE_LIMIT':
    return {
      ...state,
      altitude:action.altitude
    };
  case 'CHANGE_LENGTH_LIMIT':
    return {
      ...state,
      minimumLength:action.minimumLength
    };
  default:
    return state;
  }
};

export const filterChangeAltitude = altitude => {
  return {
    type: 'CHANGE_ALTITUDE_LIMIT',
    altitude
  };
};


export const filterChangeLength = minimumLength => {
  return {
    type: 'CHANGE_LENGTH_LIMIT',
    minimumLength
  };
};

export default filterReducer;
