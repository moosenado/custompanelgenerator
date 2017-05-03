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
        	id: action.id,
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
    case 'EDIT_SMALL_CONNECTORS':
    	let smalls = state.smallconnectors.map(c => {
	    		if (+c.id !== +action.id) {
	    			return c;
	    		}
	    		console.log(c.id + ' ' + action.id);
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
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data
});

export default rootReducer;