import React, { Component } from 'react';

import './FinishedView.css';

class FinishedView extends Component {

	render() {
		const {active} = this.props;

	    return (
	    	<div>
	    	{active &&
		    	<div className="FinishedView">
		    		<div className="FinishedView__btns_centered">
		    			<div className="FinishedView__btns">
		    				<div className="FinishedView__btns_cont">
				    			<div className="FinishedView__btn">
				    				<span>PRINT I/O PANEL</span>
				    			</div>
				    			<div className="FinishedView__btn">
				    				<span>GET A QUOTE</span>
				    			</div>
			    			</div>
			    			<div className="FinishedView__btns_cont_2">
				    			<div className="FinishedView__finishedbtn">
				    				<span>BACK</span>
				    			</div>
				    			<div className="FinishedView__finishedbtn">
				    				<span>DONE</span>
				    			</div>
			    			</div>
		    			</div>
		    		</div>
		      	</div>
	      	}
	      	</div>
	    );
	}
}

export default FinishedView;
