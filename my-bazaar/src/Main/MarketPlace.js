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

    renderCategories() {
            return  <div id="sidebar-wrapper">
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
                    </div>;
    }

    renderTabs(sell) {
        let sellClass = '';
        let buyClass = '';
        if(sell) {
            sellClass = 'active';
        } else {
            buyClass = 'active';
        }
        return <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav nav-tabs">
                                    <li role="presentation" className={buyClass}>
                                        <a href="#/marketplace">Buy</a>
                                    </li>
                                    <li role="presentation" className={sellClass}>
                                        <a href="#/marketplace/sell">Sell</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>;
    }

    render() {
        let categories = this.renderCategories();
        let tabs = this.renderTabs();
        return (
            <div className="row">
                <div id="wrapper">
                    {categories}
                    {tabs}
                </div>
            </div>
        );
    }
}

export class MarketPlaceSell extends MarketPlace {

    constructor() {
        super();
    }

    render() {
        let categories = this.renderCategories();
        let sell = true;
        let tabs = this.renderTabs(sell);
        return (
            <div className="row">
                <div id="wrapper">
                    {categories}
                    {tabs}
                </div>
            </div>
        );
    }
}

export default MarketPlace;

