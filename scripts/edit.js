// import React from 'react';



let Menulist = React.createClass({
    render: function () {
        return (
            <header className="header">
                <ul className="list-inline menu">
                    <li><a href="edit.html">Home</a></li>
                    <li><a href="#share">Share</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Recommendation</a></li>
                </ul>
                <div className="login">
                    <ul className="list-inline">
                        <li><a href="#">登录</a></li>
                        <li><a href="#">注册</a></li>
                        <li><a href="#">+</a></li>
                    </ul>
                </div>
            </header>
        )
    }
})

let Editor = React.createClass({
    render: function () {
        return (
            <div className="container-fluid wrapper">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">标题：</label>
                        <input type="text" id="title" placeholder="请在此输入标题" required/>
                    </div>
                    <label htmlFor="text-body">内容：</label>
                    <div id="text-body">
                        <div className="upload">
                        </div>
                        <div className="p-body" contentEditable="true">在此输入正文</div>
                    </div>
                    <button className="submit">发布</button>
                </form>
            </div>
        )
    }
})

ReactDOM.render(
    <div>
        <Menulist/>
        <Editor/>
    </div>,
    document.getElementById("mainbody")
)