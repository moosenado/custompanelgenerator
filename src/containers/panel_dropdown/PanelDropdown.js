import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './PanelDropdown.css';

class PanelDropdown extends Component {

	constructor() {
		super();
		this.dropMenu = this.dropMenu.bind(this);

		this.state = {
			panels: {
				small: 'smallpanel',
				medium: 'mediumpanel',
				large: 'largepanel'
			},
			menu_opened: false,
			selected_panel: ''
		}
	}

	dropMenu() {
		this.setState({
			...this.state,
			menu_opened: !this.state.menu_opened
		});
	}

	render() {
		let menu_open_class = (!this.state.menu_opened) ? '' : 'active';
		let arrow_class = (!this.state.menu_opened) ? '' : 'active';
		let dropdown_bg = (this.state.panels[this.state.selected_panel]) ? 'blue' : '';

	    return (
	    	<div className="PanelDropdown">
		    	<div className={"PanelDropdown__main " + dropdown_bg} onClick={this.dropMenu}>
	      			<ReactCSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName='PanelChoice__ani_text'>
	      				<div className="text" key={this.state.selected_panel}>
	      					<div>{(!this.state.selected_panel) ? 'SWITCH ENCLOSURE SIZE' : this.state.selected_panel.toUpperCase()}</div>
	      				</div>
	      			</ReactCSSTransitionGroup>
	      			<div className={"PanelDropdown__arrow_down " + arrow_class}></div>
	      		</div>

		  		<div className={'PanelDropdown__menu ' + menu_open_class}>
		  			<div className={'container ' + menu_open_class}>
			      		<ul>
			      			{Object.keys(this.state.panels).map((key, i) => {
			      				let highlight = (key === this.state.selected_panel) ? 'highlight' : '';
			      				return (
			      					<Link to={'/' + this.state.panels[key]} key={key}>
			      						<li className={highlight}>{key.toUpperCase()}</li>
			      					</Link>
			      				)
			      			})}
			      		</ul>
			      	</div>
		  		</div>
	  		</div>
	    );
	}
}

export default PanelDropdown;
