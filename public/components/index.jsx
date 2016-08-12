import MenuList from './menu-list.jsx';
import React from 'react';

class Caroucel extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="span8">
            <div id="caroucel">
              <div id="myCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img src="images/index-show1.jpg" alt="First slide"/>
                  </div>
                  <div className="item">
                    <img src="images/index-show2.jpg" alt="Second slide"/>
                  </div>
                  <div className="item">
                    <img src="images/index-show3.jpg" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control left" href="#myCarousel" data-slide="prev"></a>
                <a className="carousel-control right" href="#myCarousel" data-slide="next"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Show extends React.Component {
  render() {
    return (
      <div className="span8">
        <div className="share-pic">
          <div className="share-title text-center">SD红人
            <div className="share">
              <div className="share-left">
                <div className="left-row1">
                  <img src="images/share3.jpg" className="img-responsive"/>
                  <img src="images/share3.jpg" className="img-responsive"/>
                </div>
                <div className="left-row2">
                  <span>文艺</span>
                  <span>原宿</span>
                  <span>碎花</span>
                  <span>复古</span>
                </div>
              </div>
              <div className="share-right">
                <div className="right-row1">
                  <div className="show first">
                    <img src="images/share1.jpg" className="img-responsive"/>
                    <span>By-猫猫</span>
                  </div>
                  <div className="show">
                    <img src="images/share1.jpg" className="img-responsive"/>
                    <span>By-猫猫</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class Index extends React.Component {
  render() {
    return (
      <div>
        <MenuList/>
        <Caroucel/>
        <Show/>
        <Show/>
        <Show/>
      </div>
    )
  }
}

export default Index;
