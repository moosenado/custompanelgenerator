import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {

	render() {
		const {active} = this.props;

	    return (
	    	<div>
	    	{active &&
		    	<div className="Quote">
		    		<div className="Quote__content">
		    			<h3>Get a Quote</h3>

		    			<div className="Quote__fieldtitle">NAME</div>
		    			<div className="Quote__input"><input type="text" name="name" id="name" /></div>

		    			<div className="Quote__fieldtitle">COMPANY</div>
		    			<div className="Quote__input"><input type="text" name="company" id="company" /></div>

		    			<div className="Quote__fieldtitle">EMAIL</div>
		    			<div className="Quote__input"><input type="text" name="email" id="email" /></div>

		    			<div className="Quote__fieldtitle">PHONE NUMBER</div>
		    			<div className="Quote__input"><input type="text" name="phonenumber" id="phonenumber" /></div>

		    			<div className="Quote__fieldtitle">NOTES</div>
		    			<div className="Quote__input"><textarea name="notes" id="notes" /></div>
		    		</div>
		      	</div>
	      	}
	      	</div>
	    );
	}
}

export default Quote;
