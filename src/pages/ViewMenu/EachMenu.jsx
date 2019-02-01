import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
     * @returns {JSX} The single comment box html
     * @param {object} props - The data that is passed in.
     */
const EachMenu = props => (
    <Fragment>
        <div className="row col-4 order-a-meal">
              <div className="red-order-meals">
                  <div className="order-image">
                      <img src={props.menuDetails.menu_image} />
                  </div>
                  <div className="order-content">
                      <h3 className="menu-name">{props.menuDetails.menu_name}</h3>
                      <div className="selected-price">
                        <div className="unit-price">
                          <p><b>
                              <p className="menu-price">&#8358;{props.menuDetails.menu_price}</p>
                              </b></p>
                        </div>
                        <div className="menu-plates">
                          <button className="decrement-value" >-</button>
                          <input type="number" className="quantity-number" value="1" />
                          <button className="increment-value" >+</button>
                          <div className="testing"></div>
                      </div>
                      </div>
                  </div>
                  <div>
                      <button className="order-btn modal-btn">Add to Cart</button>
                  </div>
              </div>
      </div>
  </Fragment>
);

EachMenu.propTypes = {
  menuDetails: PropTypes.object,
};
export default EachMenu;
