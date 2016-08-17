import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <div className="row">
          <div className="col-xs-8">
            <div className="article">
              <h3 className="article-head">匆匆</h3>
              <img src="./images/kuotuiku.jpg" className="img-responsive img-thumbnail"/>
              <p>印花棕t搭上竖条黑腰带过膝阔腿裤喷出盛夏清凉，阔腿裤是今年都裤装流行走向，这套搭配很好的诠释了阔腿裤的亮点，脚底的白色运动鞋更是增添一种色彩视觉的碰撞。</p>
            </div>
            <div className="comment">
              <h4>评论</h4>
              <div className="vote-comment">
                <textarea cols="78" rows="8" className="comment-body"></textarea>
                <div className="vote">
                  <span className="glyphicon glyphicon-heart-empty" onClick=""></span>
                </div>
                <button className="show-comments">发表评论</button>
              </div>
            </div>
          </div>
          <div className="col-xs-3 col-xs-offset-1 side">
            <img className="img-responsive" src="../images/sidebar-img.jpg"/>
          </div>
        </div>
      </div>
    )
  }
}

class Share extends React.Component {
  render() {
    return (
      <div>
        <Article/>
      </div>
    )
  }
}

export default Share;
