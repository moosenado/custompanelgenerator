import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import SmallPanel from './containers/small_panel/SmallPanel';
import LargePanel from './containers/large_panel/LargePanel';

const router = (
	<Provider store={store}>
	    <Router>
	    	<div>
	        	<Route exact path="/" component={App} />
	        	<Route path="/smallpanel" component={SmallPanel} />
	        	<Route path="/largepanel" component={LargePanel} />
	        </div>
	    </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
