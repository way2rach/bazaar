import EventEmitter from 'events';

export default class DataStore extends EventEmitter  {

    constructor(props) {
        super(props);
        this.name = 'Abstract Store';
    }

    _bind(...methods) {
        methods.forEach( (method) => this[method] = this[method].bind(this) );
    }
}

export const CHANGE_EVENT = 'change';