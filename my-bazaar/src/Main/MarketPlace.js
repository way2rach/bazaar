import React, {Component} from 'react';
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
                <div id="wrapper">


                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a href="#">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="#">Electronics</a>
                            </li>
                            <li>
                                <a href="#">Cars</a>
                            </li>
                            <li>
                                <a href="#">Books</a>
                            </li>

                        </ul>
                    </div>


                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav nav-tabs">
                                        <li role="presentation" className="active"><a href="#">Buy</a></li>
                                        <li role="presentation"><a href="#">Sell</a></li>

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

