import React from 'react';

class HomePage extends React.Component {
  render() {
    return (<div>
      <h1 style="text-align:center;font-size: 40px;color: #00b3ee;height: 70px">校园Runner</h1>
      <nav className="navbar navbar-default" role="navigation" style="background-color: transparent;">
        <div>
          <ul className="nav navbar-nav" style="font-size: 20px">
            <li><a href="#home">首页</a></li>
            <li><a href="http://jd.com">图书馆</a></li>
            <li><a href="http://xiaomi.com">取快递</a></li>
          </ul>
        </div>
      </nav>
    </div>)
  }
}

export default HomePage;