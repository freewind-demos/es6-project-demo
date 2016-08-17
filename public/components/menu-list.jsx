import React from 'react'
import {Link} from 'react-router'

class MenuList extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="list-inline menu">
          <li><Link to="/index">Home</Link></li>
          <li><Link to="/share">Share</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/remmedation">Recommendation</Link></li>
        </ul>
        <div className="login">
          <ul className="list-inline">
            <li><Link to="/enter">登录</Link></li>
            <li><Link to="#">注册</Link></li>
            <li><Link to="/edit">+</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default MenuList;
