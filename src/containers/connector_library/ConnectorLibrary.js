import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import store from './../../store';
import ScrollArea from 'react-scrollbar';

import './ConnectorLibrary.css';

class ConnectorLibrary extends Component {

	constructor() {
		super();
		this.addItemToData = this.addItemToData.bind(this);
	}

	addItemToData(name, src, width) {
		console.log(this.props.type);
		store.dispatch({
			type: 'ADD_SMALL_CONNECTOR',
			name: name,
			src: src,
			width: width
		});
	}

	render() {
		const {type, smallconnectors, largeconnectors} = this.props;

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
					Click on a connector to add it onto your custom I/O panel
	    		</div>
	    		<div className="ConnectorLibrary__list">
	    			<ul>
	    				<li><img onClick={() => this.addItemToData('bnc', bnc, .69)} src={bnc} alt="bnc" style={{width:'.69in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('db9', db9, 1.21)} src={db9} alt="db9" style={{width:'1.21in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('hdmi', hdmi, 1.02)} src={hdmi} alt="hdmi" style={{width:'1.02in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('ntype', ntype, 1)} src={ntype} alt="ntype" style={{width:'1in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('power', power, 1.73)} src={power} alt="power entry" style={{width:'1.73in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('rj45', rj45, 2.34)} src={rj45} alt="rj45" style={{width:'2.34in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('sma', sma, .50)} src={sma} alt="sma" style={{width:'.50in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('tnc', tnc, .69)} src={tnc} alt="tnc" style={{width:'.69in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('usb2', usb2, 1.74)} src={usb2} alt="usb2" style={{width:'1.74in'}}/></li>
	    				<li><img onClick={() => this.addItemToData('usb3', usb3, 1.74)} src={usb3} alt="usb3" style={{width:'1.74in'}}/></li>
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
