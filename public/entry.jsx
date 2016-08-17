import App from './components/app.jsx';
import Editor from './components/edit.jsx';
import News from './components/news.jsx';
import Share from './components/share.jsx';
import Recommendation from './components/recommendation.jsx';
import Index from './components/index.jsx';
import LogBody from './components/enter.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('./styles/edit.css');
require('./styles/share.css');
require('./styles/news.css');
require('./styles/recommendation.css');
require('./styles/index.css');
require('./styles/enter.css');

const route = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRoute component={Index}/>
    <Route path='news' component={News}/>
    <Route path='share' component={Share}/>
    <Route path='edit' component={Editor}/>
    <Route path='remmedation' component={Recommendation}/>
    <Route path='index' component={Index}/>
  </Route>
</Router>;
ReactDOM.render((
  route
), document.getElementById('mainbody'));

if (module.hot) {
  module.hot.accept();
}
