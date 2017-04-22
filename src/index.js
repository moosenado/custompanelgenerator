import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SmallPanel from './containers/small_panel/SmallPanel';
import LargePanel from './containers/large_panel/LargePanel';

const router = (
    <Router>
    	<div>
        	<Route exact path="/" component={App} />
        	<Route path="/smallpanel" component={SmallPanel} />
        	<Route path="/largepanel" component={LargePanel} />
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));
