const stateObj = {
  altitude_min:'',
  altitude_max:'',
  length_min: '',
  length_max:'',
  multipleParkName:[],
  multipleDifficultLevel:[],
  loopAllYesNo: 'tutti',
  searchWord: '',
  switchmaplist: true,
};

const filterReducer = (state = stateObj, action) => {
  switch (action.type) {
  case 'CHANGE_ALTITUDE_MIN':
    return {
      ...state,
      altitude_min:action.altitude_min
    };
  case 'CHANGE_ALTITUDE_MAX':
    return {
      ...state,
      altitude_max:action.altitude_max
    };
  case 'CHANGE_LENGTH_MIN':
    return {
      ...state,
      length_min:action.length_min
    };
  case 'CHANGE_LENGTH_MAX':
    return {
      ...state,
      length_max:action.length_max
    };
  case 'CHANGE_SELECTED_MULTIPLE_PARK':
    return {
      ...state,
      multipleParkName:action.multipleParkName
    };
  case 'CHANGE_SELECTED_MULTIPLE_DIFFICULT':
    return {
      ...state,
      multipleDifficultLevel:action.multipleDifficultLevel
    };
  case 'CHANGE_SELECTED_LOOP':
    return {
      ...state,
      loopAllYesNo:action.loopAllYesNo
    };
  case 'CHANGE_SEARCH_WORD':
    return {
      ...state,
      searchWord:action.searchWord
    };
  case 'SWITCH_LIST_MAP':
    return {
      ...state,
      switchmaplist:action.switchmaplist
    };
  default:
    return state;
  }
};

export const filterChangeAltitudeMax = altitude_max => {
  return {
    type: 'CHANGE_ALTITUDE_MAX',
    altitude_max
  };
};
export const filterChangeAltitudeMin = altitude_min => {
  return {
    type: 'CHANGE_ALTITUDE_MIN',
    altitude_min
  };
};
export const filterChangeParkMultiple = multipleParkName => {
  return {
    type: 'CHANGE_SELECTED_MULTIPLE_PARK',
    multipleParkName
  };
};
export const filterChangeDifficultMultiple = multipleDifficultLevel => {
  return {
    type: 'CHANGE_SELECTED_MULTIPLE_DIFFICULT',
    multipleDifficultLevel
  };
};
export const filterChangeLengthMax = length_max => {
  return {
    type: 'CHANGE_LENGTH_MAX',
    length_max
  };
};
export const filterChangeLengthMin = length_min => {
  return {
    type: 'CHANGE_LENGTH_MIN',
    length_min
  };
};
export const filterChangeLoop = loopAllYesNo => {
  return {
    type: 'CHANGE_SELECTED_LOOP',
    loopAllYesNo
  };
};
export const filterChangeSearchWord = searchWord => {
  return {
    type: 'CHANGE_SEARCH_WORD',
    searchWord
  };
};
export const switchlistmapview = switchmaplist => {
  return {
    type: 'SWITCH_LIST_MAP',
    switchmaplist
  };
};

export default filterReducer;
