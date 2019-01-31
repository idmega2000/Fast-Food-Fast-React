
import React from 'react';
import '../styles/headers.css';

/**
 * @description The footer component
 * @returns {JSX}- Returns the footer jsx
 */
const NavBar = () => <section id="slide-nav" className="nav-dropdown">
<a href="fastfood.html">Fast Food</a>
<a href="user-order-history.html">Order History</a>
<a id="logoutBtn" className="logout-btn" href="login.html">Logout</a>
</section>;

export default NavBar;
