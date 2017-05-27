import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import AppShell from './AppShell';
import SmallPanel from './containers/small_panel/SmallPanel';
import LargePanel from './containers/large_panel/LargePanel';

const router = (
	<Provider store={store}>
	    <Router>
	    	<div>
	    		<Route component={AppShell} />
	    		<Switch>
		        	<Route exact path="/" component={App} />
		        	<Route path="/smallpanel" component={SmallPanel} />
		        	<Route path="/largepanel" component={LargePanel} />
	        	</Switch>
	        	<div className="bp-alert"></div>
	        </div>
	    </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
