import React from 'react';

class Menulist extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="list-inline menu">
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">Share</Link></li>
                    <li><Link to="#">News</Link></li>
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
                <Menulist/>
                <Article/>
            </div>
        )
    }
}

export default Share;
