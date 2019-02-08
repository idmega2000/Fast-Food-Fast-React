import axios from 'axios';
import * as type from '../authTypes/loginActionTypes';
import HOST from '../../../helpers/hostUrl';

export const loginStart = () => ({
  type: type.LOGIN_START,
});

export const loginSuccess = payload => ({
  type: type.LOGIN_SUCCESS,
  payload,
});

export const loginFail = payload => ({
  type: type.LOGIN_FAIL,
  payload,
});

export const loginUser = userDetails => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(`${HOST}/auth/login`, { ...userDetails });
    localStorage.setItem('token', response.data.token);
    dispatch(loginSuccess(response.data.message));
  } catch (err) {
    dispatch(loginFail(err.response.data.error));
  }
};

export default {
  loginUser,
  loginStart,
  loginFail,
  loginSuccess,
};
