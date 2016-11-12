import React, {Component} from 'react';
import {ViewComponent} from './ViewComponent.js';


class Login extends ViewComponent {

    constructor() {
        super();
        this._bind('goToLanding');
    }

    goToLanding(e) {
        e.preventDefault();
        this.props.goToLanding();
    }

    render() {
        return (
<div>
                <form onSubmit={(e) => this.goToLanding(e)} method="POST" id="loginForm" autocomplete="off">
                        <input type="submit" name="action" id="signIn" value="Sign in"
                               className="vbz-login-button" onClick={(e) => this.goToLanding(e)}/>
                </form>
    </div>

        );
    }
}

export default Login;


