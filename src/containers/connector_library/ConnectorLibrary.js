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
			case "medium":
				store.dispatch({
					type: 'ADD_MEDIUM_CONNECTOR',
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
		let locate = window.location.href.split("/");
		let location_test = (locate[3] === 'custompanel') ? '/custompanel' : '';
		let url = location_test + "/imgs/connectors_actual/";

		let bnc = url + 'bnc_connector_actual.jpg';
		let db9 = url + 'db9_connector_actual.jpg';
		let hdmi = url + 'hdmi_connector_actual.jpg';
		let ntype = url + 'ntype_connector_actual.jpg';
		let rj45 = url + 'rj45_connector_actual.jpg';
		let sma = url + 'sma_connector_actual.jpg';
		let tnc = url + 'tnc_connector_actual.jpg';
		let usb2 = url + 'usb2_actual.jpg';
		let usb3 = url + 'usb3_actual.jpg';
		let ac = url + 'ac_housing_actual.jpg';
		let dc = url + 'dc_module_actual.jpg';
		let db15 = url + 'db15_connector_actual.jpg';
		let db25 = url + 'db25_connector_actual.jpg';

		let type_styles = {
			small: 'small_connectors',
			medium: 'medium_connectors',
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
	    			<div className="title">Power</div>
	    			<ul>
	    				<li onClick={() => this.addItemToData('ac', ac, 2.40)}><img src={ac} alt="ac" style={{width:'2.40in'}}/><div className="connectortype">AC Housing</div></li>
	    				<li onClick={() => this.addItemToData('dc', dc, 2.125)}><img src={dc} alt="dc" style={{width:'2.125in'}}/><div className="connectortype">DC Module</div></li>
	    			</ul>
	    			<div className="title">RF Connections</div>
	    			<ul>
	    				<li onClick={() => this.addItemToData('ntype', ntype, 1)}><img src={ntype} alt="ntype" style={{width:'1in'}}/><div className="connectortype">NTYPE</div></li>
	    				<li onClick={() => this.addItemToData('sma', sma, .50)}><img src={sma} alt="sma" style={{width:'.50in'}}/><div className="connectortype">SMA</div></li>
	    				<li onClick={() => this.addItemToData('tnc', tnc, .69)}><img src={tnc} alt="tnc" style={{width:'.69in'}}/><div className="connectortype">TNC</div></li>
	    				<li onClick={() => this.addItemToData('bnc', bnc, .69)}><img src={bnc} alt="bnc" style={{width:'.69in'}}/><div className="connectortype">BNC</div></li>
	    			</ul>
	    			<div className="title">Data</div>
	    			<ul>
	    				<li onClick={() => this.addItemToData('hdmi', hdmi, 1.02)}><img src={hdmi} alt="hdmi" style={{width:'1.02in'}}/><div className="connectortype">HDMI</div></li>
	    				<li onClick={() => this.addItemToData('rj45', rj45, 3.25)}><img src={rj45} alt="rj45" style={{width:'3.25in'}}/><div className="connectortype">RJ45</div></li>
	    				<li onClick={() => this.addItemToData('usb2', usb2, 1.74)}><img src={usb2} alt="usb2" style={{width:'1.74in'}}/><div className="connectortype">USB2</div></li>
	    				<li onClick={() => this.addItemToData('usb3', usb3, 1.74)}><img src={usb3} alt="usb3" style={{width:'1.74in'}}/><div className="connectortype">USB3</div></li>
	    			</ul>
	    			<div className="title">D-Sub Connections</div>
	    			<ul>
	    				<li onClick={() => this.addItemToData('db9', db9, 1.21)}><img src={db9} alt="db9" style={{width:'1.21in'}}/><div className="connectortype">DB9</div></li>
	    				<li onClick={() => this.addItemToData('db15', db15, 1.55)}><img src={db15} alt="db15" style={{width:'1.55in'}}/><div className="connectortype">DB15</div></li>
	    				<li onClick={() => this.addItemToData('db25', db25, 2.10)}><img src={db25} alt="db25" style={{width:'2.10in'}}/><div className="connectortype">DB25</div></li>
	    			</ul>
	    		</div>

	      	</ScrollArea>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        smallconnectors: state.data.smallconnectors,
        mediumconnectors: state.data.mediumconnectors,
        largeconnectors: state.data.largeconnectors
    };
};

export default connect(mapStateToProps)(ConnectorLibrary);
