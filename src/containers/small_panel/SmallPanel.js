import React, { Component } from 'react';
import ConnectorLibrary from './../connector_library/ConnectorLibrary';
import PanelButtons from './../panel_buttons/PanelButtons';

import './SmallPanel.css';

class SmallPanel extends Component {

	constructor() {
		super();
		this.state = {

		}
	}

	render() {
	    return (
	    	<div className="SmallPanel">
	    		<div className="SmallPanel__leftcol">
	    			<ConnectorLibrary />
	    		</div>
		      	<div className="SmallPanel__rightcol">
		      		<h1>Your Custom dbSAFE I/O Panel</h1>
		      		<div className="SmallPanel__desc">You are currently working on a <span>Small</span> dbSAFE I/O Panel.</div>
		      		<div className="SmallPanel__border">
		      			<div className="SmallPanel__surface_centered">
		      				<div className="SmallPanel__surface">
		      				</div>
		      			</div>
		      		</div>
		      		<PanelButtons />
		      	</div>
	      	</div>
	    );
	}
}

export default SmallPanel;
