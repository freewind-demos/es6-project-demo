import React from 'react';
import {Router, Route,Link} from 'react-router';

class Menulist extends React.Component {
    render() {
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
}

class Editor extends React.Component {
    render() {
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
                    <button className="submit">
                        <Link to="/share">发布</Link>
                    </button>
                </form>
            </div>
        )
    }
}

class Mainbody extends React.Component {
    render() {
        return (
            <div>
                <Menulist/>
                <Editor/>
            </div>
        )
    }
}

export default Mainbody;