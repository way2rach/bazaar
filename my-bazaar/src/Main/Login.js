
import React, { Component } from 'react';
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
            <div className="login-page login-bg-layers login-bg new-login">
                <form onSubmit={(e) => this.goToLanding(e)} method="POST" id="loginForm" autocomplete="off">
                <div className="row-fluid login-body">
                    <div className="well shadow">
                        <div className="well-wrapper">
                            <div className="masthead">
                                <div className="login-logo">
                                    <img src="https://myvmware.workspaceair.com:443/SAAS/jersey/manager/api/images/100475" alt="" />
                                    <div className="logo-text">VMware IT - VMware Identity Manager</div>
                                </div>
                                </div>
                                <div className="login-form">
                                    <fieldset>
                                        <div id="notification" className="hide text-sm text-error container-notify margin-bottom-15"></div>

                                        <div className="clearfix">
                                                <div className="login-field">
                                                    <input type="text" className="login-input" id="username" name="username"   placeholder="username"  />
                                                </div>
                                            </div>
                                            <div className="clearfix">
                                                <div className="login-field">
                                                            <input type="password" className="login-input" id="password" name="password" placeholder="password"  />
                                                </div>
                                            </div>
                                            <div className="clearfix pw-field">
                                                <div className="text-right">
                                                    <a href="https://myvmware.workspaceair.com/SAAS/t/myvmware/auth/forgotPassword?RelayState=16343c54-1e91-40d8-b5fe-ef3259d829c3" className="hint text-dark text-sm" id="forgotPasswd">Forgot password?</a>
                                                </div>
                                            </div>
                                            <div className="bottom-section">
                                            <div className="field field-submit indent-top-20">
                                                <input type="submit" name="action" id="signIn" value="Sign in" className="btn btn-primary btn-full-width" onClick={(e) => this.goToLanding(e)}/>
                                            </div>
                                            <div className="indent-top-20"></div>
                                        </div>
                            </fieldset>
                        </div>
                        </div>
                </div>
                <div className="fixed-bar footer hide text-sm">Powered by VMware Identity Manager™</div>
                </div>
                </form>
                <div className="text-center text-sm login-powered-by">
                    Powered by VMware Identity Manager™
                </div>
            </div>
        );
    }
}

export default Login;


