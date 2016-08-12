import Mainbody from './edit.jsx';
import Share from './share.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
require('jquery');
require("bootstrap-webpack");
require('../styles/edit.css');

// ReactDOM.render(
//     <div>
//       <Mainbody/>
//     </div>,
//     document.getElementById("mainbody")
// );

ReactDOM.render((
    <Router>
        <Route path='/' component={Mainbody}/>
        <Route path='/share' component={Share}/>
    </Router>
),document.getElementById('mainbody'))

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
