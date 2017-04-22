import React, { Component } from 'react';
import ConnectorLibrary from './../connector_library/ConnectorLibrary';
import PanelButtons from './../panel_buttons/PanelButtons';
import Draggabilly from 'draggabilly';

import './LargePanel.css';

class LargePanel extends Component {

	// componentDidMount() {
	// 	var draggableElems = document.querySelectorAll('.drag');

	// 	console.log(draggableElems);

	// 	var draggie = new Draggabilly(draggableElems[0], {
	//     // options...
	//   });
	// }

	render() {
	    return (
	    	<div className="LargePanel">
	    		<div className="LargePanel__leftcol">
	    			<ConnectorLibrary type={'large'}/>
	    		</div>
		      	<div className="LargePanel__rightcol">
		      		<h1>Your Custom dbSAFE I/O Panel</h1>
		      		<div className="LargePanel__desc">You are currently working on a <span>Large</span> dbSAFE I/O Panel.</div>
		      		<div className="LargePanel__border">
		      			<div className="LargePanel__bolts_horiz top">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__bolts_horiz bottom">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__bolts_vert left">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__bolts_vert right">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__surface_centered">
		      				<div className="LargePanel__surface">
		      				</div>
		      			</div>
		      		</div>
		      		<PanelButtons />
		      	</div>
	      	</div>
	    );
	}
}

export default LargePanel;
