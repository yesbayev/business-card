import React from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">

        <div className="Header-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Header-card">
          <h1 className="lg-heading">
            Максат
            <span className="text-secondary"> Есбаев</span>
          </h1>
          <h2 className="sm-heading">
            Frontend 
            <span className="text-secondary"> Developer</span>
          </h2>
          <div className="icons">
            <a href="https://www.vk.com/yesbayev" target="_blank">
              <i className="fab fa-vk fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/director.max/" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://github.com/yesbayev" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="Header-portrait"></div>
        
      </header>
    )
  }
}
export default Header;
