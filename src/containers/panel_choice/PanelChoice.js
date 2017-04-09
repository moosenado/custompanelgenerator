import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

	    return (
	      	<div className="PanelChoice">

	      		<div className="PanelChoice__title">
	      			<h2>Create your custom dbSAFE I/O panel</h2>
	      		</div>

	      		<div className="PanelChoice__dropdown" onClick={this.dropMenu}>
	      			<div className="text">
	      				<div>{(!this.state.selected_panel) ? 'CHOOSE ENCLOSURE SIZE' : this.state.selected_panel.toUpperCase()}</div>
	      			</div>
	      		</div>

	      		<div className="PanelChoice__dropdown_menu">
	      			<div className={'container ' + menu_open_class}>
			      		<ul>
			      			{Object.keys(this.state.panels).map((key, i) => {
			      				return (
			      					<li onClick={() => this.panelSelection(key)} key={key}>{key.toUpperCase()}</li>
			      				)
			      			})}
			      		</ul>
			      	</div>
	      		</div>

	      		<Link to={'/' + active_link}>
		      		<div className={"PanelChoice__start_btn " + start_btn_class}>
		      			<div className="inner_outline">
							<div className="centered"></div>
		      			</div>
		      			<div className="text">
		      				<div>START</div>
		      			</div>
		      		</div>
	      		</Link>

	      	</div>
	    );
	}
}

export default PanelChoice;
