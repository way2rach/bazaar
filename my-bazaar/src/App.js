import React, { Component } from 'react';

import './App.css';
import './Custom.css';

import Landing from './Main/Landing.js';
import Navigation from './Main/Navigation.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Landing />
        </div>
      </div>
    );
  }
}

export default App;
