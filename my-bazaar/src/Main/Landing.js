import React, { Component } from 'react';
import {ViewComponent} from './ViewComponent.js';

class Landing extends ViewComponent {

	constructor() {
		super();
		this._bind('goToMarketPlace');
	}

	goToMarketPlace() {
		 window.location.hash = 'marketplace';
	}

  	render() {
	    return (
	        <div className="row">
			  <div className="jumbotron" style={{marginTop: "10%"}} >
			      <h4  className="vbz-heading-large">Select Your Location:</h4>
			      <div>
			          	<a className="button button-primary vbz-button" onClick={(e) => this.goToMarketPlace(e)}>
			          		Atlanta
		          		</a>
		         	 	<a className="button button-primary vbz-button" href="#" onClick={(e) => this.goToMarketPlace(e)}>
		         	 		San Francisco
	         	 		</a>
			          	<a className="button button-primary vbz-button" href="#" onClick={(e) => this.goToMarketPlace(e)}>
			          		Banglore
		          		</a>
			      </div>
			  </div>
			</div>
	    );
  	}
}

export default Landing;

