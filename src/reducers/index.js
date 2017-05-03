import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_CONNECTORS':
      return action.data;
    case 'ADD_SMALL_CONNECTOR':
      return {
      	...state,
        smallconnectors: [...state.smallconnectors, {
        	name: action.name,
        	src: action.src,
        	width: action.width,
        	top: action.top,
        	left: action.left
        }]
    	}
    case 'REFRESH_SMALL_CONNECTORS':
    	return {
      	...state,
        smallconnectors: []
    	}
    break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data
});

export default rootReducer;