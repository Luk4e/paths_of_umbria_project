import pathsService from '../Services/paths';

const pathReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_PATHS':
    return action.data;
  default:
    return state;
  }
};

export const initializePaths = () => {
  return async dispatch => {
    const paths = await pathsService.getAll();
    dispatch({
      type: 'INIT_PATHS',
      data: paths
    });
  };
};

export default pathReducer;
