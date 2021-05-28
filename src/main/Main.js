import React from 'react';
import './Main.css';
import JK from './JK.jpg';
import Porten from './Porten.jpg';
import portfolio from './portfolio.jpg';


class Main extends React.Component {
  render() {
    return (
      <main className="App-main" >
        
        <div className="my-contacts">
          <h1 className="lg-heading">
            Мои <span className="text-secondary">контакты</span>
          </h1>
          <div className="boxes">
            <h3 className="box-contacts">
              <div className="circle"></div>
              Телефон: <span className="text-secondary">+7(708)702-702-3</span>
            </h3>
            <h3 className="box-contacts">
              <div className="circle"></div>
              Email: <span className="text-secondary">yesbayev.maxat@gmail.com</span>
            </h3>
          </div>
        </div>
        <div className="my-works">
          <h1 className="lg-heading">
              Мои <span className="text-secondary">работы</span>
          </h1>
          <div className="item">
            <a href="https://yesbayev.github.io/JK/main.html" target="_blank" className="item-work">
              <img src={JK} alt="logo" />
            </a>
            <a href="https://yesbayev.github.io/Portfolio/main.html" target="_blank" className="item-work">
              <img src={portfolio} alt="logo" />
            </a>
            <a href="https://yesbayev.github.io/Porten/main.html" target="_blank" className="item-work">
              <img src={Porten} alt="logo" />
            </a>
          </div>
        </div>

      </main>
    )
  }
}
export default Main;
