import React, { Component } from 'react';
import bnc from './../../../public/imgs/connectors_actual/bnc_connector_actual.jpg';
import db9 from './../../../public/imgs/connectors_actual/db9_connector_actual.jpg';
import hdmi from './../../../public/imgs/connectors_actual/hdmi_connector_actual.jpg';
import ntype from './../../../public/imgs/connectors_actual/ntype_connector_actual.jpg';

import './ConnectorLibrary.css';

class ConnectorLibrary extends Component {

	render() {
	    return (
	    	<div className="ConnectorLibrary">
	    		<h2>Connector Library</h2>
	    		<div className="desc">
					Click on a connector to add it onto your custom I/O panel
	    		</div>
	    		<div className="ConnectorLibrary__list">
	    			<ul>
	    				<li><img src={bnc} alt="bnc"/></li>
	    				<li><img src={db9} alt="db9"/></li>
	    				<li><img src={hdmi} alt="hdmi"/></li>
	    				<li><img src={ntype} alt="ntype"/></li>
	    			</ul>
	    		</div>
	      	</div>
	    );
	}
}

export default ConnectorLibrary;
