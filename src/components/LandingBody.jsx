import React, { Component } from 'react';
import '../styles/main.css';
/**
 * @description The Landing page Body component
 */
export default class LandingBody extends Component {
  /**
  * @returns {JSX}- Returns Landing page body jsx
  */
  render() {
    return (
      <div className="main-body">
        <div className="main-im-cov">
          <div className="main-image-sec">
            <img id="backimage" src="./src/img/img12.jpg" />
          </div>
          <div id="front-content-cover">
            <div id="front-content-con">
              <h1>Your Online Fast Food Fast</h1>
              <a href="pages/fastfood.html" className="anchor-button"> Order Now</a>
            </div>
            <div id="arrowP" className="arrow bounce">
              <a id="arrowAnchor" href="#BrandActivities">
                <p className="fa fa-arrow-down fa-2x" href="#thisss"></p>
              </a>
            </div>
          </div>
          <div className="brand-menu" >
            <div className="brand-activities" id="BrandActivities">
              <div className="  row col-3 brand-act-cov">
                <div className="brand-act-images">
                  <img src="./src/img/delicious-food.jpg" alt="Delicious food" />
                </div>
                <h3>Delicious Food</h3>
                <p> You want to have a taste of the food that
                  makes your day bloosom, Order your favourite food from the best restaurants
                  in town.</p>
              </div>
              <div className=" row col-3 brand-act-cov">
                <div className="brand-act-images">
                  <img src="./src/img/delivering-clipart.png" alt="quick delivery" />
                </div>
                <h3>Quick Delivery</h3>
                <p>want your your ordered food to get
                  to you in not time, {"we've"} got your back.
                  we make sure the food is in the proper
                  condition when it gets to you</p>
              </div>
              <div className=" row col-3 brand-act-cov">
                <div className="brand-act-images">
                  <img src="./src/img/maxresdefaultt.png" alt="Order in Advance" />
                </div>
                <h3>Ordering in Advance</h3>
                <p> You have an evnet or meeting coming up,
                  order your food in advance. This allow you to focus on the meeting and leave
                  out area of food to us.
                </p>
              </div>
            </div>
            <div className="order-meals">
              <div className="row col-4 order-a-meal">
                <div className="red-order-meals">
                  <div className="order-image">
                    <img src="./src/img/delicious-buffet-foodss.png" />
                  </div>
                  <div className="order-content">
                    <h3>Salad and Chicken</h3>
                    <p>Price: NGN 1,000</p>
                  </div>
                  <div>
                    <a href="pages/fastfood.html"
                      className="anchor-button andchor-full-width">Order</a>
                  </div>
                </div>
              </div>
              <div className=" row col-4 order-a-meal">
                <div className="red-order-meals">
                  <div className="order-image">
                    <img src="./src/img/cool-meal.jpg" />
                  </div>
                  <div className="order-content">
                    <h3>Burger and Fries</h3>
                    <p>Price: NGN 1,000</p>
                  </div>
                  <div>
                    <a className="anchor-button andchor-full-width"
                      href="pages/fastfood.html">Order</a>
                  </div>
                </div>
              </div>
              <div className="row col-4 order-a-meal">
                <div className="red-order-meals">
                  <div className="order-image">
                    <img src="./src/img/fried-rice-by-afrolems-nigerian-stylee.png" />
                  </div>
                  <div className="order-content">
                    <h3>Rice and chicken</h3>
                    <p>Price: NGN 1,000</p>
                  </div>
                  <div>
                    <a className="anchor-button andchor-full-width"
                    href="pages/fastfood.html">Order</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
