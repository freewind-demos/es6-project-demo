import MenuList from './menulist.jsx';
import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <div className="row">
          <div className="col-xs-5">
            <h3 className="article-head">匆匆</h3>
            <img src="./images/kuotuiku.jpg"/>
          </div>
          <div className="col-xs-5 col-xs-offset-2 side"></div>
        </div>
      </div>
    )
  }
}

class Share extends React.Component {
  render() {
    return (
      <div>
        <MenuList/>
        <Article/>
      </div>
    )
  }
}

export default Share;
