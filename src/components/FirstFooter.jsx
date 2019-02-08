import React, { Component } from 'react';
import '../styles/main.css';

/**
 * @description The Landing page first footer component
 */
export default class FirstFooter extends Component {
  /**
  * @returns {JSX}- Returns the the firstfooter jsx
  */
  render() {
    return (
        <div id="first-footerbox">
        <div id="first-footer-cover">
        </div>
          <div id="first-footer-content">
              <h2>Order for Your Delicious Fast Food Today</h2>
              <a href="/menu"
              className="anchor-button">Order Now</a>
          </div>
        </div>
    );
  }
}
