import * as type from '../../../actions/auth/authTypes/loginActionTypes';
import updateObject from '../../../helpers/store/utility';

export const initialState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};


const loginStart = state => updateObject(state,
  { isLoading: true, error: false });

const loginSuccess = (state, action) => updateObject(state, {
  isLoading: false,
  response: action.payload,
  success: true,
});

const loginFail = (state, action) => updateObject(state, {
  isLoading: false,
  error: true,
  response: action.payload,
});


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_START:
      return loginStart(state);
    case type.LOGIN_FAIL:
      return loginFail(state, action);
    case type.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    default:
      return state;
  }
};

export default loginReducer;
