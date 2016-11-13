import React, {Component} from 'react';
import {ViewComponent} from './ViewComponent.js';

class MarketPlace extends ViewComponent {

    constructor() {
        super();
        this._bind('goToMarketPlace');
        this.categories = [
            'Electronics',
            'Cars',
            'Books'
        ];
    }

    goToMarketPlace() {
        this.props.goToMarketPlace('marketplace');
    }

    render() {

        return (
            <div className="row">
                <div id="wrapper">
                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a href="#">
                                    Categories
                                </a>
                            </li>
                            {this.categories.map(item => {
                                return  <li>
                                            <a href="#">{item}</a>
                                        </li>
                            })}
                        </ul>
                    </div>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav nav-tabs">
                                        <li role="presentation" className="active">
                                            <a href="/marketplace">Buy</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#/marketplace/sell">Sell</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MarketPlace;

