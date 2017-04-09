import React, { Component } from 'react';
import PanelDropdown from './PanelDropdown';

import './PanelChoice.css';

class PanelChoice extends Component {

	constructor() {
		super();
		this.dropMenu = this.dropMenu.bind(this); 
	}

	dropMenu() {
		alert('hi');
	}

	render() {
	    return (
	      	<div className="PanelChoice">

	      		<div className="PanelChoice__title">
	      			<h2>Create your custom dbSAFE I/O panel</h2>
	      		</div>

	      		<div className="PanelChoice__dropdown" onClick={this.dropMenu}>
	      			<div className="text">
	      				<div>CHOOSE ENCLOSURE SIZE</div>
	      			</div>
	      		</div>
	      		
	      		<div className="PanelChoice__dropdown_menu">
	      			<PanelDropdown />
	      		</div>

	      		<div className="PanelChoice__start_btn">
	      			<div className="inner_outline">
						<div className="centered"></div>
	      			</div>
	      			<div className="text">
	      				<div>START</div>
	      			</div>
	      		</div>

	      	</div>
	    );
	}
}

export default PanelChoice;
