import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    let name = "";
    if(this.props.location.pathname.indexOf('marketplace') != -1) {
        name = 'Atlanta -';
    }
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        vBazzar - {name} Marketplace for the Enterprise
                    </a>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navigation;
