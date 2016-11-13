import React from 'react';
import ReactDOM from 'react-dom';
import App, {AppBasic} from './App';
import Login from './Main/Login.js';
import Landing from './Main/Landing.js';
import MarketPlace, {MarketPlaceSell} from './Main/MarketPlace.js';
import './index.css';
import './skeleton.css';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppBasic}>
      <IndexRoute component={Login} />
    </Route>
 	<Route path="/" component={App}>
      	<Route path="/marketplace/create" component={MarketPlaceSell} />
   		<Route path="/marketplace" component={MarketPlace} />
    </Route>
    <Route path="/" component={App}>
      <Route path="/landing" component={Landing} />
    </Route>
  </Router>,
  document.getElementById('root')
);
