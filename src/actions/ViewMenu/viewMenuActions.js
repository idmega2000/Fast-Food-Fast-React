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


export default {
  viewMenuStart,
  viewMenuSuccess,
  viewMenuFail,
  viewMenu,
};
