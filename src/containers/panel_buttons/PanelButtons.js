import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PanelButtons.css';

class PanelButtons extends Component {

	render() {
		const {finishedView, refreshState, undoState, data, type} = this.props;

		let small_exists = (data.hasOwnProperty("smallconnectors")) ? data.smallconnectors.length > 0 : false;
		let large_exists = (data.hasOwnProperty("largeconnectors")) ? data.largeconnectors.length > 0 : false;
		let finish_style = ((type === 'small' && small_exists) || (type === 'large' && large_exists));

	    return (
	    	<div className="PanelButtons">

	    		<div className="PanelButtons__panelbtn blue" onClick={undoState}>
	    			<div className="inner_outline">
						<div className="centered"></div>
	      			</div>
	      			<div className="text">
	      				<div>UNDO</div>
	      			</div>
	    		</div>

	    		<div className="PanelButtons__panelbtn blue" onClick={refreshState}>
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
	      				{finish_style && <div>FINISH</div>}
	      			</div>
	    		</div>

	      	</div>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(PanelButtons);
