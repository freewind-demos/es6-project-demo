import React from 'react';

class Book extends React.Component{
    render(){
        return (
            <div>
                <div className="all">
                    <div className="top common">
                        <span className="title">还书帮</span>
                    </div>
                    <div className="middle common">
                        <div className="active">
                            <span>王大锤：</span>
                            <div>
                                下午15：30之前，西区图书馆找人帮还书
                            </div>
                        </div>
                        <div className="active">
                            <span>李小孩：</span>
                            <div>
                                下午15：30，去西区图书馆还书，可帮人代还，有需要的同学可以联系我
                            </div>
                        </div>
                        <div className="active">
                            <span>我：</span>
                            <div>
                                下午15：30，去西区图书馆还书，可帮人代还，有需要的同学可以联系我
                            </div>
                        </div>

                    </div>

                </div>
                <div className="bottom common">
                    <input className="form-control" type="text" placeholder="我要发布" />
                    <button className="btn-link" type="button">发送</button>
                </div>
            </div>
        )
    }
}

export default {
    Book
};