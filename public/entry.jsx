import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LoginPage from './jsxDocument/login.jsx';
import HomePage from './jsxDocument/home-page.jsx';
import Delivery from './jsxDocument/deliveryPage.jsx';
import Book from './jsxDocument/bookPage.jsx';
import personalInfo from './jsxDocument/personal-information.jsx';
import App from './jsxDocument/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
require('jquery');
require("bootstrap-webpack");
import $ from 'jquery';

// ReactDOM.render(
//   <LoginPage />,
//   document.getElementById("content")
// );
const route = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage}/>
        <Route path='LoginPage' component={LoginPage}/>
        <Route path='personalInfoPage' component={personalInfo}/>
        <Route path='homePage' component={HomePage} />
        <Route path='bookPage' component={Book}/>
        <Route path='deliveryPage' component={Delivery}/>
    </Route>
</Router>;
// use jquery
ReactDOM.render(
    route,
    document.getElementById("content")
);
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
