import pathsService from '../Services/paths';

const initialState = {
  pathsList:[],
  isLoading:true
};

const pathReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'INIT_PATHS':
    return { pathsList:action.data, isFetcing:action.isLoading };
  default:
    return state;
  }
};

export const initializePaths = () => {
  return async dispatch => {
    const paths = await pathsService.getAll();
    dispatch({
      type: 'INIT_PATHS',
      data: paths,
      isLoading:false
    });
  };
};

export default pathReducer;
