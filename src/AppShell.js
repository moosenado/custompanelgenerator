import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialStateConnection } from './actions/actionCreators.js';

import './App.css';

class AppShell extends Component {

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		this.props.initData();
	}

	// no need to render anything, we just need the data to be global for any route
  	render() {
	    return (
	      	<div></div>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(initialStateConnection())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);