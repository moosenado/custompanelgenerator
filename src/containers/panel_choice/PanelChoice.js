import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './PanelChoice.css';

class PanelChoice extends Component {

	constructor() {
		super();
		this.dropMenu = this.dropMenu.bind(this);
		this.panelSelection = this.panelSelection.bind(this);

		this.state = {
			panels: {
				small: 'smallpanel',
				medium: 'mediumpanel',
				large: 'mediumpanel'
			},
			menu_opened: false,
			selected_panel: '',
			start: false
		}
	}

	dropMenu() {
		this.setState({
			...this.state,
			menu_opened: !this.state.menu_opened
		});
	}

	panelSelection(panel) {
		this.setState({
			...this.state,
			menu_opened: !this.state.menu_opened,
			selected_panel: panel,
			start: true
		});
	}

	render() {
		let menu_open_class = (!this.state.menu_opened) ? '' : 'active';
		let start_btn_class = (!this.state.start) ? 'red' : 'green';
		let active_link = (this.state.panels[this.state.selected_panel]) ? this.state.panels[this.state.selected_panel] : '';
		let dropdown_bg = (this.state.panels[this.state.selected_panel]) ? 'blue' : '';

	    return (
	      	<div className="PanelChoice">

	      		<div className="PanelChoice__title">
	      			<h2>Create your custom dbSAFE I/O panel</h2>
	      		</div>

	      		<div className={"PanelChoice__dropdown " + dropdown_bg} onClick={this.dropMenu}>
	      			<ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName='PanelChoice__ani_text'>
	      				<div className="text" key={this.state.selected_panel}>
	      					<div>{(!this.state.selected_panel) ? 'CHOOSE ENCLOSURE SIZE' : this.state.selected_panel.toUpperCase()}</div>
	      				</div>
	      			</ReactCSSTransitionGroup>
	      			<div className="PanelChoice__arrow_down"></div>
	      		</div>

	      		<div className="PanelChoice__dropdown_menu">
	      			<div className={'container ' + menu_open_class}>
			      		<ul>
			      			{Object.keys(this.state.panels).map((key, i) => {
			      				let highlight = (key === this.state.selected_panel) ? 'highlight' : '';
			      				return (
			      					<li className={highlight} onClick={() => this.panelSelection(key)} key={key}>{key.toUpperCase()}</li>
			      				)
			      			})}
			      		</ul>
			      	</div>
	      		</div>

	      		<div className={"PanelChoice__start_btn " + start_btn_class}>
	      			<Link to={'/' + active_link}>
		      			<div className="inner_outline">
							<div className="centered"></div>
		      			</div>
		      			<div className="text">
		      				<div>START</div>
		      			</div>
	      			</Link>
	      		</div>

	      	</div>
	    );
	}
}

export default PanelChoice;
