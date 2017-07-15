import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PanelButtons.css';

class PanelButtons extends Component {

	render() {
		const {finishedView, refreshState, undoState, data, type} = this.props;

		let small_exists = (data.hasOwnProperty("smallconnectors") && (data.smallconnectors.length > 0 && Object.keys(data.smallconnectors[data.smallconnectors.length - 1]).length !== 0)) ? true : false;
		let medium_exists = (data.hasOwnProperty("mediumconnectors") && (data.mediumconnectors.length > 0 && Object.keys(data.mediumconnectors[data.mediumconnectors.length - 1]).length !== 0)) ? true : false;
		let large_exists = (data.hasOwnProperty("largeconnectors") && (data.largeconnectors.length > 0 && Object.keys(data.largeconnectors[data.largeconnectors.length - 1]).length !== 0)) ? true : false;
		let can_finish = ((type === 'small' && small_exists) || (type === 'medium' && medium_exists) || (type === 'large' && large_exists));
		let finish_style = (can_finish) ? 'active' : 'unactive';

	    return (
	    	<div className="PanelButtons">

	    		<div className="PanelButtons__panelbtn blue active" onClick={undoState}>
	    			<div className="inner_outline">
						<div className="centered"></div>
	      			</div>
	      			<div className="text">
	      				<div>UNDO</div>
	      			</div>
	    		</div>

	    		<div className="PanelButtons__panelbtn blue active" onClick={refreshState}>
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
