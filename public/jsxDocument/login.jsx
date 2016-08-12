import React from 'react';

class Login extends React.Component{
 render(){
  return <div className="container">
      <form className=" col-md-4 col-md-offset-4 form-horizontal" action="http://www.baidu.com" method="get">
          <h3 className="title">登录校园Runner</h3>
          <div className="form-group">
              <label htmlFor="inputStuID" className="col-md-2 control-label">学号</label>
              <div className="col-md-10">
                  <input type="text" className="form-control" id="inputStuID" placeholder="Student ID"/>
              </div>
          </div>
          <div className="form-group">
              <label htmlFor="inputPassword" className="col-md-2 control-label">密码</label>
              <div className="col-md-10">
                  <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
              </div>
          </div>
          <div className="form-group">
              <div className="button-center">
                  <button type="submit" className="btn btn-primary">登录</button>
                  <button type="reset" className="btn btn-primary">重置</button>
              </div>
          </div>
      </form>
  </div>
 }
}

class Logo extends React.Component{
 render(){ return <div className="logo"> runner logo</div>}
}


class LoginPage extends React.Component{
    render(){
        return <div className="loginPage">
            <Logo />,
            <Login />
        </div>
    }
}
export default LoginPage;