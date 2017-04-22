import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();
let middleware = [thunkMiddleware,loggerMiddleware];

let store = createStore(
  rootReducer,
  applyMiddleware(middleware)
);

export default store;