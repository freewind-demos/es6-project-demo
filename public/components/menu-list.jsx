import React from 'react'
import {Link} from 'react-router'

class MenuList extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="list-inline menu">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">Share</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="#">Recommendation</Link></li>
        </ul>
        <div className="login">
          <ul className="list-inline">
            <li><Link to="#">登录</Link></li>
            <li><Link to="#">注册</Link></li>
            <li><Link to="#">+</Link></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default MenuList;
