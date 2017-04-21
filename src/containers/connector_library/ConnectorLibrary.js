import React, { Component } from 'react';
import bnc from './../../../public/imgs/connectors_actual/bnc_connector_actual.jpg';
import db9 from './../../../public/imgs/connectors_actual/db9_connector_actual.jpg';
import hdmi from './../../../public/imgs/connectors_actual/hdmi_connector_actual.jpg';
import ntype from './../../../public/imgs/connectors_actual/ntype_connector_actual.jpg';
import power from './../../../public/imgs/connectors_actual/power_entry_actual.jpg';
import rj45 from './../../../public/imgs/connectors_actual/rj45_connector_actual.jpg';
import sma from './../../../public/imgs/connectors_actual/sma_connector_actual.jpg';
import tnc from './../../../public/imgs/connectors_actual/tnc_connector_actual.jpg';
import usb2 from './../../../public/imgs/connectors_actual/usb2_actual.jpg';
import usb3 from './../../../public/imgs/connectors_actual/usb3_actual.jpg';

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
	    				<li><img src={power} alt="power entry"/></li>
	    				<li><img src={rj45} alt="rj45"/></li>
	    				<li><img src={sma} alt="sma"/></li>
	    				<li><img src={tnc} alt="tnc"/></li>
	    				<li><img src={usb2} alt="usb2"/></li>
	    				<li><img src={usb3} alt="usb3"/></li>
	    			</ul>
	    		</div>
	      	</div>
	    );
	}
}

export default ConnectorLibrary;
