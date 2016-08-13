import MenuList from './menu-list.jsx';
import React from 'react';
import {Link} from 'react-router';

class Editor extends React.Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <form>
          <div className="form-group">
            <label htmlFor="title"><h3>标题：</h3></label>
            <input type="text" className="form-control" id="title" placeholder="请在此输入标题" required/>
          </div>
          <label htmlFor="text-body"><h3>内容：</h3></label>
          <div id="text-body">
            <div className="upload">
            </div>
            <div className="p-body" contentEditable="true" placeholder="在此输入正文"></div>
          </div>
          <button className="submit">
            <Link to="/share">发布</Link>
          </button>
        </form>
      </div>
    )
  }
}

class MainBody extends React.Component {
  render() {
    return (
      <div>
        <MenuList/>
        <Editor/>
      </div>
    )
  }
}

export default MainBody;
