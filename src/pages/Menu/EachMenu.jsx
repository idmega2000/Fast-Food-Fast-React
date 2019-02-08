/* eslint-disable no-return-assign */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import viewMenuActions from '../../actions/menu/menuActions';
import getTotalQuantity from '../../helpers/getTotalQuantity';


/**
 * @description the Each menu class
 * @class
 */
export class EachMenu extends Component {
    static propTypes = {
      menuDetails: PropTypes.any,
      updateCart: PropTypes.func,
    };

    state = {
      menuDetails: this.props.menuDetails,
      quantity: 1,
      price: this.props.menuDetails.menu_price,
      addButton: 'Add to Cart',
      backgroundColor: '#ee6e73',
    }


    /**
     * @returns {void} -
     */
    componentDidMount() {
      const { menuDetails } = this.state;
      let cartMenuDetails = localStorage.getItem('menuCart');
      if (cartMenuDetails) {
        cartMenuDetails = JSON.parse(cartMenuDetails);
        const menuIdExist = cartMenuDetails
          .find(item => item.menuId === menuDetails.menu_id);
        if (menuIdExist) {
          this.setState({
            quantity: menuIdExist.quantity,
            price: menuIdExist.quantity * menuDetails.menu_price,
            addButton: 'Added to Cart',
            backgroundColor: 'rgb(226, 0, 30)',
          });
        }
      }
    }

    handleAddToCart = () => {
      const { menuDetails, quantity, price } = this.state;
      this.props.updateCart();
      let cartMenuDetails = localStorage.getItem('menuCart');
      if (cartMenuDetails) {
        cartMenuDetails = JSON.parse(cartMenuDetails);
        const menuIdExist = cartMenuDetails.find(item => item.menuId === menuDetails.menu_id);
        if (menuIdExist) {
          toast.info('Menu updated in cart', { autoClose: 3000 });
          menuIdExist.quantity = quantity;
          menuIdExist.menuPrice = price;
          const allQuantity = getTotalQuantity(cartMenuDetails);
          this.props.updateCart(allQuantity);
        } else {
          toast.info('Menu added to cart', { autoClose: 3000 });
          cartMenuDetails.push({
            menuId: menuDetails.menu_id,
            menuName: menuDetails.menu_name,
            menuPrice: menuDetails.menu_price,
            quantity,
          });
          const allQuantity = getTotalQuantity(cartMenuDetails);
          this.props.updateCart(allQuantity);
        }
      } else {
        toast.info('Menu added to cart', { autoClose: 3000 });
        cartMenuDetails = [];
        cartMenuDetails.push({
          menuId: menuDetails.menu_id,
          menuName: menuDetails.menu_name,
          menuPrice: menuDetails.menu_price,
          quantity,
        });
        this.props.updateCart(quantity);
      }
      this.setState({
        addButton: 'Added to Cart',
        backgroundColor: 'rgb(226, 0, 30)',
      });
      localStorage.setItem('menuCart', JSON.stringify(cartMenuDetails));
    }

    addQuantity = () => {
      const { menuDetails, quantity } = this.state;
      this.setState({
        quantity: quantity < 10 ? quantity + 1 : quantity,
      }, () => {
        this.setState({
          price: this.state.quantity * menuDetails.menu_price,
        });
      });
    }

    removeQuantity = () => {
      const { menuDetails, quantity } = this.state;
      this.setState({
        quantity: quantity > 1 ? quantity - 1 : quantity,
      }, () => {
        this.setState({
          price: this.state.quantity * menuDetails.menu_price,
        });
      });
    }


    /**
     * @returns {JSX} - the html of each menu
     */
    render() {
      return (
    <Fragment>
        <div className="row col-4 order-a-meal">
              <div className="red-order-meals">
                  <div className="order-image">
                      <img src={this.state.menuDetails.menu_image} />
                  </div>
                  <div className="order-content">
                      <h3 className="menu-name">{this.state.menuDetails.menu_name}</h3>
                      <div className="selected-price">
                        <div className="unit-price">
                         <b>
                            <p className="menu-price">&#8358;{this.state.price}</p>
                            </b>
                        </div>
                        <div className="menu-plates">
                          <button className="decrement-value"
                          onClick={() => { this.removeQuantity(); }} >-</button>
                            <input type="number" className="quantity-number"
                            value={this.state.quantity} disabled/>
                          <button className="increment-value"
                          onClick={() => { this.addQuantity(); }}>+</button>
                          <div className="testing"></div>
                      </div>
                      </div>
                  </div>
                  <div>
                      <button className="order-btn modal-btn"
                       style={{ backgroundColor: this.state.backgroundColor }}
                      onClick={() => { this.handleAddToCart(this.state.menuDetails); }} >
                      {this.state.addButton}</button>
                  </div>
              </div>
      </div>
  </Fragment>
      );
    }
}


export const mapStateToProps = state => ({
  ...state.menuReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(viewMenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EachMenu);
