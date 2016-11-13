import React, {Component} from 'react';
import {ViewComponent} from './ViewComponent.js';
import md5 from "crypto-js/md5";
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
                authorName: 'Jeff Kumar',
                author: 'practicalmissions@gmail.com',
                name: '273 Hampton Ter NE. Atlanta, GA 30307. 6 beds 6 baths 3,035 sqft',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind..."
            },
            {
                authorName: 'Mike Olingy',
                author: 'mike.olingy@gmail.com',
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
                            <a href="#/marketplace/create">Create add</a>
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
                                        let authorImg = 'http://www.gravatar.com/avatar/' + md5(product.author);
                                        return  <li className="vbz-listing">
                                                    <div>
                                                        <div className="vbz-listing-authorImage">
                                                            <img src={authorImg} />
                                                        </div>
                                                        <a href={product.url}>{product.name}</a>
                                                        <div>
                                                            {product.description}
                                                       </div>
                                                       <div>Posted by: {product.authorName}</div>
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
                                <div>
                                    <form>
                                        <h4>Title</h4>
                                        <input className="u-full-width" type="text" name="title"  />
                                        <h4>Description</h4>
                                        <textarea className="u-full-width" placeholder="I would like to sell …" id="exampleMessage" />
                                        <label className="example-send-yourself-copy">
                                            <input type="checkbox" />
                                            <span className="label-body">Send a copy to yourself</span>
                                        </label>
                                        <div>
                                             <input className="button-primary" type="submit" value="Submit" />
                                        </div>

                                    </form>
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

