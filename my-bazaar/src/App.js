import React, { Component } from 'react';
import './App.css';
import './Custom.css';
import './Main/Horizon.css';

import Navigation from './Main/Navigation.js';
import {ViewComponent} from './Main/ViewComponent.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'



export class AppBasic extends ViewComponent {

  constructor() {
    super();
    this._bind('setBodyClass');
    this.setBodyClass('vbz-background');
  }

  setBodyClass(className) {
     document.getElementsByTagName('body')[0].className = className;
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class App extends ViewComponent {

  constructor() {
    super();
    this.setBodyClass('');
  }

  setBodyClass(className) {
     document.getElementsByTagName('body')[0].className = className;
  }

  render() {
    return (
      <div>
        <Navigation location={this.props.location} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;



