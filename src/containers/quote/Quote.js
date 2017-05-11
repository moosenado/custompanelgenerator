import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {

	constructor() {
		super();
		this.checkFormFields = this.checkFormFields.bind(this);
		this.sendEmail = this.sendEmail.bind(this);
		this.submit = false;
	}

	regexCheck(field, value) {
	    let pass = false;

	    switch(field) {
	      case 'name':
	      case 'company':
	        let name_regex = /^[a-zA-Z ]{2,30}$/;
	        pass = (name_regex.test(value)) ? true : false;
	      break;

	      case 'email':
	        let email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        pass = (email_regex.test(value)) ? true : false;
	      break;

	      case 'phonenumber':
	        let phone_regex = /^\d{10}$/;
	        pass = (phone_regex.test(value)) ? true : false;
	      break;

	      case 'notes':
	        pass = true;
	      break;

	      default:
	        return false;
	    }

	    return pass;
	 }

	checkFormFields() {
		let fail_array = [];
		let form = {};

		if(this.submit) {
			form.name = document.getElementById('name').value;
			form.company = document.getElementById('company').value;
			form.email = document.getElementById('email').value;
			form.phonenumber = document.getElementById('phonenumber').value;
			form.notes = document.getElementById('notes').value;

			for (var key in form) {
				if (form.hasOwnProperty(key)) {
					if(this.regexCheck(key, form[key]) === false) {
						document.getElementById(key).style.outline = '1px solid red';
						fail_array.push(true);
					} else {
						document.getElementById(key).style.outline = 'none';
						fail_array.push(false);
					}
				}
			}

			if ((fail_array.indexOf(true) > -1)) {
				return false;
			} else {
				return form;
			}
		}
	}

	sendEmail(e) {
	    e.preventDefault();
	    this.submit = true;
	    let form = this.checkFormFields();

	    if (form) {
	    	console.log('THIS PASSES');
	      // let xmlhttp= window.XMLHttpRequest ?
	      //   new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

	      // xmlhttp.onreadystatechange = () => {
	      //   console.log('sending...');
	      //   this.handleFormSubmit('sending', true);

	      //   if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
	      //     console.log(xmlhttp.responseText);
	      //     this.handleFormSubmit('Thank you. We will be in touch soon.');
	      //   }

	      //   if (xmlhttp.status == 404 || xmlhttp.status == 500) {
	      //     console.log(xmlhttp.status);
	      //     this.handleFormSubmit('An error has occured. Please try sending again.');
	      //   }
	      // }
	      // xmlhttp.open("GET","/sendemail?name=" + form.name + "&email=" + form.email + "&phone=" + form.phone + "&message=" + encodeURIComponent(form.message), true);
	      // xmlhttp.send();
	    }
	}

	render() {
		const {active, quoteView} = this.props;

		return (
			<div>
			{active &&
				<div className="Quote">
					<div className="Quote__content">

					<div className="Quote__close" onClick={quoteView}></div>

					<h3>Get a Quote</h3>

					<form action="" onSubmit={this.sendEmail}>

						<div className="Quote__fieldtitle">NAME</div>
						<div className="Quote__input"><input type="text" name="name" id="name" onFocus={this.checkFormFields}/></div>

						<div className="Quote__fieldtitle">COMPANY</div>
						<div className="Quote__input"><input type="text" name="company" id="company" onFocus={this.checkFormFields}/></div>

						<div className="Quote__fieldtitle">EMAIL</div>
						<div className="Quote__input"><input type="text" name="email" id="email" onFocus={this.checkFormFields}/></div>

						<div className="Quote__fieldtitle">PHONE NUMBER</div>
						<div className="Quote__input"><input type="text" name="phonenumber" id="phonenumber" onFocus={this.checkFormFields}/></div>

						<div className="Quote__fieldtitle">NOTES</div>
						<div className="Quote__input"><textarea name="notes" id="notes" onFocus={this.checkFormFields}/></div>

						<div className="Quote__offishbtn blue">
							<div className="inner_outline">
								<div className="centered"></div>
							</div>
							<div className="text">
								<input type="submit" value="QUOTE"/>
							</div>
						</div>

					</form>

					</div>
				</div>
			}
			</div>
		);
	}
}

export default Quote;
