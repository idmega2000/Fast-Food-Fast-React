import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import getTotalQuantity from '../../helpers/getTotalQuantity';
import viewMenuActions from '../../actions/menu/menuActions';


/**
 * @description the Each menu clsas
 * @class
 */
export class EachMenu extends Component {
    static propTypes = {
      menuDetails: PropTypes.object,
      updateCart: PropTypes.func,
      handleTotal: PropTypes.func,
    };

    state = {
      thisMenu: true,
      quantity: this.props.menuDetails.quantity,
      menuId: this.props.menuDetails.menuId,
      amenuTotalPrice: (this.props.menuDetails.menuPrice * this.props.menuDetails.quantity),
    }


    /**
     *@returns {void}
     */
    handleMenuDelete() {
      this.setState({
        thisMenu: false,
      });
      const menuDetail = (JSON.parse(localStorage.getItem('menuCart')));
      const afterDelMenuCart = menuDetail.filter(menu => menu.menuId !== this.state.menuId);
      if (afterDelMenuCart.length > 0) {
        localStorage.setItem('menuCart', JSON.stringify(afterDelMenuCart));
      } else {
        localStorage.removeItem('menuCart');
      }
      toast.info('Menu deleted successfully', { autoClose: 3000 });
      this.props.handleTotal();
      const cartMenuDetails = JSON.parse(localStorage.getItem('menuCart'));
      const totalQuantity = getTotalQuantity(cartMenuDetails);
      this.props.updateCart(totalQuantity);
    }

    /**
     *@returns {void}
     @param {object} event
     */
    handleQuantityChange = (event) => {
      const chosenQuantity = event.target.options[event.target.selectedIndex].value;
      this.setState({
        quantity: chosenQuantity,
        amenuTotalPrice: (chosenQuantity * this.props.menuDetails.menuPrice),
      }, () => {
        const menuDetails = JSON.parse(localStorage.getItem('menuCart'));
        const menuCart = menuDetails.find(meal => meal.menuId === this.state.menuId);
        menuCart.quantity = Number(this.state.quantity);
        localStorage.setItem('menuCart', JSON.stringify(menuDetails));
        this.props.handleTotal();
        const cartMenuDetails = JSON.parse(localStorage.getItem('menuCart'));
        const totalQuantity = getTotalQuantity(cartMenuDetails);
        this.props.updateCart(totalQuantity);
      });
    }

    /**
     * @returns {JSX} - the html of each menu
     */
    render() {
      const { menuDetails: { menuName, menuPrice } } = this.props;
      return (
    <Fragment>
        {
            this.state.thisMenu ? (
        <tr className='table-row'>
            <td>{menuName}</td>
            <td>&#8358;{menuPrice}</td>
            <td> <div>
        <select value={this.state.quantity}
        onChange={this.handleQuantityChange} className="menu-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        </div></td>
            <td>&#8358;{this.state.amenuTotalPrice}</td>
            <td><button className="del-meal-btn modal-btn"
            onClick={() => { this.handleMenuDelete(); }} >Delete</button></td>
        </tr>
            ) : (
              null
            )
        }

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
