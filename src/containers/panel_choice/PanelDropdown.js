import React, { Component } from 'react';

class PanelDropdown extends Component {

	constructor() {
		super()
		this.state = {
			panels: {
				1: 'small',
				2: 'medium',
				3: 'large'
			}
		}
	}

	render() {
	    return (
	      	<div className="PanelDropdown">
	      		<ul>
	      		</ul>
	      	</div>
	    );
	}
}

export default PanelDropdown;
