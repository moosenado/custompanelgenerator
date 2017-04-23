import React, { Component } from 'react';
import ConnectorLibrary from './../connector_library/ConnectorLibrary';
import PanelButtons from './../panel_buttons/PanelButtons';
import { connect } from 'react-redux';

import './SmallPanel.css';

class SmallPanel extends Component {

	render() {
		const {smallconnectors} = this.props;
		console.log(smallconnectors);

		let connectors_exist = smallconnectors.length > 0;

	    return (
	    	<div className="SmallPanel">
	    		<div className="SmallPanel__leftcol">
	    			<ConnectorLibrary type={'small'}/>
	    		</div>
		      	<div className="SmallPanel__rightcol">
		      		<h1>Your Custom dbSAFE I/O Panel</h1>
		      		<div className="SmallPanel__desc">You are currently working on a <span>Small</span> dbSAFE I/O Panel.</div>
		      		<div className="SmallPanel__border">
		      			<div className="SmallPanel__bolts_horiz top">
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      			</div>
		      			<div className="SmallPanel__bolts_horiz bottom">
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      			</div>
		      			<div className="SmallPanel__bolts_vert left">
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      			</div>
		      			<div className="SmallPanel__bolts_vert right">
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      				<div className="SmallPanel__bolt"></div>
		      			</div>
		      			<div className="SmallPanel__surface_centered">
		      				<div className="SmallPanel__surface">
		      					{connectors_exist ? smallconnectors[0].name : ''}
		      				</div>
		      			</div>
		      		</div>
		      		<PanelButtons />
		      	</div>
	      	</div>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        smallconnectors: state.data.smallconnectors
    };
};

export default connect(mapStateToProps)(SmallPanel);
