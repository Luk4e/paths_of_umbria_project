import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import pathReducer from './reducers/pathReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  paths: pathReducer,
  filterParams: filterReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;
