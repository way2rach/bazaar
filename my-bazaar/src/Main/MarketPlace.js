import React, {Component} from 'react';
import {ViewComponent} from './ViewComponent.js';

class MarketPlace extends ViewComponent {

    constructor() {
        super();
        this._bind('goToMarketPlace');
        this.categories = [
            'Electronics',
            'Cars',
            'Houses for Sale',
            'Houses for Rent',
            'Roommates',
        ];
        this.state = {};
        this.state.products = [
            {
                name: '273 Hampton Ter NE. Atlanta, GA 30307. 6 beds 6 baths 3,035 sqft',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind..."
            },
            {
                name: 'Shamell - 26 looking for a roomate $550 per month',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind..."
            }

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
        return <div className="col-lg-12">
                    <ul className="nav nav-tabs">
                        <li role="presentation" className={buyClass}>
                            <a href="#/marketplace">Listings</a>
                        </li>
                        <li role="presentation" className={sellClass}>
                            <a href="#/marketplace/sell">Your Promotions</a>
                        </li>
                    </ul>
                </div>;
    }

    render() {
        let categories = this.renderCategories();
        let tabs = this.renderTabs();
        return (
            <div className="row">
                <div id="wrapper">
                    {categories}
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                 {tabs}
                            </div>
                             <div className="row">
                                <ul className="vbz-buy-listing">
                                    {this.state.products.map(product => {
                                        return  <li>
                                                    <div>
                                                       <a href={product.url}>{product.name}</a>
                                                       <div>
                                                            {product.description}
                                                       </div>
                                                    </div>
                                                </li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
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
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                 {tabs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MarketPlace;

