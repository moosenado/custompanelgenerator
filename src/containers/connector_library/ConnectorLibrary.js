import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from './../../store';
import ScrollArea from 'react-scrollbar';

import './ConnectorLibrary.css';

class ConnectorLibrary extends Component {

	constructor() {
		super();
		this.addItemToData = this.addItemToData.bind(this);
		this.i = 0;
	}

	addItemToData(name, src, width) {
		switch(this.props.type) {
			case "small":
				store.dispatch({
					type: 'ADD_SMALL_CONNECTOR',
					id: this.i++,
					name: name,
					src: src,
					width: width,
					top: 0,
					left: 0
				});
			break;
			case "large":
				store.dispatch({
					type: 'ADD_LARGE_CONNECTOR',
					id: this.i++,
					name: name,
					src: src,
					width: width,
					top: 0,
					left: 0
				});
			break;
			default:
				return;
		}
	}

	render() {
		const {type} = this.props;

		let bnc = '/custompanel/imgs/connectors_actual/bnc_connector_actual.jpg';
		let db9 = '/custompanel/imgs/connectors_actual/db9_connector_actual.jpg';
		let hdmi = '/custompanel/imgs/connectors_actual/hdmi_connector_actual.jpg';
		let ntype = '/custompanel/imgs/connectors_actual/ntype_connector_actual.jpg';
		let power = '/custompanel/imgs/connectors_actual/power_entry_actual.jpg';
		let rj45 = '/custompanel/imgs/connectors_actual/rj45_connector_actual.jpg';
		let sma = '/custompanel/imgs/connectors_actual/sma_connector_actual.jpg';
		let tnc = '/custompanel/imgs/connectors_actual/tnc_connector_actual.jpg';
		let usb2 = '/custompanel/imgs/connectors_actual/usb2_actual.jpg';
		let usb3 = '/custompanel/imgs/connectors_actual/usb3_actual.jpg';

		let type_styles = {
			small: 'small_connectors',
			large: 'large_connectors'
		}

		let type_class = type ? type_styles[type] : '';

	    return (
	    	<ScrollArea
		    	speed={0.8}
	            className={`ConnectorLibrary ${type_class}`}
	            vertical={true}
	            horizontal={false}
	            smoothScrolling={true}
	            >

	    		<h2>Connector Library</h2>
	    		<div className="desc">
					<span className="underline">Click</span> on a connector to add it onto your custom I/O panel
	    		</div>
	    		<div className="ConnectorLibrary__list">
	    			<ul>
	    				<li onClick={() => this.addItemToData('bnc', bnc, .69)}><img src={bnc} alt="bnc" style={{width:'.69in'}}/><div className="connectortype">BNC</div></li>
	    				<li onClick={() => this.addItemToData('db9', db9, 1.21)}><img src={db9} alt="db9" style={{width:'1.21in'}}/><div className="connectortype">DB9</div></li>
	    				<li onClick={() => this.addItemToData('hdmi', hdmi, 1.02)}><img src={hdmi} alt="hdmi" style={{width:'1.02in'}}/><div className="connectortype">HDMI</div></li>
	    				<li onClick={() => this.addItemToData('ntype', ntype, 1)}><img src={ntype} alt="ntype" style={{width:'1in'}}/><div className="connectortype">NTYPE</div></li>
	    				<li onClick={() => this.addItemToData('power', power, 1.73)}><img src={power} alt="power entry" style={{width:'1.73in'}}/><div className="connectortype">POWER ENTRY</div></li>
	    				<li onClick={() => this.addItemToData('rj45', rj45, 2.34)}><img src={rj45} alt="rj45" style={{width:'2.34in'}}/><div className="connectortype">RJ45</div></li>
	    				<li onClick={() => this.addItemToData('sma', sma, .50)}><img src={sma} alt="sma" style={{width:'.50in'}}/><div className="connectortype">SMA</div></li>
	    				<li onClick={() => this.addItemToData('tnc', tnc, .69)}><img src={tnc} alt="tnc" style={{width:'.69in'}}/><div className="connectortype">TNC</div></li>
	    				<li onClick={() => this.addItemToData('usb2', usb2, 1.74)}><img src={usb2} alt="usb2" style={{width:'1.74in'}}/><div className="connectortype">USB2</div></li>
	    				<li onClick={() => this.addItemToData('usb3', usb3, 1.74)}><img src={usb3} alt="usb3" style={{width:'1.74in'}}/><div className="connectortype">USB3</div></li>
	    			</ul>
	    		</div>

	      	</ScrollArea>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        smallconnectors: state.data.smallconnectors,
        largeconnectors: state.data.largeconnectors
    };
};

export default connect(mapStateToProps)(ConnectorLibrary);
