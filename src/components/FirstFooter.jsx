import React, { Component, Fragment } from 'react'
import '../styles/main.css';

export default class FirstFooter extends Component {
    render() {
      return (
        <div id="first-footerbox">

        <div id="first-footer-cover">
        </div>
        <div id="first-footer-content">
            <h2>Order for Your Delicious Fast Food Today</h2>
            <a href="pages/fastfood.html" className="anchor-button">Order Now</a>
        </div>
        </div>
      );
    }
  }
  