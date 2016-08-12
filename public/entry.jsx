import MainBody from './components/edit.jsx';
import NewsBody from './components/news.jsx'
import Share from './components/share.jsx';
import RemBody from './components/remmedation.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('./styles/edit.css');
require('./styles/share.css');
require('./styles/news.css');
require('./styles/recommendation.css');


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={MainBody}/>
    <Route path="/news" component={NewsBody}/>
    <Route path='/share' component={Share}/>
    <Route path='/remmedation' component={RemBody}/>
  </Router>
), document.getElementById('mainbody'))

if (module.hot) {
  module.hot.accept();
}
