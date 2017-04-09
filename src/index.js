import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SmallPanel from './containers/small_panel/SmallPanel';

const router = (
    <Router>
    	<div>
        	<Route exact path="/" component={App} />
        	<Route path="/smallpanel" component={SmallPanel} />
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));
