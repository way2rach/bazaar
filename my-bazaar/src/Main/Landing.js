 import React, { Component } from 'react';

class Landing extends Component {

  render() {
    return (
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
    );
  }
}

export default Landing;

