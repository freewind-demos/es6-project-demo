import React from 'react';
import {Link} from 'react-router';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <h3 className="name">Swag Drogue</h3>
        <hr/>
      </div>
    )
  }
}

class LogIn extends React.Component {
  render() {
    return (
      <div className="form-container">
        <img src="my-images/home.png" className="image-home"/>
        <div className="enter-form">
          <span className="label-log">登录</span>
          <span className="sign"><Link to="#">新用户注册</Link></span>
        </div>
        <div className="edit-lines">
          <ul>
            <li className="style-type"><img src="my-images/people.png"/>
              <input type="text" placeholder="请输入登录用户名"/>
            </li>
            <li className="style-type"><img src="my-images/key.png"/>
              <input type="password" placeholder="请输入密码"/>
            </li>
          </ul>
        </div>
        <div className="key">
          <Link to= '#'>忘记密码?</Link>
        </div>
        <button className="enter-button" type="button"><Link to="">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</Link></button>
      </div>
    )
  }
}
class LogBody extends  React.Component {
  render() {
    return (
      <div>
        <Logo/>
        <LogIn/>
      </div>

    )
  }
}

export default LogBody;
