import React, { Component } from 'react';
import ConnectorLibrary from './../connector_library/ConnectorLibrary';
import PanelButtons from './../panel_buttons/PanelButtons';
import PanelDropdown from './../panel_dropdown/PanelDropdown';
import { connect } from 'react-redux';
import FinishedView from './../finished_view/FinishedView';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Draggabilly from 'draggabilly';
import store from './../../store';

import './MediumPanel.css';

class MediumPanel extends Component {

	constructor() {
		super();
		this.mountDragabbles = this.mountDragabbles.bind(this);
		this.finishedView = this.finishedView.bind(this);
		this.refreshState = this.refreshState.bind(this);
		this.undoState = this.undoState.bind(this);
		this.dragEndStuff = this.dragEndStuff.bind(this);
		this.removeConnector = this.removeConnector.bind(this);
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

	removeConnector(id) {
		store.dispatch({
			type: 'REMOVE_MEDIUM_CONNECTOR',
			id: id
		});
	}

	refreshState() {
		store.dispatch({
			type: 'REFRESH_MEDIUM_CONNECTORS'
		});
	}

	undoState() {
		store.dispatch({
			type: 'UNDO_MEDIUM_CONNECTORS'
		});
	}

	dragEndStuff(event, pointer) {
		store.dispatch({
			type: 'EDIT_MEDIUM_CONNECTORS',
			id: event.target.offsetParent.id,
			top: event.target.offsetParent.offsetTop,
			left: event.target.offsetParent.offsetLeft
		});
	}

	mountDragabbles(update) {
		var draggableElems = document.querySelectorAll('.dragme_medium');

		if(update) {
			for (let i = 0; i < this.draggies.length; i++) {
				this.draggies[i].off( 'dragEnd', this.dragEndStuff );
			}
		}

		for (let i = 0; i < draggableElems.length; i++) {
			var draggie = new Draggabilly(draggableElems[i], {
		    	containment: '.MediumPanel__surface',
		    	grid: [12,12]
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

		let connectors_exist = (data.hasOwnProperty("mediumconnectors")) ? data.mediumconnectors.length > 0 : false;

	    return (
	    	<div className="MediumPanel">
	    		<div className="MediumPanel__leftcol">
	    			<ConnectorLibrary type={'medium'}/>
	    		</div>
		      	<div className="MediumPanel__rightcol">
		      		<h1>Your Custom dbSAFE I/O Panel</h1>
		      		<div className="MediumPanel__desc">You are currently working on a <span>Medium</span> External I/O Panel.</div>
		      		<PanelDropdown/>
		      		<div id="section-to-print" className="MediumPanel__border">
		      			<div className="MediumPanel__bolts_horiz top">
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      			</div>
		      			<div className="MediumPanel__bolts_horiz bottom">
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      			</div>
		      			<div className="MediumPanel__bolts_vert left">
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      			</div>
		      			<div className="MediumPanel__bolts_vert right">
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      				<div className="MediumPanel__bolt"></div>
		      			</div>
		      			<div className="MediumPanel__surface_centered">
		      				<div className="MediumPanel__surface">
		      					{connectors_exist ? data.mediumconnectors[data.mediumconnectors.length-1].map((item, i)=>{
									let top = item.top;
									let left = item.left;
									return (<div id={item.id} className="dragme_medium" key={i} style={{width: item.width + 'in', top: top, left: left}}>
											<img src={item.src} alt={item.name} />
		      								<div className="dragme_close" onClick={() => this.removeConnector(item.id)}></div>
		      								</div>)
								}) : ''}
		      				</div>
		      			</div>
		      		</div>
		      		<PanelButtons finishedView={this.finishedView} type={'medium'} refreshState={this.refreshState} undoState={this.undoState}/>
		      		<div className="MediumPanel__info">
			      		Not finding a panel size that works for you? Please contact <a href="mailto:sales@dvtest.com">sales@dvtest.com</a> for a custom I/O Panel.
			      	</div>
		      	</div>
		      	<ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName='MediumPanel__finishedView'>
		      		<FinishedView key={this.state.finished} type={'mediumpanel'} active={this.state.finished} finishedView={this.finishedView}/>
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

export default connect(mapStateToProps)(MediumPanel);
