import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PanelButtons.css';

class PanelButtons extends Component {

	render() {
		const {finishedView, refreshState, undoState, data, type} = this.props;

		let small_exists = (data.hasOwnProperty("smallconnectors")) ? data.smallconnectors.length > 0 : false;
		let large_exists = (data.hasOwnProperty("largeconnectors")) ? data.largeconnectors.length > 0 : false;
		let can_finish = ((type === 'small' && small_exists) || (type === 'large' && large_exists));
		let finish_style = (can_finish) ? '' : 'unactive';

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

	    		<div className={`PanelButtons__panelbtn blue ${finish_style}`} onClick={can_finish ? finishedView : ''}>
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

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(PanelButtons);
