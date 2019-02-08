import axios from 'axios';
import * as actionTypes from './actionTypes';
import HOST from '../../helpers/hostUrl';


export const viewMenuStart = () => ({
  type: actionTypes.VIEW_MENU_START,
});

export const viewMenuSuccess = payload => ({
  type: actionTypes.VIEW_MENU_SUCCESS,
  payload,
});

export const viewMenuFail = payload => ({
  type: actionTypes.VIEW_MENU_FAIL,
  payload,
});

export const placeOrderStart = () => ({
  type: actionTypes.PLACE_ORDER_START,
});

export const placeOrderSuccess = payload => ({
  type: actionTypes.PLACE_ORDER_SUCCESS,
  payload,
});

export const placeOrderFail = payload => ({
  type: actionTypes.PLACE_ORDER_FAIL,
  payload,
});

export const UpdateTheCart = payload => ({
  type: actionTypes.UPDATE_CART,
  payload,
});

export const updateCart = payload => (dispatch) => {
  dispatch(UpdateTheCart(payload));
};

export const viewMenu = token => async (dispatch) => {
  dispatch(viewMenuStart());
  try {
    const response = await axios.get(`${HOST}/menu`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(viewMenuSuccess(response.data.menu));
  } catch (err) {
    dispatch(viewMenuFail(err.response.data.error));
  }
};

export const placeOrder = (payload, token) => async (dispatch) => {
  dispatch(placeOrderStart());
  try {
    const response = await axios.post(`${HOST}/orders`, {
      ...payload,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(placeOrderSuccess(response.data.message));
  } catch (err) {
    dispatch(placeOrderFail(err.response.data.error));
  }
};


export default {
  viewMenuStart,
  viewMenuSuccess,
  viewMenuFail,
  viewMenu,
  updateCart,
  placeOrderStart,
  placeOrderSuccess,
  placeOrderFail,
  placeOrder,
};
