

import React from 'react';
import '../styles/headers.css';

/**
 * @description The footer component
 * @returns {JSX}- Returns the footer jsx
 */
const AuthNavBar = () => <section id="slide-nav">
<a href="/all-food"> All Menu</a>
<a href="/orders.html">Orders History</a>
<a href="/add-fastfood.html">Add Menu</a>
<a href="/menu">User Page</a>
<a className="logout-btn" onClick="loggoutUser();" href="../login.html">Logout</a>
</section>;

export default AuthNavBar;
