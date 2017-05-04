import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_CONNECTORS':
      return action.data;
    case 'ADD_SMALL_CONNECTOR':
    let last_entry = (state.smallconnectors.length > 0) ? state.smallconnectors[state.smallconnectors.length-1] : 0;
      return {
      	...state,
        smallconnectors: [...state.smallconnectors, [...last_entry, {
        	name: action.name,
        	id: action.id,
        	src: action.src,
        	width: action.width,
        	top: action.top,
        	left: action.left
        }]]
    	}
    case 'REFRESH_SMALL_CONNECTORS':
    	return {
      		...state,
        	smallconnectors: []
    	}
    break;
    case 'EDIT_SMALL_CONNECTORS':
    	let smalls = state.smallconnectors.map(c => {
	    		if (+c.id !== +action.id) {
	    			return c;
	    		}
	    		return {
	    			...c,
	    			top: action.top,
		        	left: action.left
	    		}
	    	});
    	return {
    		...state,
    		smallconnectors: smalls
    	}
    break;
    case 'UNDO_SMALL_CONNECTORS':
    	return {
    		...state,
    		smallconenctors: state.smallconnectors.pop()
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