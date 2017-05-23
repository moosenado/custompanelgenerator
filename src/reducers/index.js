import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_CONNECTORS':
    	return action.data;

    //SMALL CONNECTORS

    case 'ADD_SMALL_CONNECTOR':
    	let last_entry_small = (state.smallconnectors.length > 0) ? state.smallconnectors[state.smallconnectors.length-1] : 0;
      	return {
      		...state,
        	smallconnectors: [...state.smallconnectors, [...last_entry_small, {
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
    case 'EDIT_SMALL_CONNECTORS':
    	let last_edit_small = (state.smallconnectors.length > 0) ? state.smallconnectors[state.smallconnectors.length-1] : state.smallconnectors[0];
    	let last_edited_small = last_edit_small.map(c => {
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
        	smallconnectors: [...state.smallconnectors, last_edited_small]
    	}
    case 'UNDO_SMALL_CONNECTORS':
   		state.smallconnectors.pop();
    	return {
    		...state,
    		smallconnectors: state.smallconnectors
    	}
    

    //LARGE CONNECTORS

    case 'ADD_LARGE_CONNECTOR':
    	let last_entry_large = (state.largeconnectors.length > 0) ? state.largeconnectors[state.largeconnectors.length-1] : 0;
      	return {
      		...state,
        	largeconnectors: [...state.largeconnectors, [...last_entry_large, {
        		name: action.name,
        		id: action.id,
        		src: action.src,
        		width: action.width,
        		top: action.top,
        		left: action.left
        	}]]
    	}
    case 'REFRESH_LARGE_CONNECTORS':
    	return {
      		...state,
        	largeconnectors: []
    	}
    case 'EDIT_LARGE_CONNECTORS':
    	let last_edit_large = (state.largeconnectors.length > 0) ? state.largeconnectors[state.largeconnectors.length-1] : state.largeconnectors[0];
    	let last_edited_large = last_edit_large.map(c => {
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
        	largeconnectors: [...state.largeconnectors, last_edited_large]
    	}
    case 'UNDO_LARGE_CONNECTORS':
   		state.largeconnectors.pop();
    	return {
    		...state,
    		largeconnectors: state.largeconnectors
    	}
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data
});

export default rootReducer;