import React, {Component} from 'react';
import {Link} from 'react-router';
class NewsBody extends React.Component {
  render() {
    return (
      <div className="room">
        <div className="news">
          <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active">
                <img width='1500px' src="./pictures/Selection_015.png" alt="First slide"/>
              </div>
              <div className="item">
                <img width='1500px' src="./pictures/Selection_016.png" alt="Second slide"/>
              </div>
              <div className="item">
                <img width='1500px' src="./pictures/Selection_017.png" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
            <a className="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
          </div>
          <p >what`s news</p>
          <ul className="list-inline img-list">
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_003.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_004.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_001.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_002.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_005.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_001.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_002.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_003.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_004.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_006.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_005.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_001.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_008.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_003.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_004.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_007.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_005.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_001.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_002.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_003.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_004.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_005.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_004.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_005.png"/></Link>
            </li>
            <li>我们是共产主义接班人<br/><Link to="#"><img width="170px" height="140px" src="pictures/Selection_003.png"/></Link>
            </li>
          </ul>
          <nav>
            <ul className="nav nav-tabs">
              <li className="active">
                <Link to="#">Home</Link>
              </li>
              <li><Link to="#">1</Link></li>
              <li><Link to="#">2</Link></li>
              <li><Link to="#">3</Link></li>
              <li><Link to="#">4</Link></li>
              <li><Link to="#">6</Link></li>
              <li><Link to="#">7</Link></li>
              <li><Link to="#">8</Link></li>
              <li><Link to="#">9</Link></li>
              <li><Link to="#">10</Link></li>
              <li><Link to="#">...</Link></li>
            </ul>
          </nav>
        </div>

      </div>
    )
  }
}
class News extends React.Component {
  render() {
    return (
      <div>
        <NewsBody/>
      </div>
    )
  }
}

export default News;
