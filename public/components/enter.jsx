import React from 'react';
import {Link} from 'react-router';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <h3 className="web-name">Swag Drogue</h3>
        <hr/>
      </div>
    )
  }
}

class LogIn extends React.Component {
  render() {
    return (
      <div className="form-container">
        <div className="enter-form">
          <span className="label-log">登录</span>
          <span className="sign"><Link to="#">新用户注册</Link></span>
        </div>
        <div className="edit-lines">
          <ul className="list-unstyled">
            <li className="people"><img src="my-images/people.png" />
              <input type="text" placeholder="请输入登录用户名" className="user-name"/>
            </li>
            <li className="key"><img src="my-images/key.png" />
              <input type="password" placeholder="请输入密码" className="user-password"/>
            </li>
          </ul>
        </div>
        <div className="key-word">
          <Link to='#'>忘记密码?</Link>
        </div>
        <Link to="#"><button type="button" className="btn btn-default">登录</button></Link>
      </div>
    )
  }
}
class LogBody extends React.Component {
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
