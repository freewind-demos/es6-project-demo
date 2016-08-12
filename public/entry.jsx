import MainBody from './edit.jsx';
import Share from './share.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('../styles/edit.css');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={MainBody}/>
    <Route path='/share' component={Share}/>
  </Router>
), document.getElementById('mainbody'))

if (module.hot) {
  module.hot.accept();
}
