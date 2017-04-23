import React, { Component } from 'react';
import PanelChoice from './containers/panel_choice/PanelChoice';
import { connect } from 'react-redux';
import { initialStateConnection } from './actions/actionCreators.js';

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.loadData();
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		this.props.initData();
	}

  	render() {

	  	const {smallconnectors} = this.props;

	  	console.log(smallconnectors);

	    return (
	      	<div className="App">
	        	<main className="app-container">
	        		<PanelChoice />
	        	</main>
	      	</div>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        smallconnectors: state.initConnectors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initData: () => dispatch(initialStateConnection())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);