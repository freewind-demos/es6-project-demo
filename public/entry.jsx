import Mainbody from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
require('jquery');
require("bootstrap-webpack");
require('../styles/edit.css');

ReactDOM.render(
    <div>
      <Mainbody/>
    </div>,
    document.getElementById("mainbody")
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
