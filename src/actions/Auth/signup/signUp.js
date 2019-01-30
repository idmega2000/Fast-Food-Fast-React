import axios from 'axios';
import * as actionTypes from '../AuthTypes/signupAuthTypes';
import HOST from '../../../helpers/hostUrl';


export const signUpStart = () => ({
  type: actionTypes.SIGN_UP_START,
});

export const signUpSuccess = payload => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload,
});

export const signUpFail = payload => ({
  type: actionTypes.SIGN_UP_FAIL,
  payload,
});
export const signUpUser = (userDetails, history) => async (dispatch) => {
  dispatch(signUpStart());

  try {
    const response = await axios.post(`${HOST}/auth/signup`, { ...userDetails });

    localStorage.setItem('token', response.data.token);
    dispatch(signUpSuccess(response.data.message));
    history.push('/');
  } catch (err) {
    dispatch(signUpFail(err.response.data.error));
  }
};


export default {
  signUpStart,
  signUpSuccess,
  signUpFail,
  signUpUser,
};
