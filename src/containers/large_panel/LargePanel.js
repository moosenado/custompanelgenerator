import React, { Component } from 'react';
import ConnectorLibrary from './../connector_library/ConnectorLibrary';
import PanelButtons from './../panel_buttons/PanelButtons';
import { connect } from 'react-redux';
import FinishedView from './../finished_view/FinishedView';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Draggabilly from 'draggabilly';
import store from './../../store';

import './LargePanel.css';

class LargePanel extends Component {

	constructor() {
		super();
		this.mountDragabbles = this.mountDragabbles.bind(this);
		this.finishedView = this.finishedView.bind(this);
		this.refreshState = this.refreshState.bind(this);
		this.undoState = this.undoState.bind(this);
		this.dragEndStuff = this.dragEndStuff.bind(this);
		this.draggies = [];

		this.state = {
			finished: false
		};
	}

	finishedView() {
		this.setState({
			finished: !this.state.finished
		});
	}

	refreshState() {
		store.dispatch({
			type: 'REFRESH_LARGE_CONNECTORS'
		});
	}

	undoState() {
		store.dispatch({
			type: 'UNDO_LARGE_CONNECTORS'
		});
	}

	dragEndStuff(event, pointer) {
		store.dispatch({
			type: 'EDIT_LARGE_CONNECTORS',
			id: event.target.id,
			top: event.target.offsetTop,
			left: event.target.offsetLeft
		});
	}

	mountDragabbles(update) {
		var draggableElems = document.querySelectorAll('.dragme_large');

		if(update) {
			for (let i = 0; i < this.draggies.length; i++) {
				this.draggies[i].off( 'dragEnd', this.dragEndStuff );
			}
		}

		for (let i = 0; i < draggableElems.length; i++) {
			var draggie = new Draggabilly(draggableElems[i], {
		    	containment: '.LargePanel__surface'
		  	});
			draggie.on( 'dragEnd', this.dragEndStuff );
			this.draggies.push(draggie);
		}
	}

	componentDidMount() {
		this.mountDragabbles(false);
	}

	componentDidUpdate() {
		this.mountDragabbles(true);
	}

	render() {
		const {data} = this.props;

		let connectors_exist = (data.hasOwnProperty("largeconnectors")) ? data.largeconnectors.length > 0 : false;

	    return (
	    	<div className="LargePanel">
	    		<div className="LargePanel__leftcol">
	    			<ConnectorLibrary type={'large'}/>
	    		</div>
		      	<div className="LargePanel__rightcol">
		      		<h1>Your Custom dbSAFE I/O Panel</h1>
		      		<div className="LargePanel__desc">You are currently working on a <span>Large</span> dbSAFE I/O Panel.</div>
		      		<div id="section-to-print" className="LargePanel__border">
		      			<div className="LargePanel__bolts_horiz top">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__bolts_horiz bottom">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__bolts_vert left">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__bolts_vert right">
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      				<div className="LargePanel__bolt"></div>
		      			</div>
		      			<div className="LargePanel__surface_centered">
		      				<div className="LargePanel__surface">
		      					{connectors_exist ? data.largeconnectors[data.largeconnectors.length-1].map((item, i)=>{
									let top = item.top;
									let left = item.left;
									return <img id={item.id} key={i} className="dragme_large" src={item.src} alt={item.name} style={{width: item.width + 'in', top: top, left: left}}/>;
		      					}) : ''}
		      				</div>
		      			</div>
		      		</div>
		      		<PanelButtons finishedView={this.finishedView} refreshState={this.refreshState} undoState={this.undoState}/>
		      	</div>
		      	<ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName='LargePanel__finishedView'>
		      		<FinishedView key={this.state.finished} active={this.state.finished} finishedView={this.finishedView}/>
		      	</ReactCSSTransitionGroup>
	      	</div>
	    );
	}
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(LargePanel);
