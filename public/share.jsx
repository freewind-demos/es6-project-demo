import React from 'react';

class Menulist extends React.Component{
    render(){
        return(
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

class Article extends React.Component{
    render(){
        return (
            <div className="container-fluid wrapper">
                <div className="row">
                    <div className="col-xs-5">
                        <h3 className="article-head">匆匆</h3>
                        <img src="../images/kuotuiku.jpg"/>
                    </div>
                    <div className="col-xs-5 col-xs-offset-2 side"></div>
                </div>
            </div>
        )
    }
}

class Share extends React.Component{
    render(){
        return(
            <div>
                <Menulist/>
                <Article/>
            </div>
        )
    }
}

export default Share;