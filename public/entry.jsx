import MainBody from './components/edit.jsx';
import Share from './components/share.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('./styles/edit.css');
require('./styles/share.css');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={MainBody}/>
    <Route path='/share' component={Share}/>
  </Router>
), document.getElementById('mainbody'))

if (module.hot) {
  module.hot.accept();
}
