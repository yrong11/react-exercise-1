import React from 'react';
import avatar from '../../assets/avatar.jpg';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={avatar} className="avatar" />
        <div className="introduction">
          <p>hello,</p>
          <h1>my name is kamil 24yo and this is my resume/cv</h1>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Header;
