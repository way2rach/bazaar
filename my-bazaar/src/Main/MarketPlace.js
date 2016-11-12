import React, { Component } from 'react';
import {ViewComponent} from './ViewComponent.js';

class MarketPlace extends ViewComponent {

	constructor() {
		super();
		this._bind('goToMarketPlace');
	}

	goToMarketPlace() {
		this.props.goToMarketPlace('marketplace');
	}

  	render() {
	    return (
	        <div className="row">
			   this is the atlanta market place
			</div>
	    );
  	}
}

export default MarketPlace;

