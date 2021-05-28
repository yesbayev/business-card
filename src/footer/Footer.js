import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
    <footer className="footer-classic"
      style={{ background: "#434343", color: "#fff" }} >
        <h3 className="lg-heading">
          Code on <span className="text-secondary">React</span>
        </h3>
    </footer>
    )
  }
}
export default Footer;
