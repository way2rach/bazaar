import React, { Component } from 'react';

import './App.css';
import './Custom.css';

import Landing from './Main/Landing.js';
import MarketPlace from './Main/MarketPlace.js';
import Navigation from './Main/Navigation.js';
import {ViewComponent} from './Main/ViewComponent.js';

class App extends ViewComponent {

  constructor() {
    super();
    this._bind('goToMarketPlace');
    this.state = {
      page: 1
    };

  }

  goToMarketPlace() {
    this.setState({page: 2});
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          {this.state.page == 1 ?
            <Landing goToMarketPlace={(e) => this.goToMarketPlace(e)} />
            : null
          }
          {this.state.page == 2 ?
            <MarketPlace goToMarketPlace={(e) => this.goToMarketPlace(e)} />
            : null
          }


        </div>
      </div>
    );
  }
}

export default App;
