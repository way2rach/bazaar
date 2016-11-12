import React, {Component} from 'react'

export class ViewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.name = 'View Component';
        this.di = new Injector();
    }

    _bind(...methods) {
        //this.setState = this.setState.bind(this);
        methods.forEach( (method) => this[method] = this[method].bind(this) );
    }

    toString() {
        return this.name;
    }
}