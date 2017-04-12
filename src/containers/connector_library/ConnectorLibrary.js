import React, { Component } from 'react';

import './ConnectorLibrary.css';

class ConnectorLibrary extends Component {

	render() {
	    return (
	    	<div className="ConnectorLibrary">
	    		<h2>Connector Library</h2>
	    		<div className="desc">
					Click on a connector to add it onto your custom I/O panel
	    		</div>
	      	</div>
	    );
	}
}

export default ConnectorLibrary;
