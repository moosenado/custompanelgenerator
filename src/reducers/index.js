import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_CONNECTORS':
      return action.data;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ 
  data
});

export default rootReducer;