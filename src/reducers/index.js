import { combineReducers } from 'redux';

const initConnectors = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_CONNECTORS':
      return action.smallconnectors;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ 
  initConnectors
});

export default rootReducer;