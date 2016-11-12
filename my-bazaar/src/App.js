import React, { Component } from 'react';

import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        vBazzar
                    </a>
                </div>
            </div>
        </nav>
        <div className="container">
          <div className="row">
              <div className="jumbotron" style={{marginTop: "10%"}} >
                  <h4>Select Your Location:</h4>
                  <div>
                      <a className="button button-primary button-vbz" href="#">Atlanta</a>
                      <a className="button button-primary button-vbz" href="#">San Francisco</a>
                      <a className="button button-primary button-vbz" href="#">Banglore</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
