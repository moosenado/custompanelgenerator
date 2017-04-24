import React, { Component } from 'react';

import './PanelButtons.css';

class PanelButtons extends Component {

	render() {
		const {finishedView} = this.props;

	    return (
	    	<div className="PanelButtons">

	    		<div className="PanelButtons__panelbtn blue">
	    			<div className="inner_outline">
						<div className="centered"></div>
	      			</div>
	      			<div className="text">
	      				<div>UNDO</div>
	      			</div>
	    		</div>

	    		<div className="PanelButtons__panelbtn blue">
	    			<div className="inner_outline">
						<div className="centered"></div>
	      			</div>
	      			<div className="text">
	      				<div>REFRESH</div>
	      			</div>
	    		</div>

	    		<div className="PanelButtons__panelbtn blue" onClick={finishedView}>
	    			<div className="inner_outline">
						<div className="centered"></div>
	      			</div>
	      			<div className="text">
	      				<div>FINISH</div>
	      			</div>
	    		</div>

	      	</div>
	    );
	}
}

export default PanelButtons;
