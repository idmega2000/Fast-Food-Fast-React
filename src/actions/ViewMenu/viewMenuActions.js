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

export const postMenuStart = () => ({
  type: actionTypes.POST_MENU_START,
});

export const postMenuSuccess = payload => ({
  type: actionTypes.POST_MENU_SUCCESS,
  payload,
});

export const postMenuFail = payload => ({
  type: actionTypes.POST_MENU_FAIL,
  payload,
});

export const UpdateTheCartIcon = payload => ({
  type: actionTypes.UPDATE_CART_ICON,
  payload,
});

export const updateCartIcon = payload => (dispatch) => {
  dispatch(UpdateTheCartIcon(payload));
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
  dispatch(postMenuStart());
  try {
    const response = await axios.post(`${HOST}/orders`, {
      ...payload,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(postMenuSuccess(response.data.message));
  } catch (err) {
    dispatch(postMenuFail(err.response.data.error));
  }
};


export default {
  viewMenuStart,
  viewMenuSuccess,
  viewMenuFail,
  viewMenu,
  updateCartIcon,
  postMenuStart,
  postMenuSuccess,
  postMenuFail,
  placeOrder,
};
