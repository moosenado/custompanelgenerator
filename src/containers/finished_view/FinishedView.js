import React, { Component } from 'react';
import Quote from './../quote/Quote';

import './FinishedView.css';

class FinishedView extends Component {

	constructor() {
		super();
		this.toggleQuote = this.toggleQuote.bind(this);
		this.state = {
			active_quote: false
		}
	}

	toggleQuote() {
		this.setState({active_quote: !this.state.active_quote});
	}

	render() {
		const {active, finishedView} = this.props;

	    return (
	    	<div>
	    	{active &&
		    	<div className="FinishedView">
		    		<div className="FinishedView__btns_centered">
		    			<div className="FinishedView__btns">
		    				<div className="FinishedView__btns_cont">
				    			<div className="FinishedView__btn">
				    				<span onClick={()=>{window.print()}}>PRINT I/O PANEL</span>
				    			</div>
				    			<div className="FinishedView__btn">
				    				<span onClick={this.toggleQuote}>GET A QUOTE</span>
				    			</div>
			    			</div>
			    			<div className="FinishedView__btns_cont_2">
				    			<div className="FinishedView__finishedbtn">
				    				<span onClick={finishedView}>BACK</span>
				    			</div>
				    			<div className="FinishedView__finishedbtn">
				    				<span><a href="http://www.testforce.com">DONE</a></span>
				    			</div>
			    			</div>
		    			</div>
		    		</div>
		    		<Quote active={this.state.active_quote} quoteView={this.toggleQuote}/>
		      	</div>
	      	}
	      	</div>
	    );
	}
}

export default FinishedView;
