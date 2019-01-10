import React, { Component } from 'react';
import '../styles/main.css';

/**
 * @description The footer component
 */
export default class Footer extends Component {
  /**
  * @returns {JSX}- Returns the footer jsx
  */
  render() {
    return (
      <footer id="mainfooter">
        <p>Fast-Food-Fast &copy; 2018
            <a href="#">Terms & Privacy</a>
        </p>
      </footer>
    );
  }
}
