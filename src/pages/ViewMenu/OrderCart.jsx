/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
/* eslint-disable no-return-assign */

import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import AuthHeader from '../../components/AuthHeader';
import Footer from '../../components/Footer';
import viewMenuActions from '../../actions/ViewMenu/viewMenuActions';
import EachOrderMenu from './EachOrderMenu';
import placeOrderValidation from '../../helpers/placeOrderValidation';
import getTotalQuantity from '../../helpers/getTotalQuantity';
import orderThanks from '../../img/new33.jpg';


/**
 * @class- OrderCart
 *
 */
export class OrderCart extends Component {
  static propTypes = {
    user: PropTypes.any,
    menuDetails: PropTypes.any,
    handleTotal: PropTypes.any,
    placeOrder: PropTypes.func,
    error: PropTypes.bool,
    history: PropTypes.any,
    response: PropTypes.any,
    success: PropTypes.bool,
    updateCartIcon: PropTypes.func,
    isLoading: PropTypes.bool,
  }

  state = {
    error: {},
    totalPrice: '',
    totalQuantity: '',
    displayModal: false,
    orderSuccess: false,
    ordererInfo: {
      ordererName: '',
      ordererPhone: '',
      ordererAddress: '',
    },
    menuDetails: (JSON.parse(localStorage.getItem('menuCart'))),
    AllMenuInfo: (JSON.parse(localStorage.getItem('menuCart'))),
  };

  /**
   * @param {object} e - the object to be acted upon
   * @return {void} -
   */
  handleInputChange = (e) => {
    const { ordererInfo } = this.state;
    this.setState({
      ordererInfo: {
        ...ordererInfo,
        [e.target.id]: e.target.value,
      },
    });
  }

  /**
   * @description react lifecycle for when component mount
   * @return {void} -
   */
  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push('/login');
    }
    this.getTotalPrice();
    this.getTotalQuantity();
    const cartMenuDetails = JSON.parse(localStorage.getItem('menuCart'));
    const totalQuantity = getTotalQuantity(cartMenuDetails);
    this.props.updateCartIcon(totalQuantity);
  }

  handleTotal = () => {
    this.setState({
      AllMenuInfo: (JSON.parse(localStorage.getItem('menuCart'))),
    }, () => {
      this.getTotalPrice();
      this.getTotalQuantity();
    });
  }

  /**
   * @returns {void} -
   * @param {object}  e -
   */
  handlePlaceOrder = (e) => {
    e.preventDefault();
    const { ordererInfo: { ordererName, ordererPhone, ordererAddress } } = this.state;
    const { ordererInfo } = this.state;

    const error = placeOrderValidation(ordererInfo);
    if (error) {
      toast.error(error);
      return false;
    }
    let menuCartDetails = localStorage.getItem('menuCart');
    const token = localStorage.getItem('token');
    menuCartDetails = JSON.parse(menuCartDetails);
    const payload = {
      recipientName: ordererName,
      orderPhone: ordererPhone,
      orderAddress: ordererAddress,
      menuCart: menuCartDetails,
    };
    this.props.placeOrder(payload, token);
  }

  /**
   * @description - decides if component should throw error or update
   * @param {object} nextProps - react next prop to target next prop
   * @returns {bool} - if the component should be updated or not
   */
  shouldComponentUpdate(nextProps) {
    if (this.props.error !== nextProps.error && nextProps.error === true) {
      toast.error(nextProps.response);
      return false;
    }
    if (this.props.success !== nextProps.success
        && nextProps.success === true) {
      toast.info(nextProps.response);
      this.setState({
        orderSuccess: true,
        AllMenuInfo: '',
      });
      localStorage.removeItem('menuCart');
      this.props.updateCartIcon();
      setTimeout(() => {
        this.props.history.push('/menu');
      }, 5000);
    }
    return true;
  }

  /**
   * @returns {void} -
   */
  closeModal() {
    this.setState({
      displayModal: false,
    });
  }

  /**
   *
   * @returns {Integer}  - all price.
   */
  getTotalPrice() {
    let totalPrice = 0;
    if (this.state.AllMenuInfo) {
      this.state.AllMenuInfo.map(menu => (totalPrice += (menu.menuPrice * menu.quantity)));
      this.setState({
        totalPrice,
      });
    } else {
      this.setState({
        AllMenuInfo: false,
      });
    }
  }

  /**
   * @returns {Integer} - all the quantity
   */
  getTotalQuantity() {
    let totalQuantity = 0;
    if (this.state.AllMenuInfo) {
      this.state.AllMenuInfo.map(menu => (totalQuantity += menu.quantity));
      this.setState({
        totalQuantity,
      });
    }
  }

  openPlaceOrderModal = () => {
    this.setState({
      displayModal: true,
    });
  }


  /**
   * @function
   * @returns {JSX} JSX
   */
  render() {
    return (
    <Fragment>

          <AuthHeader userName={this.props.user ? this.props.user.userName : 'user'} />
            <div className="main-body centerdivh cart-page">
            <h1>Order Cart</h1>
            {this.state.AllMenuInfo ? (
                <div>
                    <div className='centerdiv container order-table-container'>
                <table className='order-table'>
                    <thead >
                        <tr className="table-title">
                        <td>Menu Name</td>
                        <td>Unit Price</td>
                        <td>Quantity</td>
                        <td>Menu Price</td>
                        <td>Reactions</td>
                        </tr>
                    </thead>
                    <tbody>
                {Array.isArray(this.state.menuDetails)
                            && this.state.menuDetails.map(menu => (<EachOrderMenu key={menu.menuId} handleTotal={ this.handleTotal } menuDetails={menu} />))}

                    <tr className='table-row'>
                        <td>Total</td>
                        <td></td>
                        <td>{this.state.totalQuantity}</td>
                        <td>&#8358;{this.state.totalPrice}</td>
                        <td></td>
                    </tr>
                    </tbody>

                </table>
            </div>
            <div className="place-order-div">
                <button id="placeOrderBtn"
                onClick={this.openPlaceOrderModal}
                className="modal-btn place-order-btn">Place Order</button>
            </div>
                </div>
            ) : (
                <h3>No Menu Selected Yet</h3>
            )}

            </div>

            {
                this.state.displayModal ? (
                    <div id="myModal" className="modal">
                    <div className="modal-content">
                    { !this.state.orderSuccess ? (
                        <div>
                          <span className="close"
                          onClick={() => { this.closeModal(); }}>&times;</span>
                          <div className="modal-body del-order-body">
                              <form className="order-form" onSubmit={this.handlePlaceOrder}>
                                  <h1 className="login-form-title">Complete Order</h1>
                                  <div className="input-wrapper">
                                      <div className="input-div">
                                          <span>
                                              <i className="fas fa-user">Recipient Name</i>
                                          </span>
                                          <span className="is-required">*</span>
                                      </div>
                                      <input onChange={this.handleInputChange}
                                      className="order-input order-name"
                                      type="text" name="username" id="ordererName"
                                      placeholder="Enter Phone Number"
                                      value={this.state.ordererInfo.ordererName} />
                                  </div>
                                  <div className="input-wrapper">
                                      <div className="input-div">
                                          <span>
                                              <i className="fas fa-phone"> Telephone</i>
                                          </span>
                                          <span className="is-required">*</span>
                                      </div>
                                      <input className="order-input order-phone"
                                      onChange={this.handleInputChange}
                                      type="text" name="username" id="ordererPhone"
                                      placeholder="Enter Phone Number"
                                      value={this.state.ordererInfo.ordererPhone} />
                                  </div>
                                  <div className="input-wrapper">
                                      <div className="input-div">
                                          <span>
                                              <i className="fas fa-home"> Delivery Address</i>
                                          </span>
                                          <span className="is-required">*</span>
                                      </div>
                                      <textarea className="order-text-area order-address"
                                      onChange={this.handleInputChange}
                                      cols="30" id="ordererAddress" rows="10"
                                      placeholder="Enter Delivery Address"
                                      value={this.state.ordererInfo.ordererAddress}></textarea>
                                  </div>
                                  {!this.props.isLoading ? (
                                    <div className="form-btn centerdiv">
                                    <button className="order-modal-btn"
                                    type="submit">Submit Order</button>
                                </div>
                                  ) : (
                                    <div className='centerdiv'>
                                    <ClipLoader
                                    sizeUnit='px'
                                    size={30}
                                    color='#ee6e73'
                                    loading={true}
                                      />
                                  </div>
                                  ) }

                              </form>

                          </div>
                      </div>
                    ) : (
                      <div className="modal-body del-order-body">
                          <img className='thank-you' src={orderThanks} />
                      </div>
                    )
                    }

                    </div>
                    </div>

                ) : (
                  null
                )
            }
          <Footer />

    </Fragment>
    );
  }
}


export const mapStateToProps = state => ({
  ...state.viewMenuReducer,
});

export const
  mapDispatchToProps = dispatch => bindActionCreators(viewMenuActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderCart);
