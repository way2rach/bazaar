import React, { Component } from 'react';
import './App.css';
import './Custom.css';
import './Main/Horizon.css';

import Login from './Main/Login.js';
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
    this.setState({page: 3});
  }

  goToLanding() {
    this.setState({page: 2});
  }

  render() {
    return (
      <div className="App">
        {this.state.page != 1 ?
            <Navigation />
            : null
          }

        <div className="container">
          {this.state.page == 1 ?
             <Login goToLanding={(e) => this.goToLanding()}/>
            : null
          }
          {this.state.page == 2 ?
            <Landing goToMarketPlace={(e) => this.goToMarketPlace(e)} />
            : null
          }
          {this.state.page == 3 ?
            <MarketPlace goToMarketPlace={(e) => this.goToMarketPlace(e)} />
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
